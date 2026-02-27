"use client";
import React, { useState } from "react";
import { questionObjectProps } from "./page";

export interface cardProps {
  questions?: [questionObjectProps] | null;
}

export const Card: React.FC<cardProps> = (props: cardProps) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start py-4 px-6">
      {props.questions?.map((obj, index) => (
        <button
          key={index}
          onClick={() =>
            setActiveCardIndex((prev) => (prev === index ? null : index))
          }
          className="w-full flex flex-col gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-gray-900">{obj?.question}</h3>
          {activeCardIndex === index ? (
            <h5 className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
              ANSWER: {obj?.correct_answer}
            </h5>
          ) : (
            <>
              <h5 className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
                {obj?.correct_answer}
              </h5>
              {obj?.incorrect_answers?.map(
                (key, index) => (
                  <h5
                    key={index}
                    className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    {key}
                  </h5>
                ),
              )}
            </>
          )}
        </button>
      ))}
    </div>
  );
};
