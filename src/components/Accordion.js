"use client";

import React, { useState } from "react";
function Accordion() {
  const [accordion, setAccordion] = useState(false);
  const accordionHandler = () => {
    setAccordion(!accordion);
  };
  return (
    <div className="flex flex-col w-full gap-y-2">
      <div
        onClick={accordionHandler}
        className="w-full p-2 bg-slate-200 rounded-lg flex items-center justify-between"
      >
        <p className="font-medium text-orange-900">محسن بیرامی</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 stroke-orange-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </span>
      </div>
      {accordion ? (
        <div className="bg-slate-200 w-full p-2 rounded-lg text-slate-900 ">
          کودکی نوپا وخرد سال، مقداری نپخت و بیعوده که در سنین بسیار کودک سالی
          شروع به کار جارو کشی در کافه کاج کرد, روند کار او در کافه گل گندم
          پیشرفت کرد و به جارو کشی قهار تبدیل شد. او بعد از مدتی کار در دکه,
          اینک کافه خود را جارو میکشد
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Accordion;
