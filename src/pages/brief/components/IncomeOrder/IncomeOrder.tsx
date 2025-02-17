import { useDataFetch } from 'src/hooks/useDataFetch';
import { Card } from '#src/shared/ui/Card/Card.tsx';
import { Income } from '#src/types/index.ts';

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
