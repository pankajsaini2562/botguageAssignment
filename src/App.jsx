import React from "react";
import SearchDropdown from "./components/SearchDropdown";
export default function App() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-bold text-2xl">Assignment</h1>
      <SearchDropdown />
    </div>
  );
}
