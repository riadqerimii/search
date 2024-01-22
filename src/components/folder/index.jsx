import { useEffect, useState } from "react";

export default function MyLocalData({ url }) {
  const [someData, setSomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchingMyData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data) {
        setError("some error");
        setLoading(false);
      } else {
        setSomeData(data);
      }
    } catch (e) {
      setError("some error");
    }
  }

  useEffect(() => {
    fetchingMyData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Try again </div>;
  }

  return (
    <div>
      {someData && someData.length > 0
        ? someData.map((item) => <div>{item.id}</div>)
        : null}
    </div>
  );
}
