<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Fetch all products
        $products = Product::all()->map(function ($product) {
            $product->productImage = asset('storage/' . $product->productImage); // Generate full URL
            return $product;
        });

// Return the Inertia response with the products data
        return Inertia::render('Products', [
            'products' => $products,
        ]);

    }

    public function show($id)
{
    $product               = Product::findOrFail($id);
$product->productImage = asset('storage/' . $product->productImage);

    return Inertia::render('ProductsDetail', ['product' => $product]);
}
}
