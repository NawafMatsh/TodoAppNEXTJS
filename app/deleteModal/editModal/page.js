"use client";

import { useState, useEffect } from "react";

export default function EditModal({
  editModalVisiabilty,
  closeEditModal,
  initialText,
  onSave,
}) {
  const [editInput, seteditInput] = useState("");
  useEffect(() => {
    seteditInput(initialText || "");
  }, [initialText]);
  if (editModalVisiabilty) {
    return (
      <div className="flex justify-center items-center absolute bg-black/75 h-screen w-screen">
        <div className="flex bg-amber-400 justify-center flex-col min-h-67 p-5 rounded-2xl">
          <h1 className="flex justify-center text-amber-950 text-2xl mb-3">
            تعديل المهمة
          </h1>
          <input
            value={editInput}
            onChange={(event) => {
              seteditInput(event.target.value);
            }}
            className="bg-amber-100 rounded-sm h-10 placeholder:text-amber-900 p-3 mb-12 caret-amber-900 text-amber-900"
            dir="rtl"
          ></input>
          <div className="flex justify-around">
            <button
              onClick={closeEditModal}
              className="border text-amber-950 px-5  rounded-sm hover:scale-120 h-7"
            >
              الغاء
            </button>
            <button
              onClick={() => onSave(editInput)}
              className="bg-amber-950 px-5 rounded-sm hover:scale-120 h-7"
            >
              تعديل
            </button>
          </div>
        </div>
      </div>
    );
  }
}
