const coffeeShop = {
  beans: 40,
  money:100,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement: 15, price: 14},
    frenchPress: {beanRequirement: 12, price: 11},
  },
  doesDrinkExist: function(drinkType){
    return this.drinkRequirements[drinkType] != undefined
    

  },

  makeDrink: function (drinkType) {
    const requirments = this.drinkRequirements;

    if (requirments[drinkType] && requirments[drinkType].beanRequirement <= this.beans) {
      this.beans -= requirments[drinkType].beanRequirement;
      console.log("success");
    } 
    else if (requirments[drinkType]) {
        this.buyBeans(requirments[drinkType].beanRequirement)
        this.makeDrink(drinkType)
    } 
    else {
      console.log("Sorry, we don’t make ");
    }
  },
  buyBeans: function(numBeans){
    const beanCost = 1
    this.money -= beanCost * numBeans
    this.beans += numBeans
  },
  buyDrink: function(drinkType){
    const requirments = this.drinkRequirements
    if(requirments[drinkType]){
    this.money += requirments[drinkType].price
    }
    this.makeDrink(drinkType)
  }

};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
