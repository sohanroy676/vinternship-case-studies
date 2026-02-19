/**
 * MongoDB Case Study 2: CRUD Operations
 * NPTEL Vinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 *
 * How to run:
 *      mongosh WIN251113_Mongo_CS_2.js
 */

// You’re managing FastBite’s menu database. Complete these tasks using MongoDB CRUD operations:
db.dishes.insertOne({
    name: "Old Special Soup",
    cuisine: "Western",
    price: 8.75,
    tags: ["gluten-free"],
    available: false,
});

// 1. Add a new vegan dish called “Tofu Buddha Bowl” (cuisine: “Asian”, price: $9.50, tags: [“vegan”, “gluten-free”], available: true).
const result1 = db.dishes.insertOne({
    name: "Tofu Buddha Bowl",
    cuisine: "Asian",
    price: 9.5,
    tags: ["vegan", "gluten-free"],
    available: true,
});
print("Inserted dish Tofu Buddha Bowl");
printjson(result1);
// OUTPUT:
// Inserted dish Tofu Buddha Bowl
// {
//   acknowledged: true,
//   insertedId: ObjectId('69917ee35cc874a9937c2908')
// }

// 2. Find all available vegan dishes under $12, showing only their name and price.
const result2 = db.dishes.find(
    {
        $and: [{ available: true }, { tags: "vegan" }, { price: { $lt: 12 } }],
    },
    { _id: false, name: true, price: true }
);
print("Available vegan dishes under $12");
printjson(result2);
// OUTPUT:
// Available vegan dishes under $12
// [
//   {
//     name: 'Tofu Buddha Bowl',
//     price: 9.5
//   }
// ]

// 3. Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag.
const result3 = db.dishes.updateOne(
    { name: "Tofu Buddha Bowl" },
    { $set: { price: 10.0 }, $push: { tags: "popular" } }
);
print("Updated the price of Tofu Buddha Bowl to $10 and added popular tag");
printjson(result3);
// OUTPUT:
// Updated the price of Tofu Buddha Bowl to $10 and added popular tag
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

// 4. Delete the dish “Old Special Soup” from the menu.
const result4 = db.dishes.deleteOne({ name: "Old Special Soup" });
print("Deleted the dish Old Special Soup");
printjson(result4);
// OUTPUT:
// Deleted the dish Old Special Soup
// {
//   acknowledged: true,
//   deletedCount: 1
// }

// Deleting the database entries for repeated testing
db.dishes.deleteMany({});
