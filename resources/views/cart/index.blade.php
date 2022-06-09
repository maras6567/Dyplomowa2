@extends('layouts.app')

@section('css-files')
    <link href="{{ asset('css/cart.css') }}" rel="stylesheet">
@endsection

@section('content')
<div class="container">
    @include('helpers.flash-messages')
        <div class="cart_section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="cart_container">
                            <div class="cart_title">Aktualna ilość<small> ({{ $cart->getItems()->count() }}) </small></div>
                            <div class="cart_items">
                                <ul class="cart_list">
                                    @foreach($cart->getItems() as $item)
                                        <li class="cart_item clearfix">
                                            <div class="cart_item_image"><img src="{{ $item->getImage() }}" alt="Zdjęcie"></div>
                                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div class="cart_item_name cart_info_col">
                                                    <div class="cart_item_title">Nazwa</div>
                                                    <div class="cart_item_text">{{ $item->getName() }}</div>
                                                </div> 
                                                <div class="cart_item_quantity cart_info_col">
                                                    <div class="cart_item_title">Ilość</div>
                                                    <div class="cart_item_text">{{ $item->getQuantity() }}</div>
                                                </div>
                                                <div class="cart_item_price cart_info_col">
                                                    <div class="cart_item_title">Cena</div>
                                                    <div class="cart_item_text">{{ $item->getPrice() }}</div>
                                                </div>
                                                <div class="cart_item_total cart_info_col">
                                                    <div class="cart_item_title">Suma</div>
                                                    <div class="cart_item_text">{{ $item->getSum() }}</div>
                                                </div>
                                            </div>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                            <div class="order_total">
                                <div class="order_total_content text-md-right">
                                    <div class="order_total_title">Suma całkowita:</div>
                                    <div class="order_total_amount">{{ $cart->getSum() }}</div>
                                </div>
                            </div>
                                <div class="cart_buttons"> <button type="button" class="button cart_button_clear">Wróć</button> 
                                <button type="button" class="button cart_button_checkout" disabled>Dalej</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</div>
@endsection
    
@section('javascript')
    const deleteUrl = "{{url('products')}}/";
    const confirmDelete = "{{__('translate.messages.delete_confirm')}}";
@endsection

@section('js-files')
    <script src="{{ asset('js/delete.js') }}"></script>
@endsection