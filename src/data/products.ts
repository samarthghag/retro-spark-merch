import posterAnime1 from "@/assets/poster-anime-1.jpg";
import posterAnime2 from "@/assets/poster-anime-2.jpg";
import posterAnime3 from "@/assets/poster-anime-3.jpg";
import posterAnime4 from "@/assets/poster-anime-4.jpg";
import posterCar2 from "@/assets/poster-car-2.jpg";
import posterCar1 from "@/assets/poster-car-1.jpg";
import posterBike1 from "@/assets/poster-bike-1.jpg";
import posterBike2 from "@/assets/poster-bike-2.jpg";
import posterBike3 from "@/assets/poster-bike-3.jpg";
import posterCar3 from "@/assets/poster-car-3.jpg";
import posterMovie1 from "@/assets/poster-movie-1.jpg";
import posterMovie2 from "@/assets/poster-movie-2.jpg";
import posterMovie3 from "@/assets/poster-movie-3.jpg";
import posterMusic2 from "@/assets/poster-music-2.jpg";
import posterNature2 from "@/assets/poster-nature-2.jpg";
import posterNature3 from "@/assets/poster-nature-3.jpg";
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
  // 🌸 Anime Posters
  {
    id: "anime-warrior",
    title: "Cyberpunk Warrior",
    price: 129,
    category: "Anime",
    image: posterAnime1,
    description:
      "Vintage anime poster featuring a dramatic cyberpunk warrior in retro 80s style.",
  },
  {
    id: "anime-samurai",
    title: "Neo Samurai",
    price: 119,
    category: "Anime",
    image: posterAnime2,
    description:
      "Stylized samurai battle scene with hand-drawn brush strokes and Japanese calligraphy.",
  },
  {
    id: "anime-bleach",
    title: "Bleach Shadows",
    price: 139,
    category: "Anime",
    image: posterAnime3,
    description:
      "High-contrast black and red composition inspired by the Bleach universe and shonen vibes.",
  },
  {
    id: "anime-detective",
    title: "Tokyo Noir",
    price: 129,
    category: "Anime",
    image: posterAnime4,
    description:
      "Dark-toned anime portrait evoking mystery, crime, and neo-noir urban aesthetics.",
  },

  // 🚗 Cars Posters
  {
    id: "retro-supercar",
    title: "Synthwave Supercar",
    price: 159,
    category: "Cars",
    image: posterCar1,
    description:
      "Iconic 80s sports car against a neon synthwave sunset with palm trees and grid lines.",
  },
  {
    id: "f1-legend",
    title: "Formula Legend",
    price: 149,
    category: "Cars",
    image: posterCar2,
    description:
      "Dynamic Formula 1 racing artwork featuring vintage track textures and speed aesthetics.",
  },
  {
    id: "f1-driver",
    title: "Speed Icon",
    price: 149,
    category: "Cars",
    image: posterCar3,
    description:
      "Bold racing portrait poster celebrating Formula One legends in cinematic tones.",
  },

  // 🏍️ Bikes Posters
  {
    id: "classic-motorcycle",
    title: "Freedom Rider",
    price: 149,
    category: "Bikes",
    image: posterBike1,
    description:
      "Classic American motorcycle poster with bold vintage typography and patriotic elements.",
  },
  {
    id: "japanese-bike",
    title: "Retro Racer",
    price: 129,
    category: "Bikes",
    image: posterBike2,
    description:
      "Minimal Japanese motorcycle art poster in vintage print style with mechanical detailing.",
  },
  {
    id: "valentino-rossi",
    title: "The Doctor 46",
    price: 139,
    category: "Bikes",
    image: posterBike3,
    description:
      "Motorsport tribute poster of Valentino Rossi, showcasing energy and racing legacy.",
  },

  // 🎬 Movie Posters
  {
    id: "action-hero",
    title: "Last Stand",
    price: 139,
    category: "Movies",
    image: posterMovie1,
    description:
      "Epic 80s action movie poster with dramatic lighting and bold retro typography.",
  },
  {
    id: "spy-chase",
    title: "No Time to Die",
    price: 129,
    category: "Movies",
    image: posterMovie2,
    description:
      "Dynamic movie poster featuring car chase motion blur and cinematic grayscale tone.",
  },
  {
    id: "mystery-thriller",
    title: "Shadowed Truth",
    price: 119,
    category: "Movies",
    image: posterMovie3,
    description:
      "Stylized thriller poster with red-on-black minimalism and suspenseful visual design.",
  },

  // 🎵 Music Posters
  {
    id: "rock-concert",
    title: "Electric Night",
    price: 119,
    category: "Music",
    image: posterMusic1,
    description:
      "Psychedelic rock concert poster with 70s inspired colors and bold geometric patterns.",
  },
  {
    id: "rap-legend",
    title: "Starboy Collage",
    price: 129,
    category: "Music",
    image: posterMusic2,
    description:
      "Modern collage poster mixing hip-hop and R&B influences with urban photo textures.",
  },

  // 🌲 Nature Posters
  {
    id: "mountain-sunset",
    title: "Wilderness Vista",
    price: 99,
    category: "Nature",
    image: posterNature1,
    description:
      "Vintage national park travel poster with minimalist geometric mountain landscape.",
  },
  {
    id: "field-wanderer",
    title: "Golden Fields",
    price: 99,
    category: "Nature",
    image: posterNature2,
    description:
      "Warm countryside artwork showing a serene field under swirling, textured skies.",
  },
  {
    id: "zen-temple",
    title: "Rising Sun Shrine",
    price: 109,
    category: "Nature",
    image: posterNature3,
    description:
      "Japanese-inspired minimal landscape featuring a temple and crimson sun above the trees.",
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
