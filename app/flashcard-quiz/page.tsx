"use client";
import React, { useEffect, useState } from "react";
import { NavbarFlashCard } from "./NavbarFlashCard";
import { Card } from "./Card";

// {
//     "type": "boolean",
//     "difficulty": "easy",
//     "category": "Entertainment: Video Games",
//     "question": "&quot;Half-Life 2&quot; runs on the Source Engine.",
//     "correct_answer": "True",
//     "incorrect_answers": [
//         "False"
//     ]
// }

export interface questionObjectProps {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string];
}

export interface categoryObjectProps {
  id: number;
  name: string;
}
export default function FlashCardQuiz() {
    const [questionsList, setQuestionsList] = useState<[questionObjectProps] | null>(null);
  const [categorytList, setCategoryList] = useState<[categoryObjectProps] | null>(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // APIs
  const BASE_URL = "https://opentdb.com/api.php?amount=";
  const CATEGORY_BASE_URL = "https://opentdb.com/api_category.php";

  useEffect(() => {
    fetchCategoryList();
    fetchQuestionList();
  }, []);

  useEffect(() => {
    if(numberOfQuestions || selectedCategoryId){
        fetchQuestionList();
    }
  
  }, [numberOfQuestions, selectedCategoryId ])
  

  const fetchCategoryList = async () => {
    try {
      const res = await fetch(CATEGORY_BASE_URL);
      const data = await res.json();
      console.log(data?.trivia_categories);
      setCategoryList(data?.trivia_categories);
    } catch (error) {
      console.log(`ERROR:` + error);
    } finally {
    }
  };

  const fetchQuestionList = async () => {
    try {
        let url: string = BASE_URL
        numberOfQuestions ? url += numberOfQuestions : url += 10;
        if(selectedCategoryId){
            url += `&category=` + (selectedCategoryId )
        }
        
        const res = await fetch(url);
      const data = await res.json();
      console.log(data?.results);
      setQuestionsList(data?.results);
    } catch (error) {
        console.log(`ERROR:` + error);
    } finally{       
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-start items-center">
      <div className="text-4xl font-bold text-gray-600">FlashCard Quiz App</div>
      <NavbarFlashCard
        categoryList={categorytList}
        categoryNameChange={(e) => setSelectedCategoryId(e.target.value)}
        numberOfQuestionsChange={(e) => setNumberOfQuestions(e.target.value)}
      />
      <div className="w-full">
        <Card  questions={questionsList}/>
      </div>
    </div>
  );
}
