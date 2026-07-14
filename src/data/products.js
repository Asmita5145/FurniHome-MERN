import sofa1 from "../assets/images/products/sofas/sofa1.jpg";
import sofa2 from "../assets/images/products/sofas/sofa2.jpg";
import sofa3 from "../assets/images/products/sofas/sofa3.jpg";
import sofa4 from "../assets/images/products/sofas/sofa4.jpg";

import chair1 from "../assets/images/products/chairs/chair1.jpg";
import chair2 from "../assets/images/products/chairs/chair2.jpg";
import chair3 from "../assets/images/products/chairs/chair3.jpg";
import chair4 from "../assets/images/products/chairs/chair4.jpg";

import bed1 from "../assets/images/products/beds/bed1.jpg";
import bed2 from "../assets/images/products/beds/bed2.jpg";
import bed3 from "../assets/images/products/beds/bed3.jpg";
import bed4 from "../assets/images/products/beds/bed4.jpg";

import decor1 from "../assets/images/products/decor/decor1.jpg";
import decor2 from "../assets/images/products/decor/decor2.jpg";
import decor3 from "../assets/images/products/decor/decor3.jpg";
import decor4 from "../assets/images/products/decor/decor4.jpg";

import cft1 from "../assets/images/products/tables/coffeetables/cft1.jpg";
import cft2 from "../assets/images/products/tables/coffeetables/cft2.jpg";
import cft3 from "../assets/images/products/tables/coffeetables/cft3.jpg";
import cft4 from "../assets/images/products/tables/coffeetables/cft4.jpg";

import dnt1 from "../assets/images/products/tables/diningtables/dnt1.jpg";
import dnt2 from "../assets/images/products/tables/diningtables/dnt2.jpg";
import dnt3 from "../assets/images/products/tables/diningtables/dnt3.jpg";
import dnt4 from "../assets/images/products/tables/diningtables/dnt4.jpg";

import storage1 from "../assets/images/products/storage/storage1.jpg";
import storage2 from "../assets/images/products/storage/storage2.jpg";
import storage3 from "../assets/images/products/storage/storage3.jpg";
import storage4 from "../assets/images/products/storage/storage4.jpg";

