import React from "react";

function ProfileList({ profileImg, id, title, firstName, lastName }) {
  return (
    <div className='flex flex-col space-y-3  w-full md:w-4/12 items-center hover:shadow-none transition-all duration-150 justify-center shadow-md bg-white rounded p-3 mt-6'>
      <div>
        <img src={profileImg} alt='Profile Picture' />
      </div>
      <div>
        <p className='text-gray-500'>{id}</p>
        <p className='mt-3 font-semibold'>
          {title} {firstName} {lastName}
        </p>
      </div>
    </div>
  );
}

export default ProfileList;
