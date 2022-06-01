<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\UpsertProductRequest;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view('products.index',[
            'products'=> Product::paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(): View
    {
        return view('products.create', [
            'categories'=> ProductCategory::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UpserProductRequest  $request
     * @return RedirectResponse
     */
    public function store(UpsertProductRequest $request): RedirectResponse
    {
        $product = new Product($request->validated());
        if ($request->hasFile('image')) {
            $product->image_path = $request->file('image')->store('products');
        }
        $product->save();
        return redirect(route('products.index'))->with('status', __('translate.product.status.store.success'));
    }

    /**
     * Display the specified resource.
     *
     * @param  Product  $product
     * @return View
     */
    public function show(Product $product): View
    {
        return view('products.show',[
            'products'=> $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Product  $product
     * @return View
     */
    public function edit(Product $product): View
    {
        return view('products.edit',[
            'products'=> $product,
            'categories' => ProductCategory::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpserProductRequest  $request
     * @param  Product  $product
     * @return View
     */
    public function update(UpsertProductRequest $request, Product $product) : RedirectResponse
    {
        $product->fill($request->validated());
        if ($request->hasFile('image')) {
            $product->image_path = $request->file('image')->store('products');
        }
        
        $product->save();
        return redirect(route('products.index'))->with('status', __('translate.product.status.update.success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Product  $product
     * @return Response
     */
    public function destroy(Product $product): JsonResponse
    { 
        try{
            $product->delete();
            Session::flash('status', __('translate.product.status.delete.success'));
            return response()->json([
                'status'=>'succes'
            ]);  
        } catch (Exception $e) {
            return response()->json([
                'status'=>'error',
                'message'=> 'Wystąpił błąd!'
            ])->setStatusCode(500);
        }
        
        
    }
}
