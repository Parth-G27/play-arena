"use client";

import React, { useState } from "react";
import {categoryObjectProps} from './page'

export interface navbarprops{
  categoryList: [categoryObjectProps] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoryNameChange: (arg0: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  numberOfQuestionsChange?: (arg0: any) => void;
}

export const NavbarFlashCard: React.FC<navbarprops> = (props: navbarprops) => {

  const numberArray: number[] = Array.from({ length: 10 }, (_, i) => 10 - i);
    

  return (
    <div className="flex w-full justify-center bg-gray-100">
      <div className="flex flex-col justify-star m-5">
         <h2 className="text-xl text-gray-700">Category</h2>
        <select onChange={props.categoryNameChange} className="bg-amber-200" name="catagory" id="catagory">
            {props.categoryList?.map((obj, index) => (
                <option key={index} value={obj?.id}>{obj?.name}</option>
            ))}
        </select>
      </div>

      <div className="flex flex-col justify-start m-5">
        <h2 className=" text-xl text-gray-700">Number of questions</h2>
        <select onChange={props.numberOfQuestionsChange} className="bg-amber-200" name="catagory" id="catagory">
            {numberArray.map((num, index) => (
              <option key={index} value={num}>{num}</option>
            ))}
        </select>
      </div>
    </div>
  );
}
