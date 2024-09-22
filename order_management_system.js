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
