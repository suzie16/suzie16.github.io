// reviewUtils.js

// Get all reviews as an array
export function getAllReviews() {
    return Object.values(reviews);
}

// Get a review by its ID
export function getReviewById(id) {
    return reviews[id];
}

// Get featured reviews
export function getFeaturedReviews(limit = 2) {
    return Object.values(reviews)
        .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        .slice(0, limit);
}

// Search reviews
export function searchReviews(query) {
    query = query.toLowerCase();
    return Object.values(reviews).filter(review => {
        return (
            review.name.toLowerCase().includes(query) ||
            review.cuisine.toLowerCase().includes(query) ||
            review.area.toLowerCase().includes(query) ||
            review.shortDescription.toLowerCase().includes(query) ||
            review.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });
}

// Format date for display
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Get reviews by cuisine
export function getReviewsByCuisine(cuisine) {
    return Object.values(reviews).filter(review => 
        review.cuisine.toLowerCase() === cuisine.toLowerCase()
    );
}

// Get reviews by area
export function getReviewsByArea(area) {
    return Object.values(reviews).filter(review => 
        review.area.toLowerCase() === area.toLowerCase()
    );
}

// Get the average rating for a specific aspect across all reviews
export function getAverageRating(aspect) {
    const ratings = Object.values(reviews).map(review => review.ratings[aspect]);
    return ratings.reduce((a, b) => a + b, 0) / ratings.length;
}