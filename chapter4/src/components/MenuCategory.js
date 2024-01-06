// import { useState } from "react";
import MenuItemList from "./MenuItemList";

// controlled component
export default MenuCategory = ({ category, cards, visibility, setShowIndex }) => {
  // const [visibility, setVisibility] = useState(true);
  const handleClick = () => {
    // setVisibility(!visibility);
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {category} ({cards.length})
          </span>
          {visibility ? <span>{"🔽"}</span> : <span>{"⏪ "}</span>}
        </div>
        {visibility ? <MenuItemList cards={cards} /> : <></>}
      </div>
    </div>
  );
};
