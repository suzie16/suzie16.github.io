// search.js
import reviews from './reviews.js';
import { searchReviews, getFeaturedReviews } from './reviewUtils.js';

// Function to create a restaurant card element
function createRestaurantCard(restaurant) {
    return `
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${restaurant.images.main}" 
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
                    <span class="text-amber-400">${'★'.repeat(restaurant.ratings.overall)}${'☆'.repeat(5-restaurant.ratings.overall)}</span>
                    <span class="ml-2 text-stone-600">(${restaurant.ratings.overall}/5)</span>
                </div>
                <p class="text-stone-600 mb-4">${restaurant.shortDescription}</p>
                <a href="review-${restaurant.slug}.html" class="text-stone-600 hover:text-stone-800">Read full review →</a>
            </div>
        </article>
    `;
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

    const filteredRestaurants = searchReviews(query);
    
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

// Initialize search functionality
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
        }, 300);
    });
});