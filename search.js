// Restaurant data array
const restaurants = [
    {
        name: "Union Park Pizza",
        cuisine: "Italian",
        area: "South End",
        tags: ["pizza", "gluten-free", "vegan"],
        priceRange: "$$",
        description: "A South End gem offering outstanding gluten-free and vegan pizzas.",
        link: "review-union-park.html",
        image: "https://images.squarespace-cdn.com/content/v1/5c2d4900da02bc2455f424c9/1583121049122-GOCRKBLWQNWPMECL2361/UPP+The%2BStandard.png",
        rating: 5,
        isNew: true
    },
    {
        name: "Green Garden Café",
        cuisine: "American",
        area: "Cambridge",
        tags: ["comfort food", "healthy", "gluten-free", "vegan"],
        priceRange: "$$$",
        description: "A cozy spot in Cambridge serving healthy comfort food.",
        link: "#",
        image: "images/restaurant2.jpg",
        rating: 4,
        isNew: false
    }
    // Add more restaurant data here
];

// Function to create a restaurant card element
function createRestaurantCard(restaurant) {
    return `
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${restaurant.image}" 
                alt="${restaurant.name}" 
                class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <span class="bg-stone-100 text-stone-600 px-2 py-1 rounded text-sm">
                        ${restaurant.isNew ? 'New Review' : 'Last Week'}
                    </span>
                    <span class="text-stone-600">${restaurant.priceRange} • ${restaurant.cuisine} • ${restaurant.area}</span>
                </div>
                <h3 class="text-2xl font-serif text-stone-800 mt-2">${restaurant.name}</h3>
                <div class="flex items-center my-2">
                    <span class="text-amber-400">${'★'.repeat(restaurant.rating)}${'☆'.repeat(5-restaurant.rating)}</span>
                    <span class="ml-2 text-stone-600">(${restaurant.rating}/5)</span>
                </div>
                <p class="text-stone-600 mb-4">${restaurant.description}</p>
                <a href="${restaurant.link}" class="text-stone-600 hover:text-stone-800">Read full review →</a>
            </div>
        </article>
    `;
}

// Function to filter restaurants based on search query
function filterRestaurants(query) {
    query = query.toLowerCase();
    return restaurants.filter(restaurant => {
        return (
            restaurant.name.toLowerCase().includes(query) ||
            restaurant.cuisine.toLowerCase().includes(query) ||
            restaurant.area.toLowerCase().includes(query) ||
            restaurant.description.toLowerCase().includes(query) ||
            restaurant.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });
}

// Function to update search results
function updateSearchResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    const featuredSection = document.querySelector('.grid.md\\:grid-cols-2');
    
    if (!query.trim()) {
        // Show original featured reviews if search is empty
        resultsContainer.innerHTML = '';
        resultsContainer.classList.add('hidden');
        featuredSection.classList.remove('hidden');
        return;
    }

    const filteredRestaurants = filterRestaurants(query);
    
    // Hide featured section and show results
    featuredSection.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    if (filteredRestaurants.length === 0) {
        resultsContainer.innerHTML = `
            <div class="text-center py-8 text-stone-600">
                No restaurants found matching "${query}". Try a different search term.
            </div>
        `;
        return;
    }

    resultsContainer.innerHTML = `
        <div class="mb-4 text-stone-600">
            Found ${filteredRestaurants.length} restaurant${filteredRestaurants.length === 1 ? '' : 's'}
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            ${filteredRestaurants.map(restaurant => createRestaurantCard(restaurant)).join('')}
        </div>
    `;
}

// Initialize search functionality when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    const mainContent = document.querySelector('main');
    
    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'searchResults';
    resultsContainer.classList.add('hidden');
    mainContent.insertBefore(resultsContainer, document.querySelector('.grid.md\\:grid-cols-2'));

    // Add search input event listener
    let debounceTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            updateSearchResults(e.target.value);
        }, 300); // Debounce for 300ms
    });
});