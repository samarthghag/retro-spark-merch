import posterAnime1 from "@/assets/poster-anime-1.jpg";
import posterCar1 from "@/assets/poster-car-1.jpg";
import posterBike1 from "@/assets/poster-bike-1.jpg";
import posterMovie1 from "@/assets/poster-movie-1.jpg";
import posterMusic1 from "@/assets/poster-music-1.jpg";
import posterNature1 from "@/assets/poster-nature-1.jpg";

export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "anime-warrior",
    title: "Cyberpunk Warrior",
    price: 129,
    category: "Anime",
    image: posterAnime1,
    description: "Vintage anime poster featuring a dramatic cyberpunk warrior in retro 80s style.",
  },
  {
    id: "retro-supercar",
    title: "Synthwave Supercar",
    price: 159,
    category: "Cars",
    image: posterCar1,
    description: "Iconic 80s sports car against a neon synthwave sunset with palm trees and grid lines.",
  },
  {
    id: "classic-motorcycle",
    title: "Freedom Rider",
    price: 149,
    category: "Bikes",
    image: posterBike1,
    description: "Classic American motorcycle poster with bold vintage typography and patriotic elements.",
  },
  {
    id: "action-hero",
    title: "Last Stand",
    price: 139,
    category: "Movies",
    image: posterMovie1,
    description: "Epic 80s action movie poster with dramatic lighting and bold retro typography.",
  },
  {
    id: "rock-concert",
    title: "Electric Night",
    price: 119,
    category: "Music",
    image: posterMusic1,
    description: "Psychedelic rock concert poster with 70s inspired colors and bold geometric patterns.",
  },
  {
    id: "mountain-sunset",
    title: "Wilderness Vista",
    price: 99,
    category: "Nature",
    image: posterNature1,
    description: "Vintage national park travel poster with minimalist geometric mountain landscape.",
  },
];

// Stripe price IDs
export const STRIPE_PRICES = {
  POSTER: "price_1SEr1B3iuoPLvCHrBT9rSml7", // ₹129
  MERCH: "price_1SEr1f3iuoPLvCHrdEbBExpd", // ₹1299
};

// Merch pricing
export const MERCH_PRICE = 1299;

export const categories = [
  "All",
  "Anime",
  "Cars",
  "Bikes",
  "Movies",
  "Music",
  "Nature",
];
