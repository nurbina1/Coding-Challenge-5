description
// Test Case 1: Successful Order Placement
placeOrder("Alice", [
  { name: "Dunkin Latte", quantity: 2 },
  { name: "Americano", quantity: 3 }
]);
// Expected Output: "Order placed successfully for Alice."

// Test Case 2: Insufficient Stock
placeOrder("Alice", [
  { name: "Dunkin Latte", quantity: 100 }
]);
// Expected Output: "Error: Insufficient stock for Dunkin Latte."

// Test Case 3: Product Not Found
placeOrder("Bob", [
  { name: "Non-Existent Product", quantity: 1 }
]);
// Expected Output: "Error: Product Non-Existent Product is not available."

// Test Case 4: Completing a Pending Order
completeOrder("John");
// Expected Output: "Order for John has been marked as Completed."

// Test Case 5: Completing an Order That Doesn't Exist
completeOrder("Bob");
// Expected Output: "Error: Pending order for Bob not found."

// Test Case 6: Checking Pending Orders
checkPendingOrders();
// Expected Output: Logs all pending orders. If none, "No pending orders found."
