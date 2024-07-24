// __tests__/sdk.test.ts
import { getReviews } from '../src/mySDK';
import { Review } from '../src/types';

describe('getReviews function', () => {
  it('fetches reviews successfully from the API', async () => {
    const reviews = await getReviews(1);

    // Check if reviews is an array
    expect(Array.isArray(reviews)).toBe(true);

    // Check if we received at least one review
    expect(reviews.length).toBeGreaterThan(0);

    // Check if the first review has the expected structure
    const firstReview = reviews[0];
    expect(firstReview).toHaveProperty('metaDataUri');
    expect(firstReview).toHaveProperty('category');
    expect(firstReview).toHaveProperty('domainAddress');
    expect(firstReview).toHaveProperty('siteUrl');
    expect(firstReview).toHaveProperty('siteType');
    expect(firstReview).toHaveProperty('siteTag');
    expect(firstReview).toHaveProperty('siteSafety');
    expect(firstReview).toHaveProperty('siteIpfsHash');
    expect(firstReview).toHaveProperty('siteRating');
    expect(firstReview).toHaveProperty('transactionHash');
    expect(firstReview).toHaveProperty('transactionVersion');
    expect(firstReview).toHaveProperty('createdAt');
    expect(firstReview).toHaveProperty('voter');
    expect(firstReview).toHaveProperty('name');

    // Optional: Log the first review for manual inspection
    console.log('First review:', firstReview);
  }, 10000); // Increase timeout to 10 seconds for API call
});