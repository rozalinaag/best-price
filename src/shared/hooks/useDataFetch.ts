import { useEffect, useState } from "react";

export function useDataFetch<T>(fetchFunction: () => Promise<T>){
  const [data, setData] = useState<T | null> (null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async() => {
      setIsPending(true);
      setError(null)

      try{
        const result = await fetchFunction();
        setData(result)
      } catch {
        setError('Failed to fetch data')
      } finally{
        setIsPending(false)
      }
    }

    fetchData()
  }, [fetchFunction])

  return [error, data, isPending] as const;
}