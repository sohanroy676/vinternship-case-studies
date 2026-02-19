/**
 * MongoDB Case Study 1: Aggregation Framework
 * NPTEL Vinternship - IIT Ropar
 * by Sohan Roy Talari (WIN251113)
 *
 * How to run:
 *      mongosh WIN251113_Mongo_CS_1.js
 */

// Inserting Sample data
db.watchHistory.insertMany([
    {
        movie: "Edge of Tomorrow",
        genre: "Sci-Fi",
        country: "USA",
        views: 15000,
        rating: 8.2,
        year: 2024,
    },
    {
        movie: "Quantum Strike",
        genre: "Sci-Fi",
        country: "USA",
        views: 12000,
        rating: 8.4,
        year: 2024,
    },
    {
        movie: "Galactic Code",
        genre: "Sci-Fi",
        country: "Canada",
        views: 5000,
        rating: 7.6,
        year: 2024,
    },
    {
        movie: "Crimson Chase",
        genre: "Action",
        country: "India",
        views: 8000,
        rating: 8.1,
        year: 2024,
    },
    {
        movie: "Silent Shadows",
        genre: "Action",
        country: "USA",
        views: 4000,
        rating: 7.9,
        year: 2024,
    },
]);

// Write an aggregation pipeline to find the average rating for each genre in 2024, but only include genres with more than 10,000 total views.
// Output should show genre, average rating (rounded to 1 decimal), and total views.
const result = db.watchHistory
    .aggregate([
        { $match: { year: 2024 } },
        {
            $group: {
                _id: "$genre",
                totalViews: { $sum: "$views" },
                avgRating: { $avg: "$rating" },
            },
        },
        { $match: { totalViews: { $gt: 10000 } } },
        {
            $project: {
                _id: 0,
                genre: "$_id",
                avgRating: { $round: ["$avgRating", 1] },
                totalViews: 1,
            },
        },
    ])
    .toArray();

printjson(result);

// OUTPUT:
// [
//   {
//     totalViews: 12000,
//     genre: 'Action',
//     avgRating: 8
//   },
//   {
//     totalViews: 32000,
//     genre: 'Sci-Fi',
//     avgRating: 8.1
//   }
// ]

// Deleting the database entries for repeated testing
db.watchHistory.deleteMany({});
