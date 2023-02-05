function takeOrder (orderNum, deliveryOrders) {
  if (deliveryOrders.length >= 3) {
    return deliveryOrders;
  }
  deliveryOrders.push(orderNum);
  return deliveryOrders;
}

function refundOrder(orderNumber, deliveryOrders) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNumber) {
    return deliveryOrders.splice(i, 1)  
  }
 }
}

function listItems (item, orderNumber) {
  var newString = ''
  if (orderNumber === orderNumber) {
   console.log(newString.concat(item))
  }
//  var newString = ''
//  newString = newString + item 
//  console.log(newString)
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}