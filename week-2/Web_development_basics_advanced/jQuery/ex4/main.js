
const addDiv = function(item){
    $('#cart').append(`<div class=cart-item>${item}</div>`)
}


$('.item').on('click', function() {
    if($(this).data().instock === true){
        addDiv($(this).html())
    }
})
