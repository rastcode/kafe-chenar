import React from "react";

function TabBar({ category, setCategory }) {
  const handleCategory = (cat) => {
    setCategory(cat);
  };
  return (
    <div className="m-2 bg-white rounded-xl shadow-lg flex items-center justify-between">
      <button
        onClick={() => {
          handleCategory("بار سرد");
        }}
        className={
          category === "بار سرد"
            ? "w-1/3 p-3 flex items-center justify-center font-bold  cursor-pointer rounded-xl ring-2 ring-orange-900 bg-orange-500 text-white "
            : "w-1/3 p-3 flex items-center justify-center font-bold text-orange-900 cursor-pointer rounded-xl  "
        }
      >
        بار سرد
      </button>
      <button
        onClick={() => {
          handleCategory("بار گرم");
        }}
        className={
          category === "بار گرم"
            ? "w-1/3 p-3 flex items-center justify-center font-bold  cursor-pointer rounded-xl ring-2 ring-orange-900 bg-orange-500 text-white "
            : "w-1/3 p-3 flex items-center justify-center font-bold text-orange-900 cursor-pointer rounded-xl  "
        }
      >
        بار گرم
      </button>
      <button
        onClick={() => {
          handleCategory("نوشیدنی‌ها");
        }}
        className={
          category === "نوشیدنی‌ها"
            ? "w-1/3 p-3 flex items-center justify-center font-bold  cursor-pointer rounded-xl ring-2 ring-orange-900 bg-orange-500 text-white "
            : "w-1/3 p-3 flex items-center justify-center font-bold text-orange-900 cursor-pointer rounded-xl  "
        }
      >
        نوشیدنی‌ها
      </button>
    </div>
  );
}

export default TabBar;
