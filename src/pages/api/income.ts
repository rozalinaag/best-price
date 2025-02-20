import type { NextApiRequest, NextApiResponse } from 'next';
import { Income } from '../../types';

const incomeFromOrders: Income[] = [
  {
    id: '1',
    title: 'Всего',
    value: 56000,
  },
  {
    id: '2',
    title: 'За последний год',
    value: 48000,
  },
  {
    id: '3',
    title: 'За последний месяц',
    value: 8600,
  },
  {
    id: '5',
    title: 'За последнию неделю',
    value: 2000,
  },
];

export default function getIncome(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(incomeFromOrders);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
