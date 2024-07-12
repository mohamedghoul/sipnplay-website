"use client";
import BubbleTea from "./BubbleTea";
import CafeLatte from "./CafeLatte";
import OctopusSandwich from "./OctopusSandwich";
import Sandwich from "./Sandwich";
import { useDrinksStore, useFoodStore } from "@/app/store/zustand";
import SandwichWithChips from "./SandwichWithChips";

export default function Menu3D() {
  // Get all drinks and food from the store
  const drinks = useDrinksStore((state) => state.drinks);
  const food = useFoodStore((state) => state.food);

  return (
    <div className="menu h-screen flex flex-wrap">
      {/* <div>
        <h1 className="text-center p-4 m-4 bg-slate-100 rounded-lg">
          Pick a category
        </h1>
      </div> */}
    {drinks.map((drink) => (
      <div
        key={drink.name}
        className="m-4 p-4 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
      >
        <div className="h-[30vh] w-fit">
          {drink.type === "Boba" ? <BubbleTea /> : drink.type === "Coffee" ? <CafeLatte /> : null}
        </div>
        <h4 className="text-center">{drink.name}</h4>
      </div>
    ))}
    {food.map((item) => (
      <div key={item.name} className="m-4 p-4 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
        <div className="h-[30vh] w-fit">
          {item.name.includes("Octopus") ? <OctopusSandwich /> : item.name.includes("Chips")? <SandwichWithChips /> : <Sandwich />}
        </div>
        <h4 className="text-center">{item.name}</h4>
      </div>
    ))}
      {/* <div className="flex flex-col justify-center items-center">
        <div className="transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer">
          <div className="h-[25vh] w-fit">
            <BubbleTea />
          </div>
          <h2 className="text-center">DRINKS</h2>
        </div>
        <div className="transition duration-500 ease-in-out transform hover:scale-125 cursor-pointer">
          <div className="h-[25vh] w-fit">
            <Sandwich />
          </div>
          <h2 className="text-center">FOOD</h2>
        </div>
      </div> */}
    </div>
  );
}
