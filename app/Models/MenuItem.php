<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MenuItem extends Model
{
    protected $fillable = [
        'category_id',
        'name_fr',
        'name_ar',
        'description_fr',
        'description_ar',
        'price_da',
        'image_url',
        'is_popular',
        'is_new',
        'is_speciality',
        'is_vegetarian',
        'is_active',
    ];

    protected $casts = [
        'is_popular' => 'boolean',
        'is_new' => 'boolean',
        'is_speciality' => 'boolean',
        'is_vegetarian' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
