// Ex1 , Ex2

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let index = 0; index < names.length; index++){
    let obj = {
        name: names[index],
         age: ages[index]
    }
    people.push(obj)
}

for(let obj of people){
     console.log("%s is %d years old", obj.name, obj.age)
}





        

