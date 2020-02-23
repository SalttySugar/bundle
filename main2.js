/**
 * loading-screen
 */



function loaded()
{

    $("#loading-screen").css({transition: "0.25s ease-in"});
    $(".page-wrapper").css({visibility:"visible"});
    $("#loading-screen").css({opacity: "0"});
    

    setTimeout(function(){
        $("#loading-screen").css({display: "none"});
    } , 250);
}


$(window).on("load",function(){
    loaded();
})



function remove_from_cart()
{
    let container = $(this).parents('.button-group');
    container.empty();

    let buy_button = $('<button class="buy-button product-item-button">Добавить в корзину</button>');
    buy_button.click(add_to_cart);

    container.append(buy_button);
}


function add_to_cart()
{
    let container = $(this).parent(".button-group");
    $(this).unbind();
    $(container).empty();

    let cart_controls = $('<div class="product-item-cart-control"> </div>');

    let cart_trash = $('<i class="icon icon-trash"></i>');
    let cart_quantity = $('<span class="quantity"><i class="icon icon-loading"></i></span>');
    let cart_add = $('<i class="icon icon-add"></i>');
    
    cart_trash.click(remove_from_cart);
    cart_add.click(function(){

        let current = Number.parseInt(cart_quantity.text());
        cart_quantity.text("2");


    });

    cart_controls.append(cart_trash , cart_quantity , cart_add);

    let order_button = $(' <button class="button product-item-button order-button"> Оформить </button>');

    $(container).append(cart_controls , order_button);
}



$(".button-group button.buy-button").click(add_to_cart);