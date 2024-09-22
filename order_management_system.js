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
      customerName: "John", 
      items: [
        { name: "Americano", quantity: 1 },
        { name: "Matcha Latte", quantity: 2 }
      ],
      status: "Pending"
    },
    {
      customerName: "AKMAL", 
      items: [{ name: "Cappuchino", quantity: 2 }],
      status: "Completed"
    }
  ];
  
  const placeOrder = (customerName, orderedItems) => {
    // Check if all items are in stock
    for (let orderedItem of orderedItems) {
      let product = inventory.find(item => item.name === orderedItem.name);
  
      if (!product) {
        console.log(`Error: Product ${orderedItem.name} is not available.`);
        return; // Exit if any product is not found in inventory
      }
  
      if (orderedItem.quantity > product.quantity) {
        console.log(`Error: Insufficient stock for ${orderedItem.name}.`);
        return; // Exit if any item doesn't have enough stock
      }
    }
  
    // If all items are in stock, update the inventory
    for (let orderedItem of orderedItems) {
      let product = inventory.find(item => item.name === orderedItem.name);
      product.quantity -= orderedItem.quantity; // Deduct the ordered quantity from the stock
    }
  
    // Add the new order to the orders array with status "Pending"
    let newOrder = {
      customerName: customerName,
      items: orderedItems,
      status: "Pending"
    };
    orders.push(newOrder); // Add the new order to the orders array
  
    console.log(`Order placed successfully for ${customerName}.`);
  };
  
  const completeOrder = (customerName) => {
    // Find the order by customer name
    let order = orders.find(order => order.customerName === customerName && order.status === "Pending");
  
    // If order is found, change its status to "Completed"
    if (order) {
      order.status = "Completed";
      console.log(`Order for ${customerName} has been marked as Completed.`);
    } else {
      // If no order is found, log an error message
      console.log(`Error: Pending order for ${customerName} not found.`);
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