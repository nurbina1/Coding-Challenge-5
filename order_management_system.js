let inventory = [
{
    name: "Dunkin Latte",
    price: 10,
    quantity: 20
},
{
    name: "Cappuchino",
    price: 5,
    quantity: 25
},
{
    name: "Matcha Latte",
    price: 6,
    quantity: 15
},
{
    name: "Americano",
    price: 4,
    quantity: 12
}
];

let orders = [
{
    costumerName: "John",
    items: [
        {name: "Americano", quantity: 1},
        {name: "Matcha Latte", quantity: 2}],
    status: "Pending"
},
{
    costumerName: "AKMAL",
    items:[
        {name: "Cappuchino", quantity: 2}],
    status: "Completed"

}
];

const placeOrder = (costumerName, orderedItems) => 
    {
    for(let orderedItem of orderedItems){
        let product = inventory.find(item => item.name === orderedItem.name);
    }
    
    if (!product) {
        console.log(`Error: Product ${orderedItem.name} is not available.`);
        return; // Exit if any product is not found in inventory
    }

    if (orderedItem.quantity > product.quantity) {
        console.log(`Error: Insufficient stock for ${orderedItem.name}.`);
        return; // Exit if any item doesn't have enough stock
    }

    for (let orderedItem of orderedItems) {
        let product = inventory.find(item => item.name === orderedItem.name);
        product.quantity -= orderedItem.quantity; // Deduct the ordered quantity from the stock
    }

    let newOrder = {
        customerName: customerName,
        items: orderedItems,
        status: "Pending"
    };
    orders.push(newOrder); // Add the new order to the orders array
}

const completeOrder = (costumerName) => {
    // Find the order by customer name
    let order = orders.find(order => order.customerName === customerName);
  
    // If order is found, change its status to "Completed"
    if (order) {
      order.status = "Completed";
      console.log(`Order for ${customerName} has been marked as Completed.`);
    } else {
      // If no order is found, log an error message
      console.log(`Error: Order for ${customerName} not found.`);
    }
  };

  const checkPendingOrders = () => {
    let hasPendingOrders = false; // Track if there are pending orders
  
    // Iterate over all orders
    for (let order of orders) {
      if (order.status === "Pending") {
        hasPendingOrders = true;
        console.log(`Pending Order for ${order.customerName}:`);
        console.log(order.items);
      }
    }
  
    // If no pending orders are found
    if (!hasPendingOrders) {
      console.log("No pending orders found.");
    }
  };