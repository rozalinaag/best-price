import type { NextApiRequest, NextApiResponse } from "next";

const announcements = [
  {
    "id": "1",
    "category": "Активные",
    "text": "hgfds"
  },
  {
    "id": "2",
    "category": "Активные",
    "text": "ghj"
  },
  {
    "id": "3",
    "category": "Активные",
    "text": "ghj"
  },
  {
    "id": "4",
    "category": "Неактивные",
    "text": "ghj"
  },
  {
    "id": "5",
    "category": "Неактивные",
    "text": "ghj"
  },
  {
    "id": "6",
    "category": "Черновики",
    "text": "ghj"
  },
  {
    "id": "7",
    "category": "Черновики",
    "text": "ghj"
  },
  {
    "id": "8",
    "category": "Черновики",
    "text": "ghj"
  },
  {
    "id": "9",
    "category": "Проданные",
    "text": "ghj"
  }
];

export default function getAnnouncements(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(announcements);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

