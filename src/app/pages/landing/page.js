"use client";
import AppBar from "@/components/AppBar";
import Intro from "@/components/Intro";
import Products from "@/components/Products";
import TabBar from "@/components/TabBar";
import React, { useState } from "react";

function LandingPage() {
  const [category, setCategory] = useState("بار گرم");
  return (
    <div className="flex flex-col  bg-slate-50 ">
      <AppBar />
      <Intro />
      <TabBar category={category} setCategory={setCategory} />
      <Products category={category} />
    </div>
  );
}

export default LandingPage;
