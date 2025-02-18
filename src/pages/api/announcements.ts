import type { NextApiRequest, NextApiResponse } from "next";
import { Announcement } from "../../types";

const announcements: Announcement[] = [
  {
    "id": "1",
    "category": "Активные",
    "value": 14
  },
  {
    "id": "2",
    "category": "Неактивные",
    "value": 2
  },
  {
    "id": "6",
    "category": "Черновики",
    "value": 3
  },
  {
    "id": "9",
    "category": "Проданные",
    "value": 0
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

