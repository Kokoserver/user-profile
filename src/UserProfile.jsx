import React, { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

const UserProfile = ({ profiles }) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className=' min-h-screen'>
      <div className='w-[90%] mx-auto py-8'>
        <Header searchTerm={searchItem} onhandleChange={setSearchItem} />
        <UserList profiles={profiles} searchItem={searchItem} />
      </div>
    </div>
  );
};

export default UserProfile;
