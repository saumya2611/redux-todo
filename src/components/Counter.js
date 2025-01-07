import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/Action/index";

const Counter = () => {
  const currentState = useSelector((state) => {
    // console.log("state:", state);
    return state.reducer1;
  });
  const dispatch = useDispatch();
  // console.log("currentState", currentState);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className=" w-[500px] py-5 rounded-sm bg-white drop-shadow-lg">
        <div className="mt-5">
          <span className="text-4xl text-lime-600">
            Counter : {currentState.count}
          </span>
        </div>
        <div className="mt-5 flex gap-1 items-center justify-center py-8">
          <Button
            title={"Increment"}
            className={`text-2xl text-white bg-slate-500 hover:bg-slate-400 rounded-sm px-5 py-2`}
            onClick={() => {
              dispatch(increment());
            }}
          />
          <Button
            title={"Decrement"}
            className={`text-2xl text-white bg-slate-500 hover:bg-slate-400 rounded-sm px-5 py-2`}
            onClick={() => {
              if (currentState.count > 0) {
                dispatch(decrement(5));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
