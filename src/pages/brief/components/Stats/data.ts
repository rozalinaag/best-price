type TitleStats = {
  title: string,
  value: number;
  increase?: boolean;
  percent?: number;
}

export const titlesStats: TitleStats[] = [
  {
    title: "Просмотры", 
    value: 174,
    increase: true,
    percent: 5.5,
  }, 
  {
    title: "Контакты", 
    value: 0,
    increase: false,
    percent: 100,
  }, 
  {
    title: "Избранное", 
    value: 8,
  }, 
  {
    title: "Заказано товаров", 
    value: 0,
    increase: false,
    percent: 100,
  }, 
]