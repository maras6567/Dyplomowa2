@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('translate.product.add_form.title2')}}</div>
                <div class="card-body">
                    <div class="row mb-3">
                        <label for="name" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.name')}}</label>
                        <div class="col-md-6">
                            <input id="name" type="text" maxlength="500" class="form-control" name="name" value="{{ $products->name }}" disabled>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="description" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.description')}}</label>
                        <div class="col-md-6">
                             <textarea id="description" maxlength="1500" class="form-control" name="description" autofocus disabled> {{ $products->description }} </textarea>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="amount" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.amount')}}</label>

                        <div class="col-md-6">
                            <input id="amount" type="number" min="0" class="form-control" name="amount" value="{{ $products->amount }}" disabled>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="price" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.price')}}</label>

                        <div class="col-md-6">
                            <input id="price" type="number" step="0.01" min="0" class="form-control" name="price" value="{{ $products->price }}" disabled>

                        </div>
                    </div>


                    <div class="row mb-3">
                            <label for="category" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.category')}}</label>

                            <div class="col-md-6">
                                <select id="price" class="form-control" name="category_id" disabled>
                                    @if($products->hascategory())
                                        <option>{{ $products ->category->name }}</option>
                                    @else
                                        <option>Brak</option>
                                    @endif
                                </select>
                            </div>
                        </div>

                              
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
