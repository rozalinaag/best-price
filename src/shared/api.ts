import { Announcement, Income } from "./types"

export function fetchAnnouncements() {
 return fetch("http://localhost:3001/announcements").then((res) => res.json() as Promise<Announcement[]>)
}

export function fetchIncomeFromOrders() {
  return fetch("http://localhost:3001/income").then((res) => res.json() as Promise<Income[]>)
 }