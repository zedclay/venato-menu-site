<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $perPage = (int) ($request->integer('per_page') ?: 9);
        $perPage = max(1, min(48, $perPage));

        $query = MenuItem::query()
            ->where('is_active', true)
            ->with(['category:id,slug,name_fr,name_ar'])
            ->orderByDesc('is_popular')
            ->orderByDesc('is_speciality')
            ->orderByDesc('is_new')
            ->orderBy('name_fr');

        $categorySlug = $request->string('category')->toString();
        if ($categorySlug !== '') {
            $query->whereHas('category', fn (Builder $q) => $q->where('slug', $categorySlug));
        }

        $filter = $request->string('filter')->toString();
        if ($filter === 'popular') {
            $query->where('is_popular', true);
        } elseif ($filter === 'new') {
            $query->where('is_new', true);
        } elseif ($filter === 'speciality') {
            $query->where('is_speciality', true);
        } elseif ($filter === 'vegetarian') {
            $query->where('is_vegetarian', true);
        }

        $search = trim($request->string('q')->toString());
        if ($search !== '') {
            $query->where(function (Builder $q) use ($search) {
                $q->where('name_fr', 'like', "%{$search}%")
                    ->orWhere('description_fr', 'like', "%{$search}%")
                    ->orWhere('name_ar', 'like', "%{$search}%")
                    ->orWhere('description_ar', 'like', "%{$search}%");
            });
        }

        $items = $query->paginate($perPage);

        return response()->json([
            'data' => $items->items(),
            'meta' => [
                'current_page' => $items->currentPage(),
                'last_page' => $items->lastPage(),
                'per_page' => $items->perPage(),
                'total' => $items->total(),
            ],
        ]);
    }
}
