import { useState } from "react";

const WINDOW_HEIGHT = 300;
const ITEM_HEIGHT = 20;

export const VirtualizedList = ({ items }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visualCount = Math.ceil(WINDOW_HEIGHT / ITEM_HEIGHT);
  const endIndex = startIndex + visualCount;
  const visualItems = items.slice(startIndex, endIndex);

  return (
    <div
      style={{
        height: WINDOW_HEIGHT,
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * ITEM_HEIGHT, position: "relative" }}>
        <div style={{ top: startIndex * ITEM_HEIGHT, width: '100%', position: "absolute" }}>
          {visualItems.map((item, i) => (
            <div style={{ height: ITEM_HEIGHT, border: "1px solid #ccc" }} key={item + i}> 
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
