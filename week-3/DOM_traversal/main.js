$('.generator').on('click', function(){
let closestProcessor = $(this).closest('.processor')
    console.log("processor ID: " + closestProcessor.attr('id'))

let closestComputer = $(closestProcessor).closest('.computer')
console.log("Computers data-id: " + closestComputer.data().id)
let closestBus = $(closestComputer).find('.BUS')
console.log('BUS: ' + closestBus.text())

})

$('.validator').on('click', function(){
    let elementsTraversal = $(this).closest('.computer').find('.processor').find('.generator')
        console.log("generator: " + elementsTraversal.text())
    elementsTraversal = $(elementsTraversal).closest('.computer').find('.MB')

    console.log("MB: " + elementsTraversal.text())
    elementsTraversal = $(elementsTraversal).closest('.computer').find(".QR")
    console.log("QR: " + elementsTraversal.text())
    
    })