import React, { useState } from "react";
import { HiOutlineAtSymbol } from "react-icons/hi";
export default function SearchDropdown() {
  // Function to highlight specific text
  const highlightText = (text) => {
    return text.replace(
      /"Text"/g,
      '<span class="text-brown-500">"Text"</span>'
    );
  };
  const initialItems = [
    {
      id: 1,
      icon: (
        <HiOutlineAtSymbol
          className="text-white 
              size-9 rounded-lg p-2 items-center flex ml-3
              bg-[#aae8a7]"
        />
      ),
      text: 'Click on "Text"',
    },
    {
      id: 2,
      icon: (
        <HiOutlineAtSymbol
          className="text-white 
      size-9 rounded-lg p-2 items-center flex ml-3
      bg-[#aae8a7]"
        />
      ),
      text: 'Click on "Text" after "Text"',
    },
    {
      id: 3,
      icon: (
        <HiOutlineAtSymbol
          className="text-white 
      size-9 rounded-lg p-2 items-center flex ml-3
      bg-[#aae8a7]"
        />
      ),
      text: 'Click on "Text" for "Text"',
    },
  ];
  const [items, setItems] = useState(initialItems);
  const [editingItemId, setEditingItemId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [text, setText] = useState("Text");
  const [inputValue, setInputValue] = useState("Text");
  const [isEditing, setIsEditing] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDay(e.target.value === "Day");
  };

  const handleSearchBarClick = (e) => {
    setDropdownVisible(true);
  };
  const handleDoubleClick = () => {
    console.log("double clicked");
    setText("day");

    console.log(text);
    setSearchTerm(text);
  };

  const handleSelect = (item) => {
    setDropdownVisible(false);
    setSelectedItem(item);
    console.log("Selected item:", item);
    setSearchTerm(item.text);
  };

  return (
    <div className="flex flex-col   justify-center mt-10">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={handleSearchBarClick}
        onDoubleClick={handleDoubleClick}
        placeholder="Step"
        className="border px-2 py-2 w-96 border-gray-300 focus:outline-none rounded-lg "
      />
      {isDropdownVisible && (
        <div className="border w-80 rounded-lg mt-3 ">
          <ul className="  cursor-pointer ">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center text-sm cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <div className="flex gap-3 items-center hover:bg-slate-300 p-3 w-full ">
                  {item.icon}
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
