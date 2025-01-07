import React, { useEffect, useState } from "react";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (
          await fetch("https://jsonplaceholder.typicode.com/todos")
        ).json();
        console.log("data-->", data);
        setUserData(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {userData?.map((user) => {
          return <li key={user.id}>{user.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
