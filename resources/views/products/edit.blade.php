@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('translate.product.add_form.title4', ['name' => $products->name])}}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('products.update', $products->id) }}" enctype="multipart/form-data">
                        {{ method_field('PUT') }}
                    @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.name')}}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" maxlength="500" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ $products->name }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="description" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.description')}}</label>

                            <div class="col-md-6">
                                <textarea id="description" maxlength="1500" class="form-control @error('description') is-invalid @enderror" name="description" required autofocus> {{ $products->description }} </textarea>

                                @error('description')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="amount" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.amount')}}</label>

                            <div class="col-md-6">
                                <input id="amount" type="number" min="0" class="form-control @error('amount') is-invalid @enderror" name="amount" value="{{ $products->amount }}" required autocomplete="amount" autofocus>

                                @error('amount')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="price" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.price')}}</label>

                            <div class="col-md-6">
                                <input id="price" type="number" step="0.01" min="0" class="form-control @error('price') is-invalid @enderror" name="price" value="{{ $products->price }}" required autocomplete="price">

                                @error('price')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        <div class="row mb-3">
                            <label for="category" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.category')}}</label>

                            <div class="col-md-6">
                                <select id="price" class="form-control @error('category_id') is-invalid @enderror" name="category_id">
                                    <option value="">Brak</option>
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id}}" @if($products->isSelectedCategory($category->id)) selected @endif >{{ $category->name }} </option>
                                    @endforeach
                                </select>
                                @error('category_id')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>



                        <div class="row mb-3">
                            <label for="image" class="col-md-4 col-form-label text-md-end">{{__('translate.product.add_form.image')}}</label>

                            <div class="col-md-6">
                                <input id="image" type="file" class="form-control @error('image') is-invalid @enderror" name="image" >

                                @error('image')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class=" col-md-6">
                                @if(!is_null($products->image_path))
                                    <a href="{{ route('products.downloadImage', $products->id) }}">
                                        <img src="{{asset('storage/' . $products->image_path) }}" alt="Zdjęcie produktu">
                                    </a>        
                                @endif
                            </div>
                        </div>

                        

                        <div class="row mb-0 float-right">
                            <div class="col-md-6 ">
                                <button type="submit" class="btn btn-primary">
                                    Zapisz
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
