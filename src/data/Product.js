const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 25000,
    oldPrice: 32000,
    category: "Audio",
    description:
      "Comfortable wireless headphones with clear sound and deep bass.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 35000,
    oldPrice: 42000,
    category: "Accessories",
    description: "A durable mechanical keyboard for gaming and productivity.",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wireless Mouse",
    price: 12000,
    oldPrice: 15000,
    category: "Accessories",
    description: "An ergonomic wireless mouse with adjustable sensitivity.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Full HD Monitor",
    price: 150000,
    oldPrice: 175000,
    category: "Computers",
    description: "A Full HD monitor for work, entertainment, and gaming.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 18000,
    oldPrice: 22000,
    category: "Accessories",
    description: "A compact hub with multiple ports for your laptop.",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 22000,
    oldPrice: 28000,
    category: "Audio",
    description:
      "A portable speaker with rich sound and wireless connectivity.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Gaming Headset",
    price: 40000,
    oldPrice: 50000,
    category: "Audio",
    description:
      "A gaming headset with a microphone and comfortable ear cushions.",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 15000,
    oldPrice: 18000,
    category: "Accessories",
    description:
      "An adjustable stand for a more comfortable laptop viewing position.",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Android Smartphone",
    price: 220000,
    oldPrice: 250000,
    category: "Gadgets",
    description:
      "A modern smartphone for everyday communication and entertainment.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Power Bank",
    price: 28000,
    oldPrice: 35000,
    category: "Gadgets",
    description: "Portable power to keep your devices charged on the go.",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Smart Watch",
    price: 45000,
    oldPrice: 55000,
    category: "Gadgets",
    description:
      "A smartwatch for tracking activity and receiving notifications.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Webcam",
    price: 32000,
    oldPrice: 40000,
    category: "Computers",
    description: "A webcam for video calls, meetings, and streaming.",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Laptop Backpack",
    price: 20000,
    oldPrice: 25000,
    category: "Accessories",
    description: "A spacious backpack with a padded laptop compartment.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Gaming Controller",
    price: 38000,
    oldPrice: 45000,
    category: "Gadgets",
    description: "A comfortable controller for compatible gaming devices.",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "External SSD 1TB",
    price: 95000,
    oldPrice: 115000,
    category: "Computers",
    description: "Fast portable storage for files, projects, and backups.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "USB Microphone",
    price: 42000,
    oldPrice: 50000,
    category: "Audio",
    description:
      "A USB microphone for recording, streaming, and online meetings.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Tablet",
    price: 180000,
    oldPrice: 210000,
    category: "Gadgets",
    description:
      "A versatile tablet for reading, browsing, and watching videos.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Laptop Cooling Pad",
    price: 16000,
    oldPrice: 20000,
    category: "Accessories",
    description:
      "A cooling pad designed to improve airflow beneath your laptop.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Wi-Fi Router",
    price: 30000,
    oldPrice: 38000,
    category: "Computers",
    description:
      "A wireless router for connecting compatible devices to your network.",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Wireless Earbuds",
    price: 18000,
    oldPrice: 24000,
    category: "Audio",
    description: "Compact wireless earbuds for music and everyday calls.",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
  },
];

export default products;
