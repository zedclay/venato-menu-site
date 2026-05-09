<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        $categories = Category::query()
            ->orderBy('sort_order')
            ->orderBy('name_fr')
            ->get(['id', 'slug', 'name_fr', 'name_ar', 'sort_order']);

        return response()->json([
            'data' => $categories,
        ]);
    }
}
