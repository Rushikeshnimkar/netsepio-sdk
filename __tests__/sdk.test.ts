// __tests__/sdk.test.ts
import { getReviews, getAllReviewsAndStats, NetSepioSDK } from '../src/mySDK';
import { Review, ReviewStats } from '../src/types';

describe('NetSepio SDK', () => {
  describe('getReviews function', () => {
    it('fetches reviews successfully from the API', async () => {
      const reviews = await getReviews(1);

      // Check if reviews is an array
      expect(Array.isArray(reviews)).toBe(true);

      if (reviews.length > 0) {
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
      } else {
        console.log('No reviews available');
      }
    }, 10000); // Increase timeout to 10 seconds for API call
  });

  describe('getAllReviewsAndStats function', () => {
    it('fetches all reviews and stats successfully', async () => {
      const stats = await getAllReviewsAndStats();

      // Check if stats has the expected structure
      expect(stats).toHaveProperty('totalReviews');
      expect(stats).toHaveProperty('totalCount');

      // Check if totalReviews is an array
      expect(Array.isArray(stats.totalReviews)).toBe(true);

      // Check if totalCount matches the length of totalReviews
      expect(stats.totalCount).toBe(stats.totalReviews.length);

      if (stats.totalCount > 0) {
        // Check if the first review has the expected structure
        const firstReview = stats.totalReviews[0];
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
      }

      // Optional: Log the stats for manual inspection
      console.log('Stats:', {
        totalCount: stats.totalCount,
        firstReview: stats.totalReviews || 'No reviews available'
      });
    }, 30000); // Increase timeout to 30 seconds for multiple API calls
  });

  describe('NetSepioSDK class', () => {
    let sdk: NetSepioSDK;

    beforeEach(() => {
      sdk = new NetSepioSDK();
    });

    it('getReviews method works correctly', async () => {
      const reviews = await sdk.getReviews(1);
      expect(Array.isArray(reviews)).toBe(true);
    }, 10000);

    it('getAllReviewsAndStats method works correctly', async () => {
      const stats = await sdk.getAllReviewsAndStats();
      expect(stats).toHaveProperty('totalReviews');
      expect(stats).toHaveProperty('totalCount');
      expect(stats.totalCount).toBe(stats.totalReviews.length);
    }, 30000);
  });
});