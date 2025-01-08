import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { restoreTodo } from "../Redux2/Action";

const Restore = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <div className="flex justify-center items-center sm:flex gap-1">
        <div className="border border-gray-200 sm:w-[400px] w-[200px] px-3 sm:py-2 py-1 text-left">
          {item.value}
        </div>
        <Button
          title={"Restore"}
          className={`bg-green-500 hover:bg-green-400 sm:px-8 sm:py-2 px-4 py-1 text-white rounded-sm`}
          onClick={() => dispatch(restoreTodo(item))}
        />
      </div>
    </div>
  );
};

export default Restore;
