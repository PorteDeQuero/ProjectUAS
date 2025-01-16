<?php
namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    // Add item to cart
    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|string',
            'product_name' => 'required|string',
            'product_price' => 'required|numeric',
            'quantity' => 'required|integer|min:1',
        ]);

        // // Check if the product already exists in the cart
        $cartItem = Cart::where('product_id', $request->product_id)->first();

        if ($cartItem) {
            // If it exists, update the quantity
            $cartItem->quantity += $request->quantity;
            $cartItem->save();
        } else {
            // If it doesn't exist, create a new cart item
            $cartItem = Cart::create([
                'product_id' => $request->product_id,
                'product_name' => $request->product_name,
                'productImage' => $request->productImage,
                'product_price' => $request->product_price,
                'quantity' => $request->quantity,
            ]);
        }

        return response()->json($cartItem, 201);
    }

    // Get all cart items
    public function index()
    {
        $cartItems = Cart::all();


        return Inertia::render('Cart', [
            'carts' => $cartItems,
        ]);

    }

    // Remove item from cart
    public function remove($id)
    {
        $cartItem = Cart::findOrFail($id);
        $cartItem->delete();
        return response()->json(['message' => 'Item removed from cart']);
    }
}
