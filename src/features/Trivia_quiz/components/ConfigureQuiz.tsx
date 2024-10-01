import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Appdispatch } from "../../../app/store";
import { fetchQuizData } from "../quizSlice";
import axios from "axios";
import { Category } from "../types";

export const ConfigureQuiz = () => {
  const dispatch = useDispatch<Appdispatch>();
  
  const [difficulty, setDifficulty] = useState("easy");

  const difficultyLevels: string[] = ["Easy", "Medium", "Hard"];
  const [category, setCategory] = useState("9");
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://opentdb.com/api_category.php");
      setCategories(res.data.trivia_categories);
    } catch (error) {
      console.log(error); //comming back for handling
    }
  };


  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = () => {
    dispatch(
      fetchQuizData({
        category: category,
        difficulty: difficulty,
      })
    );
  };

  return (
    <div className="flex gap-6">

      {/* Dropdown to select a category */}
      <select
        name=""
        className="border-2 rounded-md p-2"
        id="categorySelect"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Dropdown to select a difficulty */}

      <select
        name=""
        id="difficultySelect"
        className="border-2 rounded-md p-2"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        {difficultyLevels.map((difficulty) => (
          <option key={difficulty} value={difficulty.toLowerCase()}>
            {difficulty}
          </option>
        ))}
      </select>

      {/* Create submit button */}

      <button
        className="border-2 rounded-md p-2 hover:bg-slate-400 bg-green-300  "
        id="createBtn"
        onClick={handleSubmit}
      >
        Create
      </button>
    </div>
  );
};
