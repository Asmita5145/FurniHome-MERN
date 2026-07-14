const products = [
  // Sofas
  {
    name: "Modern Sofa",
    category: "Living Room",
    price: 28999,
    rating: 4.8,
    image: "sofa1.jpg",
    badge: "NEW",
    description:
      "A stylish modern sofa with premium fabric upholstery and soft cushions, perfect for contemporary living rooms.",
  },
  {
    name: "Luxury Sofa",
    category: "Living Room",
    price: 31999,
    rating: 4.9,
    image: "sofa2.jpg",
    badge: "SALE",
    description:
      "Luxury sofa crafted with high-quality materials, offering exceptional comfort and an elegant appearance.",
  },
  {
    name: "L-Shaped Sofa",
    category: "Living Room",
    price: 39999,
    rating: 4.7,
    image: "sofa3.jpg",
    badge: "NEW",
    description:
      "Spacious L-shaped sofa designed for family gatherings, providing maximum seating and comfort.",
  },
  {
    name: "Fabric Sofa",
    category: "Living Room",
    price: 24999,
    rating: 4.6,
    image: "sofa4.jpg",
    badge: "BEST SELLER",
    description:
      "Comfortable fabric sofa with durable upholstery, ideal for everyday use in modern homes.",
  },

  // Chairs
  {
    name: "Wooden Chair",
    category: "Dining",
    price: 4999,
    rating: 4.5,
    image: "chair1.jpg",
    badge: "SALE",
    description:
      "Classic wooden dining chair made from solid wood with a timeless design and sturdy construction.",
  },
  {
    name: "Office Chair",
    category: "Office",
    price: 8999,
    rating: 4.8,
    image: "chair2.jpg",
    badge: "NEW",
    description:
      "Ergonomic office chair with adjustable height and lumbar support for long working hours.",
  },
  {
    name: "Accent Chair",
    category: "Living Room",
    price: 7499,
    rating: 4.4,
    image: "chair3.jpg",
    badge: "NEW",
    description:
      "Elegant accent chair designed to add style and extra seating to your living room.",
  },
  {
    name: "Dining Chair",
    category: "Dining",
    price: 5599,
    rating: 4.6,
    image: "chair4.jpg",
    badge: "SALE",
    description:
      "Comfortable dining chair featuring a modern design and durable wooden frame.",
  },

  // Beds
  {
    name: "Queen Bed",
    category: "Bedroom",
    price: 32999,
    rating: 4.9,
    image: "bed1.jpg",
    badge: "NEW",
    description:
      "Queen-size bed with premium wooden construction, offering comfort and durability for everyday use.",
  },
  {
    name: "King Bed",
    category: "Bedroom",
    price: 42999,
    rating: 4.8,
    image: "bed2.jpg",
    badge: "BEST SELLER",
    description:
      "King-size luxury bed designed for spacious bedrooms with a stylish and elegant finish.",
  },
  {
    name: "Storage Bed",
    category: "Bedroom",
    price: 35999,
    rating: 4.7,
    image: "bed3.jpg",
    badge: "SALE",
    description:
      "Functional storage bed with built-in compartments to maximize bedroom organization.",
  },
  {
    name: "Wooden Bed",
    category: "Bedroom",
    price: 29999,
    rating: 4.5,
    image: "bed4.jpg",
    badge: "NEW",
    description:
      "Minimalist wooden bed crafted with solid wood for a warm and natural bedroom look.",
  },
    // Decor
  {
    name: "Wall Decor",
    category: "Decor",
    price: 2499,
    rating: 4.6,
    image: "decor1.jpg",
    badge: "NEW",
    description:
      "Modern wall décor piece that enhances your interior with a stylish artistic touch.",
  },
  {
    name: "Table Lamp",
    category: "Decor",
    price: 1899,
    rating: 4.4,
    image: "decor2.jpg",
    badge: "NEW",
    description:
      "Elegant table lamp with soft lighting, perfect for bedrooms and living rooms.",
  },
  {
    name: "Flower Vase",
    category: "Decor",
    price: 1299,
    rating: 4.5,
    image: "decor3.jpg",
    badge: "SALE",
    description:
      "Decorative flower vase crafted with premium ceramic to brighten any living space.",
  },
  {
    name: "Wall Clock",
    category: "Decor",
    price: 2999,
    rating: 4.8,
    image: "decor4.jpg",
    badge: "SALE",
    description:
      "Modern wall clock with a sleek design that combines functionality and style.",
  },

  // Coffee Tables
  {
    name: "Coffee Table",
    category: "Living Room",
    price: 9999,
    rating: 4.7,
    image: "cft1.jpg",
    badge: "NEW",
    description:
      "Modern coffee table with a durable wooden finish, ideal for contemporary living rooms.",
  },
  {
    name: "Round Coffee Table",
    category: "Living Room",
    price: 10999,
    rating: 4.6,
    image: "cft2.jpg",
    badge: "NEW",
    description:
      "Round coffee table featuring a minimalist design that complements modern interiors.",
  },
  {
    name: "Glass Coffee Table",
    category: "Living Room",
    price: 12999,
    rating: 4.8,
    image: "cft3.jpg",
    badge: "SALE",
    description:
      "Elegant glass coffee table with a sturdy frame, bringing sophistication to your home.",
  },
  {
    name: "Wood Coffee Table",
    category: "Living Room",
    price: 8999,
    rating: 4.5,
    image: "cft4.jpg",
    badge: "NEW",
    description:
      "Compact wooden coffee table designed for both functionality and timeless appeal.",
  },

  // Dining Tables
  {
    name: "Dining Table",
    category: "Dining",
    price: 19999,
    rating: 4.9,
    image: "dnt1.jpg",
    badge: "NEW",
    description:
      "Beautiful dining table crafted from premium wood, perfect for family meals and gatherings.",
  },
  {
    name: "6-Seater Dining Table",
    category: "Dining",
    price: 24999,
    rating: 4.8,
    image: "dnt2.jpg",
    badge: "BEST SELLER",
    description:
      "Spacious six-seater dining table designed for large families with a modern finish.",
  },
  {
    name: "Wood Dining Table",
    category: "Dining",
    price: 21999,
    rating: 4.7,
    image: "dnt3.jpg",
    badge: "SALE",
    description:
      "Solid wood dining table offering durability, elegance, and a timeless dining experience.",
  },
  {
    name: "Modern Dining Table",
    category: "Dining",
    price: 26999,
    rating: 4.8,
    image: "dnt4.jpg",
    badge: "SALE",
    description:
      "Modern dining table with clean lines and premium craftsmanship for contemporary homes.",
  },
    // Storage
  {
    name: "Wooden Wardrobe",
    category: "Storage",
    price: 34999,
    rating: 4.8,
    image: "storage1.jpg",
    badge: "NEW",
    description:
      "Spacious wooden wardrobe with multiple shelves and hanging space, perfect for organizing clothes and accessories.",
  },
  {
    name: "Modern Shoe Rack",
    category: "Storage",
    price: 6999,
    rating: 4.6,
    image: "storage2.jpg",
    badge: "BEST SELLER",
    description:
      "Elegant shoe rack with multiple compartments to keep your footwear organized while enhancing your home's entrance.",
  },
  {
    name: "Wooden Bookshelf",
    category: "Storage",
    price: 10999,
    rating: 4.7,
    image: "storage3.jpg",
    badge: "SALE",
    description:
      "Premium wooden bookshelf with spacious shelves for books, décor, and office essentials.",
  },
  {
    name: "Storage Cabinet",
    category: "Storage",
    price: 15999,
    rating: 4.9,
    image: "storage4.jpg",
    badge: "NEW",
    description:
      "Modern storage cabinet featuring multiple compartments, ideal for keeping your home neat and clutter-free.",
  },
];

module.exports = products;