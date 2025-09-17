import React, { useEffect, useState } from 'react';
import Loading from '../Loading';

interface FreesoundResultsProps {
  searchTerm: string;
}

export default function FreesoundResults({ searchTerm }: FreesoundResultsProps) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = import.meta.env.VITE_FREESOUND_TOKEN;
      try {
        const response = await fetch(
          `https://freesound.org/apiv2/search/text/?query=${searchTerm}&token=${token}`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Error fetching Freesound data:', err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (loading) return <Loading />;

  if (!data || !data.results || data.results.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center pt-10">
        <p className="text-center">
          Sorry, we couldn't find any results for:{' '}
          <span className="underline">{searchTerm}</span>
        </p>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Results for <span className="underline">{searchTerm}</span>
      </h2>
      <ul className="grid grid-cols-1 gap-4">
        {data.results.map((sound: any) => (
          <li key={sound.id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{sound.name}</h3>
            <p>{sound.description || 'No description available'}</p>
            {sound.previews?.['preview-lq-mp3'] ? (
              <audio controls src={sound.previews['preview-lq-mp3']} />
            ) : (
              <p className="text-sm text-red-500">No audio preview available.</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
