// pages/api/data.js
import Bathroom from "../../public/projectopuvlence/bathroom.webp";
import Bedroom from "../../public/projectopuvlence/bedroom.webp";
import LivingRoom from "../../public/projectopuvlence/livingroom.webp";
const data = [
  {
    id: 1,
    name: "Residential",
    projects: [
      {
        title: "Serene Haven",
        shortDescription: "we've built homes that bring dreams come true",
        description:
          "Serene Haven is an inviting residential bathroom design concept that creates a peaceful ambiance. With a calming color palette, natural elements, and minimalistic decor, it offers a tranquil retreat for relaxation. Thoughtful lighting and clean lines enhance the serene atmosphere, providing a haven of tranquility and rejuvenation.",
        image: Bathroom,
      },
      {
        title: "Tranquil Haven",
        shortDescription: "we've built homes that bring dreams come true",
        description:
          "Tranquil Haven is a residential bedroom design concept that prioritizes serenity and relaxation. With soft colors, natural elements, and minimalistic decor, it creates a peaceful atmosphere. Cozy furnishings and soothing lighting enhance the tranquil ambiance, providing a haven for rest, rejuvenation, and a peaceful escape from the outside world.",
        image: Bedroom,
      },
      {
        title: "Timeless Elegance",
        shortDescription: "we've built homes that bring dreams come true",
        description:
          "Timeless Elegance is a residential living room design concept that embraces classic aesthetics with a touch of sophistication. Neutral color palettes, luxurious materials, and harmonious furniture create a refined and enduring atmosphere. With attention to detail and balance, it achieves a timeless beauty and an understated sense of luxury.",
        image: LivingRoom,
      },
    ],
  },
  {
    id: 2,
    name: "Commercial",
    projects: [
      {
        title: "Commercial Project 1",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Commercial Project 2",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Commercial Project 3",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Commercial Project 4",
        shortDescription: "we've built homes that bring dreams come true",
      },
    ],
  },
  {
    id: 3,
    name: "Restaurant",
    projects: [
      {
        title: "Restaurant Project 1",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Restaurant Project 2",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Restaurant Project 3",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Restaurant Project 4",
        shortDescription: "we've built homes that bring dreams come true",
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
