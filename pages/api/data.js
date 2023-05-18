// pages/api/data.js

const data = [
  {
    id: 1,
    name: "Residential",
    projects: [
      {
        title: "Residential Project 1",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Residential Project 2",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Residential Project 3",
        shortDescription: "we've built homes that bring dreams come true",
      },
      {
        title: "Residential Project 4",
        shortDescription: "we've built homes that bring dreams come true",
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
  console.log(name)

  // Find the data object with the matching ID
  const item = data.find((item) => item.name === name);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  return res.status(200).json(item);
}
