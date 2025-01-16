<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'productName' => $this->faker->word, // Generates a random word for the product name
            'productPrice' => $this->faker->randomFloat(2, 1, 100), // Generates a random price between 1 and 100
            'productDescription' => $this->faker->paragraph, // Generates a random paragraph for the description
            'productImage' => $this->faker->imageUrl(640, 480, 'products', true), // Generates a random image URL
        ];

    }
}
