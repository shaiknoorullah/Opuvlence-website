// pages/api/data.js
// residential
import Bathroom from "../../public/projectopuvlence/bathroom.png";
import Bedroom from "../../public/projectopuvlence/bedroom.png";
import LivingRoom from "../../public/projectopuvlence/livingroom.png";
// commercial
import Dinner from "../../public/projectopuvlence/dinner.webp";
import Foyer from "../../public/projectopuvlence/foyer.webp";
import Kit from "../../public/projectopuvlence/kit1.webp";

//
import Restaurant1 from "../../public/projectopuvlence/restaurant.webp";
import Restaurant2 from "../../public/projectopuvlence/restaurant2.webp";
import Restaurant3 from "../../public/projectopuvlence/restaurant3.webp";

const data = [
  {
    id: 1,
    name: "Residential",
    projects: [
      {
        title: " Ecstasy Villa",
        shortDescription:
          "If Pure luxury had a synonym it would be this Project",
        description:
          "This Pure Luxury Interior Project aims to create a truly opulent and lavish living space that transcends conventional design boundaries. This project encompasses a holistic approach to interior design, combining timeless elegance, sophisticated craftsmanship, and the finest materials to create a haven of indulgence and refinement.          ",
        image: Bathroom,
      },
      {
        title: "natural FRESHNESS",
        shortDescription: "we've built homes that bring dreams come true",
        description:
          "In the realm of interior design, there is a growing appreciation for spaces that embrace nature and promote a sense of freshness. Natural and fresh blend interiors have emerged as a popular design trend, focusing on creating harmonious environments that seamlessly integrate the outdoors with indoor living spaces. This design approach draws inspiration from nature's beauty, incorporating organic materials, earthy color palettes, and abundant natural light. In this write-up, we will explore the key elements and principles behind natural and fresh blend interiors, along with tips on how to achieve this aesthetic in your own home.          ",
        image: Bedroom,
      },
      {
        title: "Satish’s Luxury",
        shortDescription:
          "The driving force behind this Project is to find a balance between minimalism and luxury, emphasizing the essential elements of design while incorporating opulent touches.",
        description:
          "This Luxury Minimalist Interior Design Project aims to create a serene and sophisticated living space that exudes elegance through simplicity. This project embraces the concept of minimalism while incorporating luxurious elements to elevate the overall aesthetic. By carefully curating a selection of high-quality materials, sleek lines, and functional design, the project creates an atmosphere of tranquility and refined taste.          ",
        image: LivingRoom,
      },
    ],
  },
  {
    id: 2,
    name: "Commercial",
    projects: [
      {
        title: "Modern Luxe",
        description:
          "Modern Luxe is a commercial interior design project that embodies sophistication by seamlessly blending contemporary elements with luxurious accents. It showcases clean lines, sleek finishes, and high-end materials to create an ambiance of refinement and elegance. With a focus on modern aesthetics and indulgent details, Modern Luxe delivers a space that exudes a sense of opulence, creating a captivating environment for businesses and their clientele.",
        shortDescription:
          "Sophisticated design blending modernity and luxurious elements.",
        image: Dinner,
      },
      {
        title: "Urban Chic",
        shortDescription: "Trendy urban design with a touch of sophistication.",
        description:
          "Urban Chic is a commercial interior design project that embraces the vibrancy of urban living while adding a touch of sophistication. It combines trendy elements, industrial accents, and contemporary aesthetics to create a stylish and captivating space. With a fusion of modern design, edgy details, and curated decor, Urban Chic delivers an atmosphere that is both trendy and refined, appealing to a fashion-forward and urban-minded audience.",
        image: Foyer,
      },
      {
        title: "Eclectic Fusion",
        shortDescription: "Unique fusion of diverse styles and aesthetics.",
        description:
          "Eclectic Fusion is a commercial interior design project that celebrates the art of mixing diverse styles and aesthetics. It blends elements from different eras, cultures, and design influences to create a captivating and harmonious space. With an adventurous approach to design, Eclectic Fusion combines unexpected pairings and curated collections to deliver an atmosphere that is eclectic, intriguing, and full of personality.",
        image: Kit,
      },
    ],
  },
  {
    id: 3,
    name: "Restaurant",
    projects: [
      {
        title: "Spice Bites",
        shortDescription: "Flavorful fusion cuisine in a vibrant ambiance.",
        description:
          "Spice Bites is a restaurant that brings together a delightful fusion of flavors from different culinary traditions. With a menu inspired by global cuisine, it offers a tantalizing experience for food enthusiasts. The vibrant ambiance complements the bold and aromatic dishes, creating a captivating dining atmosphere that invites guests to embark on a culinary journey of diverse tastes and textures.",
        image: Restaurant1,
      },
      {
        title: "Urban Grind",
        shortDescription: "Trendy cafe with a vibrant urban atmosphere",
        description:
          "Urban Grind is a trendy cafe that serves as a bustling hub for urban dwellers seeking a vibrant dining experience. With its industrial-inspired decor, specialty coffees, and delectable bites, it offers a haven for those seeking a quick caffeine fix or a relaxing spot to catch up with friends. The dynamic atmosphere of Urban Grind captures the essence of city living.",
        image: Restaurant2,
      },
      {
        title: "Coastal Breeze",
        shortDescription:
          "Fresh seafood and coastal vibes in a relaxed setting.",
        description:
          "Coastal Breeze is a restaurant that transports diners to the seaside with its fresh seafood offerings and laid-back ambiance. From the catch of the day to flavorful coastal specialties, it showcases the finest ingredients in a relaxed and welcoming setting. With its beach-inspired decor and soothing atmosphere, Coastal Breeze offers a delightful coastal dining experience.",
        image: Restaurant3,
      },
    ],
  },
  // Add more dummy data as needed
];

export default function handler(req, res) {
  const { name } = req.query;
  console.log(name);

  // Find the data object with the matching ID
  const item = data.find((item) => item.name === name);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  return res.status(200).json(item);
}
