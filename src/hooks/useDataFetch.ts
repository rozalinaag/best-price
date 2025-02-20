import { useEffect, useState } from 'react';

export function useDataFetch<T>(apiUrl: string) {
  const [data, setData] = useState<T[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setError(null);

      try {
        const result = await fetch(apiUrl);
        if (!result.ok) {
          throw new Error();
        } 
        const data: T[] = await result.json();
        setData(data);
      } catch {
        setError('Failed to fetch data');
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return [error, data, isPending] as const;
}
