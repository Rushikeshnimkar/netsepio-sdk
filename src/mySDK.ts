// src/mySDK.ts

import { Review } from './types';

export async function getReviews(page: number = 1): Promise<Review[]> {
  const url = `https://gateway.dev.netsepio.com/api/v1.0/getreviews?page=${page}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.payload.reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}

export class NetSepioSDK {
  async getReviews(page: number = 1): Promise<Review[]> {
    return await getReviews(page);
  }
}