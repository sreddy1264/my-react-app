import { useState, useEffect, useRef } from "react";

const url = "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=";

export const InfiniteScrolling = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
    const sentinelElement = useRef(null);
    
  useEffect(() => {
    if (!hasMore) return;
    let alive = true;
    const getData = async () => {
      setLoading(true);
      const data = await fetch(`${url}${page}`);
      const postsData = await data.json();
      if (!alive) return;
      if (postsData.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => setItems([...prev, ...postsData]));
      }
      setLoading(false);
    };
    getData();
    return () => {
      alive = false;
    };
  }, [page, hasMore]);
    
  useEffect(() => {
    const element = sentinelElement.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((p) => p + 1);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [loading, hasMore]);
    
  return (
    <div>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading ? <div>Loading...</div> : null}
      <div ref={sentinelElement} style={{ height: 1 }} />
    </div>
  );
};
