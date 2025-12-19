export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  total: string;
  originalPrice: string;
  savings: string;
  items: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