const products = [
  // Sofas
  {
    id: 1,
    name: "Modern Sofa",
    category: "Living Room",
    price: 28999,
    rating: 4.8,
    image: sofa1,
    badge:"NEW",
    description:
  "A stylish modern sofa with premium fabric upholstery and soft cushions, perfect for contemporary living rooms.",
  },
  {
    id: 2,
    name: "Luxury Sofa",
    category: "Living Room",
    price: 31999,
    rating: 4.9,
    image: sofa2,
    badge:"SALE",
    description:
  "Luxury sofa crafted with high-quality materials, offering exceptional comfort and an elegant appearance.",
  },
  {
    id: 3,
    name: "L-Shaped Sofa",
    category: "Living Room",
    price: 39999,
    rating: 4.7,
    image: sofa3,
    badge:"NEW",
    description:
  "Spacious L-shaped sofa designed for family gatherings, providing maximum seating and comfort.",
  },
  {
    id: 4,
    name: "Fabric Sofa",
    category: "Living Room",
    price: 24999,
    rating: 4.6,
    image: sofa4,
    badge:"BEST SELLER",
    description:
  "Comfortable fabric sofa with durable upholstery, ideal for everyday use in modern homes.",
  },

  // Chairs
  {
    id: 5,
    name: "Wooden Chair",
    category: "Dining",
    price: 4999,
    rating: 4.5,
    image: chair1,
    badge:"SALE",
    description:
  "Classic wooden dining chair made from solid wood with a timeless design and sturdy construction.",
  },
  {
    id: 6,
    name: "Office Chair",
    category: "Office",
    price: 8999,
    rating: 4.8,
    image: chair2,
    badge:"NEW",
    description:
  "Ergonomic office chair with adjustable height and lumbar support for long working hours.",
  },
  {
    id: 7,
    name: "Accent Chair",
    category: "Living Room",
    price: 7499,
    rating: 4.4,
    image: chair3,
    badge:"NEW",
    description:
  "Elegant accent chair designed to add style and extra seating to your living room.",
  },
  {
    id: 8,
    name: "Dining Chair",
    category: "Dining",
    price: 5599,
    rating: 4.6,
    image: chair4,
    badge:"SALE",
    description:
  "Comfortable dining chair featuring a modern design and durable wooden frame.",
  },

  // Beds
  {
    id: 9,
    name: "Queen Bed",
    category: "Bedroom",
    price: 32999,
    rating: 4.9,
    image: bed1,
    badge:"NEW",
    description:
  "Queen-size bed with premium wooden construction, offering comfort and durability for everyday use.",
  },
  {
    id: 10,
    name: "King Bed",
    category: "Bedroom",
    price: 42999,
    rating: 4.8,
    image: bed2,
    badge:"BEST SELLER",
    description:
  "King-size luxury bed designed for spacious bedrooms with a stylish and elegant finish.",
  },
  {
    id: 11,
    name: "Storage Bed",
    category: "Bedroom",
    price: 35999,
    rating: 4.7,
    image: bed3,
    badge:"SALE",
    description:
  "Functional storage bed with built-in compartments to maximize bedroom organization.",
  },
  {
    id: 12,
    name: "Wooden Bed",
    category: "Bedroom",
    price: 29999,
    rating: 4.5,
    image: bed4,
    badge:"NEW",
    description:
  "Minimalist wooden bed crafted with solid wood for a warm and natural bedroom look.",
  },

  // Decor
  {
    id: 13,
    name: "Wall Decor",
    category: "Decor",
    price: 2499,
    rating: 4.6,
    image: decor1,
    badge:"NEW",
    description:
  "Modern wall décor piece that enhances your interior with a stylish artistic touch.",
  },
  {
    id: 14,
    name: "Table Lamp",
    category: "Decor",
    price: 1899,
    rating: 4.4,
    image: decor2,
    badge:"NEW",
    description:
  "Elegant table lamp with soft lighting, perfect for bedrooms and living rooms.",
  },
  {
    id: 15,
    name: "Flower Vase",
    category: "Decor",
    price: 1299,
    rating: 4.5,
    image: decor3,
    badge:"SALE",
    description:
  "Decorative flower vase crafted with premium ceramic to brighten any living space.",
  },
  {
    id: 16,
    name: "Wall Clock",
    category: "Decor",
    price: 2999,
    rating: 4.8,
    image: decor4,
    badge:"SALE",
    description:
  "Modern wall clock with a sleek design that combines functionality and style.",
  },

  // Coffee Tables
  {
    id: 17,
    name: "Coffee Table",
    category: "Living Room",
    price: 9999,
    rating: 4.7,
    image: cft1,
    badge:"NEW",
    description:
  "Modern coffee table with a durable wooden finish, ideal for contemporary living rooms.",
  },
  {
    id: 18,
    name: "Round Coffee Table",
    category: "Living Room",
    price: 10999,
    rating: 4.6,
    image: cft2,
    badge:"NEW",
    description:
  "Round coffee table featuring a minimalist design that complements modern interiors.",
  },
  {
    id: 19,
    name: "Glass Coffee Table",
    category: "Living Room",
    price: 12999,
    rating: 4.8,
    image: cft3,
    badge:"SALE",
    description:
  "Elegant glass coffee table with a sturdy frame, bringing sophistication to your home.",
  },
  {
    id: 20,
    name: "Wood Coffee Table",
    category: "Living Room",
    price: 8999,
    rating: 4.5,
    image: cft4,
    badge:"NEW",
    description:
  "Compact wooden coffee table designed for both functionality and timeless appeal.",
  },

  // Dining Tables
  {
    id: 21,
    name: "Dining Table",
    category: "Dining",
    price: 19999,
    rating: 4.9,
    image: dnt1,
    badge:"NEW",
    description:
  "Beautiful dining table crafted from premium wood, perfect for family meals and gatherings.",
  },
  {
    id: 22,
    name: "6-Seater Dining Table",
    category: "Dining",
    price: 24999,
    rating: 4.8,
    image: dnt2,
    badge:"BEST SELLER",
    description:
  "Spacious six-seater dining table designed for large families with a modern finish.",
  },
  {
    id: 23,
    name: "Wood Dining Table",
    category: "Dining",
    price: 21999,
    rating: 4.7,
    image: dnt3,
    badge:"SALE",
    description:
  "Solid wood dining table offering durability, elegance, and a timeless dining experience.",
  },
  {
    id: 24,
    name: "Modern Dining Table",
    category: "Dining",
    price: 26999,
    rating: 4.8,
    image: dnt4,
    badge:"SALE",
    description:
  "Modern dining table with clean lines and premium craftsmanship for contemporary homes.",
  },

  // Storage
  {
    id: 25,
    name: "Wooden Wardrobe",
    category: "Storage",
    price: 34999,
    rating: 4.8,
    image: storage1,
    badge: "NEW",
    description:
      "Spacious wooden wardrobe with multiple shelves and hanging space, perfect for organizing clothes and accessories."
  },
  {
    id: 26,
    name: "Modern Shoe Rack",
    category: "Storage",
    price: 6999,
    rating: 4.6,
    image: storage2,
    badge: "BEST SELLER",
    description:
      "Elegant shoe rack with multiple compartments to keep your footwear organized while enhancing your home's entrance."
  },
  {
    id: 27,
    name: "Wooden Bookshelf",
    category: "Storage",
    price: 10999,
    rating: 4.7,
    image: storage3,
    badge: "SALE",
    description:
      "Premium wooden bookshelf with spacious shelves for books, décor, and office essentials."
  },
  {
    id: 28,
    name: "Storage Cabinet",
    category: "Storage",
    price: 15999,
    rating: 4.9,
    image: storage4,
    badge: "NEW",
    description:
      "Modern storage cabinet featuring multiple compartments, ideal for keeping your home neat and clutter-free."
  },
];

export default products;