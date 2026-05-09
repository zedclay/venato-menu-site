<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['slug' => 'resto', 'name_fr' => 'Resto', 'name_ar' => 'مطعم', 'sort_order' => 10],
            ['slug' => 'pizza', 'name_fr' => 'Pizza', 'name_ar' => 'بيتزا', 'sort_order' => 20],
            ['slug' => 'burgers', 'name_fr' => 'Burgers', 'name_ar' => 'برغر', 'sort_order' => 30],
            ['slug' => 'tacos', 'name_fr' => 'Tacos', 'name_ar' => 'تاكوس', 'sort_order' => 40],
            ['slug' => 'sandwichs', 'name_fr' => 'Sandwichs', 'name_ar' => 'سندويتش', 'sort_order' => 50],
            ['slug' => 'plats', 'name_fr' => 'Plats', 'name_ar' => 'أطباق', 'sort_order' => 60],
            ['slug' => 'salades', 'name_fr' => 'Salades', 'name_ar' => 'سلطات', 'sort_order' => 70],
            ['slug' => 'cafe', 'name_fr' => 'Café', 'name_ar' => 'قهوة', 'sort_order' => 80],
            ['slug' => 'boissons', 'name_fr' => 'Boissons', 'name_ar' => 'مشروبات', 'sort_order' => 90],
            ['slug' => 'glace', 'name_fr' => 'Glace', 'name_ar' => 'آيس كريم', 'sort_order' => 100],
            ['slug' => 'desserts', 'name_fr' => 'Desserts', 'name_ar' => 'حلويات', 'sort_order' => 110],
        ];

        foreach ($categories as $category) {
            Category::query()->updateOrCreate(['slug' => $category['slug']], $category);
        }

        $bySlug = Category::query()->pluck('id', 'slug');

        $items = [
            [
                'category' => 'burgers',
                'name_fr' => 'Burger Classique',
                'description_fr' => 'Bœuf haché frais, cheddar affiné, oignons caramélisés, sauce maison.',
                'price_da' => 850,
                'image_url' => 'https://images.pexels.com/photos/9268667/pexels-photo-9268667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_popular' => true,
            ],
            [
                'category' => 'glace',
                'name_fr' => 'Coupe Glacée Signature',
                'description_fr' => '3 boules au choix, coulis, éclats de noisettes torréfiées, chantilly.',
                'price_da' => 600,
                'image_url' => 'https://images.pexels.com/photos/29989975/pexels-photo-29989975/free-photo-of-gourmet-ice-cream-dessert-with-edible-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_popular' => true,
                'is_speciality' => true,
            ],
            [
                'category' => 'pizza',
                'name_fr' => 'Pizza Margherita',
                'description_fr' => 'Sauce tomate, mozzarella fraîche, basilic, huile d’olive extra vierge.',
                'price_da' => 700,
                'image_url' => 'https://images.pexels.com/photos/5953567/pexels-photo-5953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_popular' => true,
            ],
            [
                'category' => 'plats',
                'name_fr' => 'Entrecôte Grillée',
                'description_fr' => 'Viande sélectionnée, cuisson au choix, frites maison et salade.',
                'price_da' => 1800,
                'image_url' => 'https://images.pexels.com/photos/7944334/pexels-photo-7944334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_speciality' => true,
            ],
            [
                'category' => 'salades',
                'name_fr' => 'Salade Vénato',
                'description_fr' => 'Mix de salades, poulet grillé, avocat, tomates cerises, vinaigrette.',
                'price_da' => 750,
                'image_url' => 'https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_vegetarian' => false,
            ],
            [
                'category' => 'cafe',
                'name_fr' => 'Cappuccino Royal',
                'description_fr' => 'Espresso double, mousse de lait onctueuse, soupçon de cacao.',
                'price_da' => 350,
                'image_url' => 'https://images.pexels.com/photos/14930389/pexels-photo-14930389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'plats',
                'name_fr' => 'Poulet à la Crème',
                'description_fr' => 'Poulet tendre, sauce crème champignons, riz parfumé.',
                'price_da' => 1300,
                'image_url' => 'https://images.pexels.com/photos/9738994/pexels-photo-9738994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_new' => true,
            ],
            [
                'category' => 'plats',
                'name_fr' => 'Pâtes Alfredo',
                'description_fr' => 'Sauce crémeuse, parmesan, touche de poivre noir.',
                'price_da' => 950,
                'image_url' => 'https://images.pexels.com/photos/5639993/pexels-photo-5639993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_vegetarian' => true,
            ],
            [
                'category' => 'pizza',
                'name_fr' => 'Pizza Pepperoni',
                'description_fr' => 'Sauce tomate, mozzarella, pepperoni, origan.',
                'price_da' => 900,
                'image_url' => 'https://images.pexels.com/photos/5953567/pexels-photo-5953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'pizza',
                'name_fr' => 'Pizza 4 Fromages',
                'description_fr' => 'Mozzarella, gorgonzola, parmesan, emmental.',
                'price_da' => 1000,
                'image_url' => 'https://images.pexels.com/photos/5953567/pexels-photo-5953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_vegetarian' => true,
            ],
            [
                'category' => 'burgers',
                'name_fr' => 'Burger Signature',
                'description_fr' => 'Bœuf, cheddar, sauce signature, pain brioché.',
                'price_da' => 1200,
                'image_url' => 'https://images.pexels.com/photos/12325012/pexels-photo-12325012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_speciality' => true,
            ],
            [
                'category' => 'burgers',
                'name_fr' => 'Burger Chicken Crispy',
                'description_fr' => 'Poulet croustillant, salade, mayo maison.',
                'price_da' => 950,
                'image_url' => 'https://images.pexels.com/photos/12325012/pexels-photo-12325012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_new' => true,
            ],
            [
                'category' => 'tacos',
                'name_fr' => 'Tacos Poulet',
                'description_fr' => 'Poulet, sauce fromagère, frites, épices.',
                'price_da' => 800,
                'image_url' => 'https://images.pexels.com/photos/4508965/pexels-photo-4508965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'tacos',
                'name_fr' => 'Tacos Viande Hachée',
                'description_fr' => 'Viande hachée, fromage, oignons, sauce maison.',
                'price_da' => 900,
                'image_url' => 'https://images.pexels.com/photos/4508965/pexels-photo-4508965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'sandwichs',
                'name_fr' => 'Sandwich Thon',
                'description_fr' => 'Thon, œuf, crudités, sauce légère.',
                'price_da' => 650,
                'image_url' => 'https://images.pexels.com/photos/15278331/pexels-photo-15278331/free-photo-of-delicious-sandwiches-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'sandwichs',
                'name_fr' => 'Panini Poulet',
                'description_fr' => 'Poulet, fromage, sauce basilic.',
                'price_da' => 700,
                'image_url' => 'https://images.pexels.com/photos/6416558/pexels-photo-6416558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_new' => true,
            ],
            [
                'category' => 'salades',
                'name_fr' => 'Salade César',
                'description_fr' => 'Laitue romaine, poulet, croûtons, parmesan, sauce César.',
                'price_da' => 1400,
                'image_url' => 'https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'salades',
                'name_fr' => 'Salade Grecque',
                'description_fr' => 'Tomates, concombre, feta, olives, origan.',
                'price_da' => 900,
                'image_url' => 'https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_vegetarian' => true,
            ],
            [
                'category' => 'cafe',
                'name_fr' => 'Latte Macchiato',
                'description_fr' => 'Lait chaud, espresso, mousse légère.',
                'price_da' => 400,
                'image_url' => 'https://images.pexels.com/photos/14930389/pexels-photo-14930389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'boissons',
                'name_fr' => 'Jus d’Orange Frais',
                'description_fr' => 'Pressé minute.',
                'price_da' => 300,
                'image_url' => 'https://images.pexels.com/photos/4958852/pexels-photo-4958852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_vegetarian' => true,
            ],
            [
                'category' => 'boissons',
                'name_fr' => 'Mojito (Sans alcool)',
                'description_fr' => 'Menthe fraîche, citron vert, eau gazeuse.',
                'price_da' => 450,
                'image_url' => 'https://images.pexels.com/photos/11937508/pexels-photo-11937508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_new' => true,
                'is_vegetarian' => true,
            ],
            [
                'category' => 'desserts',
                'name_fr' => 'Tiramisu',
                'description_fr' => 'Crème mascarpone, café, cacao.',
                'price_da' => 550,
                'image_url' => 'https://images.pexels.com/photos/6025814/pexels-photo-6025814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_popular' => true,
            ],
            [
                'category' => 'desserts',
                'name_fr' => 'Cheesecake',
                'description_fr' => 'Coulis fruits rouges.',
                'price_da' => 600,
                'image_url' => 'https://images.pexels.com/photos/6025814/pexels-photo-6025814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            [
                'category' => 'glace',
                'name_fr' => 'Glace Vanille',
                'description_fr' => '2 boules, coulis au choix.',
                'price_da' => 400,
                'image_url' => 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'is_vegetarian' => true,
            ],
        ];

        foreach ($items as $item) {
            $slug = $item['category'];
            $categoryId = $bySlug[$slug] ?? null;
            if (!$categoryId) {
                continue;
            }

            MenuItem::query()->updateOrCreate(
                ['category_id' => $categoryId, 'name_fr' => $item['name_fr']],
                [
                    'category_id' => $categoryId,
                    'name_fr' => $item['name_fr'],
                    'name_ar' => $item['name_ar'] ?? null,
                    'description_fr' => $item['description_fr'] ?? null,
                    'description_ar' => $item['description_ar'] ?? null,
                    'price_da' => $item['price_da'] ?? 0,
                    'image_url' => $item['image_url'] ?? null,
                    'is_popular' => (bool) ($item['is_popular'] ?? false),
                    'is_new' => (bool) ($item['is_new'] ?? false),
                    'is_speciality' => (bool) ($item['is_speciality'] ?? false),
                    'is_vegetarian' => (bool) ($item['is_vegetarian'] ?? false),
                    'is_active' => true,
                ]
            );
        }
    }
}
