// Extentions

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
let fridge = kitchen.fridge
let hasOven = kitchen.hasOven
let owner = kitchen.owner
let items = fridge.items
let expired = items.expiryDate

if (hasOven === true && fridge.works === true){
    if (items.expiryDate < date){
        expired = date - expiryDate
    }
    // console.log(owner + "'s " + items.)
}
