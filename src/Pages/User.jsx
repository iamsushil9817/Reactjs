import React, { useEffect, useState } from "react";

const User = () => {
  const Getlocalstorageitem = JSON.parse(localStorage.getItem("bearerToken"));
  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetcheduser = async () => {
      try {
        const res = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Getlocalstorageitem}`,
          },
        });
        const json = await res.json();
        console.log(json);

        setUsers(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetcheduser();
  }, []);
  return (
    <div className="container mx-auto w-[50%]  text-black flex flex-col items-center border-solid border-green-500 ">
      <div>
        <img className="h-[500px]" src={users.image} />
      </div>
      <h1 className="text-lg">
        Name:{users.firstName} {users.lastName}
      </h1>
      <h1 className="text-lg">University:{users.university}</h1>
    </div>
  );
};

export default User;
