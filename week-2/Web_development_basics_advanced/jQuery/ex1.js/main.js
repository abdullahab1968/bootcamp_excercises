$("#add").on("click", function() {

    const newDiv = "<li>" + $('input').val() + "</li>"
    $('ul').append(newDiv)
    $('input').val('') 
})

$('ul').on('click', 'li', function(){
    $(this).remove()

})
