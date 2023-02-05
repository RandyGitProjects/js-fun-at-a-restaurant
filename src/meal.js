function nameMenuItem(name) {
return (`Delicious ${name}`)
}

function createMenuItem(foodName, foodPrice, foodType) {
  var menu = {
    name: foodName,
    price: foodPrice,
    type: foodType
  }
  return menu
} 

function addIngredients(ingredient, ingredientList) {
  for (var i = 0; i < ingredientList.length; i++) {
    if (ingredientList[i] === ingredient) {
      return ingredientList;
    }
  }
  ingredientList.push(ingredient);
  return ingredientList;
}

// function refundOrder(orderNumber, deliveryOrders) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].orderNumber === orderNumber) {
//       return deliveryOrders.splice(i, 1);
//     }
//   }
// } 

function formatPrice(cost, fullCost) {
 return fullCost = `$${cost}`
}

function decreasePrice(price, reducedPrice) {
 return reducedPrice = price * .9
}

function createRecipe(foodTitle, foodIngredients, menuItemType) {
  var recipe = {
    title: foodTitle,
    ingredients: foodIngredients,
    type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


