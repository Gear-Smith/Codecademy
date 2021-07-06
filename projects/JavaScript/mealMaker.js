const menu = {
    get courses () {
      return { 
        appetizers: this._courses.appetizers, 
        mains: this._courses.mains, 
        desserts: this._courses.desserts
      }
    },
    
    _courses: {
      appetizers: [], 
      mains: [], 
      desserts: [],
  
      set _appetizers(appetizerIn) {
        var propertyName = appetizerIn.name
        this.appetizers[propertyName] = appetizerIn
        
      },
      set _mains(mainIn) {
        var propertyName = mainIn.name
        this.mains[propertyName] = mainIn      
      },
      
      set _desserts(dessertIn) {
        var propertyName = dessertIn.name
        this.desserts[propertyName] = dessertIn
      },
  
    },
    
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = new Object()
      //const dish = []
      dish.name = dishName
      dish.price = dishPrice
  
      if (courseName === "appetizers") {
        this._courses.appetizers.push(dish)
      }
      if (courseName === "mains") {
        this._courses.mains.push(dish)
      }
      if (courseName === "desserts") {
        this._courses.desserts.push(dish)
      }
    },
  
    getRandomDishFromCourse (courseName) {
      let dishes = this._courses[courseName];
      //console.log(dishes[2].name, dishes[2].price)
      return dishes[Math.floor(Math.random() * dishes.length)]
    },
  
    generateRandomMeal () {
      let appetizer = this.getRandomDishFromCourse("appetizers")
      let main = this.getRandomDishFromCourse("mains")
      let dessert = this.getRandomDishFromCourse("desserts")
      
      let totalPrice = appetizer.price + main.price + dessert.price
      
      let msg = `
        Your meal consists of: 
              
        ${appetizer['name']}: $${appetizer['price']}
        ${main['name']}: $${main['price']}
        ${dessert['name']}: $${dessert['price']}
             
        Total Price: ${totalPrice}`
    
    return msg
  
    }
  }
  menu.addDishToCourse("appetizers", "Wings", 5.25)
  menu.addDishToCourse("appetizers", "Fries", 2.25)
  menu.addDishToCourse("appetizers", "Chips", 2.25)
  
  menu.addDishToCourse("mains", "Steak", 17.25)
  menu.addDishToCourse("mains", "Cheese Burger", 8.25)
  menu.addDishToCourse("mains", "Salmon", 17.25)
  
  menu.addDishToCourse("desserts", "Cheese Cake", 6.25)
  menu.addDishToCourse("desserts", "Ice Cream", 3.25)
  menu.addDishToCourse("desserts", "Reeses Whip", 4.25)
  
  let meal = menu.generateRandomMeal()
  
  console.log(meal)