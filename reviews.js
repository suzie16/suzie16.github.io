// reviews.js
const reviews = {
    "union-park-pizza": {
        id: "union-park-pizza",
        name: "Union Park Pizza",
        cuisine: "Italian",
        area: "South End",
        address: {
            street: "1405 Washington St",
            city: "Boston",
            state: "MA",
            zip: "02118",
            area: "South End"
        },
        hours: {
            monday: "Closed",
            tuesday: "11:30 AM - 10:00 PM",
            wednesday: "11:30 AM - 10:00 PM",
            thursday: "11:30 AM - 10:00 PM",
            friday: "11:30 AM - 10:00 PM",
            saturday: "11:30 AM - 10:00 PM",
            sunday: "11:30 AM - 10:00 PM"
        },
        tags: ["pizza", "gluten-free", "vegan", "italian"],
        priceRange: "$$",
        shortDescription: "A South End gem offering outstanding gluten-free and vegan pizzas. Their cauliflower crust and dairy-free cheese alternatives create authentic Italian flavors that everyone can enjoy.",
        fullDescription: [
            "Union Park Pizza has revolutionized the gluten-free and vegan pizza scene in Boston. Located in the charming South End neighborhood, this pizzeria proves that dietary restrictions don't mean compromising on authentic Italian flavors. Their dedication to inclusive dining is evident in every carefully crafted dish.",
            "The star of the show is their gluten-free cauliflower crust, which achieves the perfect balance of crispy and chewy textures. Their homemade dairy-free cheese blend melts beautifully and provides that satisfying stretch you expect from traditional mozzarella. The attention to detail in preventing cross-contamination makes this a safe haven for those with celiac disease.",
            "Beyond their exceptional pizzas, Union Park offers a range of Italian favorites, from fresh salads to gluten-free pasta dishes. The cozy, modern atmosphere makes it perfect for both casual dinners and special occasions. Their staff is well-trained in handling dietary restrictions and always happy to accommodate special requests."
        ],
        mustTryDishes: [
            "Margherita Pizza (V/GF)",
            "Wild Mushroom & Truffle Pizza",
            "Mediterranean Veggie Pizza",
            "House-Made Tiramisu (V/GF)"
        ],
        ratings: {
            overall: 5,
            food: 5,
            service: 5,
            ambiance: 4,
            value: 5
        },
        features: [
            "Dedicated Gluten-Free Kitchen Area",
            "Extensive Vegan Options",
            "Online Ordering Available",
            "Heated Outdoor Seating"
        ],
        images: {
            main: "https://images.squarespace-cdn.com/content/v1/5c2d4900da02bc2455f424c9/1583121049122-GOCRKBLWQNWPMECL2361/UPP+The%2BStandard.png",
            gallery: [
                // Add more images here
            ]
        },
        dateAdded: "2024-03-15",
        lastUpdated: "2024-03-15",
        slug: "union-park-pizza",
        isNew: true
    },
    "green-garden-cafe": {
        id: "green-garden-cafe",
        name: "Green Garden Café",
        cuisine: "American",
        area: "Cambridge",
        address: {
            street: "123 Main Street",
            city: "Cambridge",
            state: "MA",
            zip: "02139",
            area: "Central Square"
        },
        hours: {
            monday: "8:00 AM - 8:00 PM",
            tuesday: "8:00 AM - 8:00 PM",
            wednesday: "8:00 AM - 8:00 PM",
            thursday: "8:00 AM - 8:00 PM",
            friday: "8:00 AM - 9:00 PM",
            saturday: "9:00 AM - 9:00 PM",
            sunday: "9:00 AM - 7:00 PM"
        },
        tags: ["comfort food", "healthy", "gluten-free", "vegan", "american"],
        priceRange: "$$$",
        shortDescription: "A cozy spot in Cambridge serving healthy comfort food. Their quinoa bowl and sweet potato brownies are delightful discoveries for health-conscious foodies.",
        fullDescription: [
            "Green Garden Café brings a fresh perspective to healthy eating in Cambridge. This charming establishment perfectly balances nutrition with flavor, proving that healthy food can be both satisfying and delicious.",
            "Their menu is entirely gluten-free and features an impressive array of vegan options. Each dish is thoughtfully crafted to maximize nutritional value while delivering outstanding taste. The kitchen staff takes great care to avoid cross-contamination, making it a safe haven for those with dietary restrictions.",
            "The café's warm, inviting atmosphere makes it an ideal spot for both quick lunches and leisurely brunches. The staff is knowledgeable about their menu and always ready to help with dietary questions or customization requests."
        ],
        mustTryDishes: [
            "Quinoa Power Bowl (V/GF)",
            "Sweet Potato Brownies (V/GF)",
            "Morning Glory Smoothie Bowl (V/GF)",
            "Mushroom Toast (V/GF)"
        ],
        ratings: {
            overall: 4,
            food: 5,
            service: 4,
            ambiance: 4,
            value: 3
        },
        features: [
            "100% Gluten-Free Kitchen",
            "Vegan Options Available",
            "Outdoor Seating",
            "Weekend Brunch"
        ],
        images: {
            main: "images/restaurant2.jpg",
            gallery: [
                // Add more images here
            ]
        },
        dateAdded: "2024-03-10",
        lastUpdated: "2024-03-10",
        slug: "green-garden-cafe",
        isNew: false
    }
};

export default reviews;