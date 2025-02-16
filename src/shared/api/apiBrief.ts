import { Announcement, Income } from "../types/typesBrief"

export async function fetchAnnouncements(): Promise<Announcement[]> {
  const response = await fetch("http://localhost:3001/announcements");

  if (!response.ok) {
    throw new Error("Something is wrong with the server..");
  }

  return response.json();
}

export async function fetchIncomeFromOrders(): Promise<Income[]> {
  const response = await fetch("http://localhost:3001/incomeFromOrders");

  if (!response.ok) {
    throw new Error("Something is wrong with the server..");
  }

  return response.json();
}