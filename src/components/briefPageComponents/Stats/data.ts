type TitleStats = {
  id: string,
  title: string,
  value: number;
  increase?: boolean;
  percent?: number;
}

export const titlesStats: TitleStats[] = [
  {
    id: '1',
    title: "Просмотры", 
    value: 174,
    increase: true,
    percent: 5.5,
  }, 
  {
    id: '2',
    title: "Контакты", 
    value: 2,
    increase: false,
    percent: 100,
  }, 
  {
    id: '3',
    title: "Избранное", 
    value: 8,
  }, 
  {
    id: '4',
    title: "Заказано товаров", 
    value: 10,
    increase: false,
    percent: 90,
  }, 
]