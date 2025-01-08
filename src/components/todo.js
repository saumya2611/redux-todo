import React, { useEffect, useState } from "react";
import Button from "./Button";
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../Redux2/Action";
import Restore from "./retore";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const currentState = useSelector((state) => {
    return state.todoReducer;
  });

  const dispatch = useDispatch();

  console.log("currentState", currentState);
  const addTodo = () => {
    if (!inputValue.trim()) {
      alert("plzzz field value");
      return;
    }
    dispatch(createTodo(inputValue));
    setInputValue("");
  };

  //   useEffect(() => {
  //     console.log("inputValue==========>", inputValue);
  //   }, [inputValue]);

  return (
    <div className="sm:[100vh] h-[60vh]  flex items-center justify-center  sm:flex sm:items-center sm:justify-center px-[0.5rem]">
      <div className="border border-slate-100 sm:px-[5rem] px-[1.5rem] py-2 shadow-lg bg-slate-50 rounded-md pb-[4rem]">
        <h1 className="text-3xl sm:text-4xl text-center py-5 text-lime-400">
          Todo Application
        </h1>
        <div className="sm:flex flex items-center justify-center gap-2 mt-5">
          <input
            type="text"
            placeholder="Create Item........."
            className="px-3 py-1 sm:py-2 w-[230px] sm:w-[400px] outline-none border border-gray-200 rounded-sm"
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
          />
          <Button
            title={"Add"}
            className={` bg-black sm:px-[3rem] sm:py-2 px-[2rem] py-1  text-white rounded-sm hover:bg-slate-700`}
            onClick={() => addTodo()}
          />
        </div>
        {currentState.todoData.map((item) => {
          return <Edit key={item.id} item={item} />;
        })}
        <div className="sm:mt-[5rem] mt-[3rem]">
          {currentState.restoreArr.length ? (
            <div>
              <h1 className="sm:text-left sm:text-4xl text-2xl text-center text-amber-500">
                Restore Data
              </h1>
              {currentState.restoreArr.map((item) => {
                return <Restore key={item.id} item={item} />;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Todo;
