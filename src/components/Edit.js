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
      <div className="flex gap-1">
        <div className="border border-gray-200 w-[320px] px-3 py-2 text-left rounded-sm">
          {isEdit === true ? (
            <input
              type="text"
              placeholder="save...."
              className="border border-gray-200 px-3 py-0.5"
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
            className={`bg-green-500 hover:bg-green-400 px-8 py-2 text-white rounded-sm`}
            onClick={() => {
              dispatch(updateTodo(item.id, updateValue));
              setIsEdit(false);
            }}
          />
        ) : (
          <Button
            title={"Edit"}
            className={`bg-green-500 hover:bg-green-400 px-8 py-2 text-white rounded-sm`}
            onClick={() => setIsEdit(true)}
          />
        )}

        <Button
          title={"Delete"}
          className={`bg-red-600 hover:bg-red-500 px-8 py-2 text-white rounded-sm`}
          onClick={() => dispatch(deleteTodo(item.id))}
        />
      </div>
    </div>
  );
};

export default Edit;
