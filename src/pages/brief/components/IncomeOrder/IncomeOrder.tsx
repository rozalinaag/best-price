import { fetchIncomeFromOrders } from '../../../../shared/api/apiBrief';
import { useDataFetch } from '../../../../shared/hooks/useDataFetch';
import { Card } from '../../../../shared/ui/Card/Card';

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
