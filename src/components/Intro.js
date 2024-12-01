
import React from "react";

import Image from "next/image";
import Accordion from "./Accordion";

function Intro() {
  
  return (
    <div className=" m-1 rounded-xl shadow-lg gap-2 bg-white mt-6 p-2 flex flex-col items-center justify-around ">
      <div className="w-full min-h-[33%] flex flex-col gap-5 items-center justify-around ">
        <h3 className="font-bold text-orange-900">باریستا</h3>
        <div className=" bg-slate-100 rounded-full mt-2 shadow-xl w-[100px] h-[100px] ring ring-orange-900 ring-offset-2 flex items-center justify-center ">
          <Image
            width={170}
            height={170}
            className="rounded-full "
            src="https://kafechenar.s3.ir-thr-at1.arvanstorage.ir/mohsen.webp?versionId="
            alt="Picture of the author"
          />
        </div>
       <Accordion/>
      </div>
      
    </div>
  );
}

export default Intro;
