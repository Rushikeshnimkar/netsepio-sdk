// src/types.ts

export type sayHelloProps  = {
    firstName: string,
    lastName?: string,
    age?: number
}

export interface Review {
    metaDataUri: string;
    category: string;
    domainAddress: string;
    siteUrl: string;
    siteType: string;
    siteTag: string;
    siteSafety: string;
    siteIpfsHash: string;
    siteRating: number;
    transactionHash: string;
    transactionVersion: number;
    createdAt: string;
    voter: string;
    name: string;
}

export interface ReviewStats {
    totalReviews: Review[];
    totalCount: number;
}