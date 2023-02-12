
const createElement = function() {
    const div = "<div class='box' id='first'></div>"
    $('body').append(div)
    const div2 = "<div class='box' id='second'></div>"
    $('body').append(div2)
    
}
createElement()
$('body').on('mouseenter', '.box', function(){
    $(this).css('background-color', '#8e44ad')
})
$('body').on('mouseleave', '.box', function(){
    $(this).css('background-color', 'red')
})

$('body').on('mouseenter', '.box', function(){
    $(this).css('background-color', '#8e44ad')
})
$('body').on('mouseleave', '.box', function(){
    $(this).css('background-color', 'red')
})
