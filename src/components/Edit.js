import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux2/Action";

const Edit = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updateValue, setUpdateValue] = useState(item.value);

  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <div className="flex items-center justify-center sm:flex gap-1">
        <div className="border border-gray-200 sm:w-[320px] w-[180px] px-3 sm:py-2 py-1 text-left rounded-sm">
          {isEdit === true ? (
            <input
              type="text"
              placeholder="save...."
              className="border border-gray-200 px-3 py-0.5 w-[150px]"
              value={updateValue}
              onChange={(ev) => setUpdateValue(ev.target.value)}
            />
          ) : (
            item.value
          )}
        </div>
        {isEdit === true ? (
          <Button
            title={"save"}
            className={`bg-green-500 hover:bg-green-400 sm:px-8 sm:py-2 px-4 py-1 text-white rounded-sm`}
            onClick={() => {
              dispatch(updateTodo(item.id, updateValue));
              setIsEdit(false);
            }}
          />
        ) : (
          <Button
            title={"Edit"}
            className={`bg-green-500 hover:bg-green-400 sm:px-8 sm:py-2 px-4 py-1 text-white rounded-sm`}
            onClick={() => setIsEdit(true)}
          />
        )}

        <Button
          title={"Delete"}
          className={`bg-red-600 hover:bg-red-500 sm:px-8 sm:py-2 px-4 py-1 text-white rounded-sm`}
          onClick={() => {
            dispatch(deleteTodo(item.id));
          }}
        />
      </div>
    </div>
  );
};

export default Edit;
