"use client";
import { useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Github } from "lucide-react";
import { X } from "lucide-react";

export default function Home() {
  const [itemsArray, setitemsArray] = useState([]);
  const [inputContent, setinputContent] = useState("");
  const [doneOrNot, setdoneOrNot] = useState(null);


  function HandleinputContent() { 
    if (inputContent !== "") {
      setitemsArray([...itemsArray, { text: inputContent , done:false }]);
    }
    setinputContent("")
  }
  function handleDeleteItem(index) { 
   
      const afterDelete = [...itemsArray];
      afterDelete.splice(index , 1)
setitemsArray(afterDelete)
  }
  function handleDoneCheck(index) { 
    const afterCheckClicked = [...itemsArray];
    afterCheckClicked[index].done = !afterCheckClicked[index].done;
    setitemsArray(afterCheckClicked)
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-950 flex-col">
      {/* code below refers to the whole yallow sqaure. */}
      <h1 className="text-5xl mb-6">منظم المهام اليومية</h1>
      <div className="bg-amber-400 w-80 flex justify-start flex-col  rounded-2xl">
        <div className="mt-6 flex justify-center p-1 items-baseline">
          <input
            value={inputContent}
            onChange={(event) => {
              setinputContent(event.target.value);
            }}
            placeholder="اكتب مهمة اليوم..."
            className="bg-amber-100 rounded-sm h-10 placeholder:text-amber-900 p-3 mr-5 caret-amber-900 text-amber-900"
            dir="rtl"
          ></input>
          <button
            onClick={HandleinputContent}
            className="bg-amber-950 p-2 rounded-sm hover:scale-110"
          >
            اضف المهمة{" "}
          </button>
        </div>
        <hr className="mt-5 border-t-5 border-amber-900"></hr>
        {/* code below refers to the mission it self */}
        <div className="flex justify-around mt-5 mb-3">
          <button
            onClick={() => {
              setdoneOrNot(2);
            }}
            className={`p-4 rounded-sm hover:scale-120 h-7 flex items-center transition-all ${
              doneOrNot == 2 ? "bg-amber-950" : "bg-amber-900"
            }`}
          >
            الغير منجزة
          </button>
          <button
            onClick={() => {
              setdoneOrNot(1);
            }}
            className={`p-4 rounded-sm hover:scale-120 h-7 flex items-center transition-all ${
              doneOrNot == 1 ? "bg-amber-950" : "bg-amber-900"
            }`}
          >
            المنجزة
          </button>
          <button
            onClick={() => {
              setdoneOrNot(null);
            }}
            className={`p-4 rounded-sm hover:scale-120 h-7 flex items-center transition-all ${
              doneOrNot == null ? "bg-amber-950" : "bg-amber-900"
            }`}
          >
            الكل{" "}
          </button>
        </div>

        <ul>
          {itemsArray.map((item, index) => {
            if (doneOrNot == 1 && item.done == true) {
              return (
                <li
                  dir="rtl"
                  className={`flex justify-between m-5 p-3 rounded-lg hover:scale-110 transition-all ${
                    item.done ? "bg-green-700" : "bg-amber-950"
                  }`}
                  key={index}
                >
                  {item.text}
                  <div className="flex gap-1.5 justify-center items-center">
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="bg-amber-400 p-1 rounded-sm hover:scale-120 h-7"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        handleDoneCheck(index);
                      }}
                      className="bg-amber-400 p-1 rounded-sm hover:scale-120 h-7"
                    >
                      <BadgeCheck className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              );
            } else if (doneOrNot == 2 && item.done == false) {
              return (
                <li
                  dir="rtl"
                  className={`flex justify-between m-5 p-3 rounded-lg hover:scale-110 transition-all ${
                    item.done ? "bg-green-700" : "bg-amber-950"
                  }`}
                  key={index}
                >
                  {item.text}
                  <div className="flex gap-1.5 justify-center items-center">
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="bg-amber-400 p-1 rounded-sm hover:scale-120 h-7"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        handleDoneCheck(index);
                      }}
                      className="bg-amber-400 p-1 rounded-sm hover:scale-120 h-7"
                    >
                      <BadgeCheck className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              );
            } else if (doneOrNot == null) {
              return (
                <li
                  dir="rtl"
                  className={`flex justify-between m-5 p-3 rounded-lg hover:scale-110 transition-all ${
                    item.done ? "bg-green-700" : "bg-amber-950"
                  }`}
                  key={index}
                >
                  {item.text}
                  <div className="flex gap-1.5 justify-center items-center">
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="bg-amber-400 p-1 rounded-sm hover:scale-120 h-7"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        handleDoneCheck(index);
                      }}
                      className="bg-amber-400 p-1 rounded-sm hover:scale-120 h-7"
                    >
                      <BadgeCheck className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <Link
        className="mt-20 flex flex-row-reverse bg-amber-400 p-2 rounded-md text-black"
        href={"https://github.com/NawafMatsh/TodoAppNEXTJS"}
      >
        <h1>github رابط المشروع على</h1>
        <Github />
      </Link>
      <Link
        className="m-3 flex bg-amber-400 p-2 rounded-md text-black"
        href={"https://x.com/nwfspace"}
      >
        <h1>Follow me on</h1>
        <X />
      </Link>
    </div>
  );
}

