import { useEffect, useState } from 'react';


const FreesoundTest = () => {
    const [data, setData] = useState<any>(null);
    const token = import.meta.env.VITE_FREESOUND_TOKEN;

    useEffect(() => {
        fetch('https://freesound.org/apiv2/search/text/?query=cat', {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
          .then((res) => res.json())
          .then((json) => setData(json))
          .catch((err) => console.error('Error fetching Freesound API:', err));
      }, [token]);
    
      return (
        <div style={{ padding: '2rem' }}>
          <h2>Freesound API Test</h2>
          {data ? (
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    };
    
    export default FreesoundTest;