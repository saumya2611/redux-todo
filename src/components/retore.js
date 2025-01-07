import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { restoreTodo } from "../Redux2/Action";

const Restore = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <div className="flex gap-1">
        <div className="border border-gray-200 w-[400px] px-3 py-2 text-left">
          {item.value}
        </div>
        <Button
          title={"Restore"}
          className={`bg-green-500 hover:bg-green-400 px-8 py-2 text-white rounded-sm`}
          onClick={() => dispatch(restoreTodo(item))}
        />
      </div>
    </div>
  );
};

export default Restore;
