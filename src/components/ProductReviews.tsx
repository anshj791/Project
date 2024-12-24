import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">User reviews on this Product</h3>
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-4 border-b border-gray-200 pb-4">
          <img
            src={review.avatar}
            alt={review.author}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{review.author}</h4>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}