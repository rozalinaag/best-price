import { fetchIncomeFromOrders } from '#src/shared/api/apiBrief.ts';
import { useDataFetch } from '#src/shared/hooks/useDataFetch.ts';
import { Card } from '#src/shared/ui/Card/Card.tsx';

export function IncomeOrder() {
  const [error, incomes, isPending] = useDataFetch(fetchIncomeFromOrders);

  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {incomes && incomes.map((item) => <div key={item.id}>{item.title}</div>)}
    </Card>
  );
}
