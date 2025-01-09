import SidePanel from "./SidePanel";
import ActionPanel from "./ActionPanel";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Local Albums");

  return (
    <>
      <div className="flex h-[calc(100vh-20px)] m-[10px]">
        <SidePanel activeTab={activeTab} setActiveTab={setActiveTab} />
        <ActionPanel activeTab={activeTab} />
      </div>
    </>
  );
}
