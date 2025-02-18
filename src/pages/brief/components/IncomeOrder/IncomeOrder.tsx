import { useDataFetch } from '../../../../hooks/useDataFetch';
import { Income } from '../../../../types';
import { Card } from '../../../../ui/Card/Card';

export function IncomeOrder() {
  const [error, incomes, isPending] = useDataFetch<Income>('/api/income');

  return (
    <Card>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {incomes && incomes.map((item) => <div key={item.id}>{item.title}</div>)}
    </Card>
  );
}
