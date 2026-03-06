import { useState } from "react";

export const Tabs = ({ tabs }) => {
    const [selectedtab, setselectedtab] = useState("");
    
    const displayContent = tabs.find((tab) => tab.label === selectedtab);

  return (
    <div style={{ textAlign: "center" }}>
      {tabs.map((tab) => (
        <span key={tab.label}>
          <button
            style={{ color: tab.label === selectedtab ? 'blue' : ''}}
            onClick={() => setselectedtab(tab.label)}
          >
            {tab.label}
          </button>
        </span>
      ))}
      {displayContent ? displayContent.content : null}
    </div>
  );
};
