import React from "react";
import ProfileList from "./ProfileList";

function UserList({ profiles, searchItem }) {
  return (
    <div className='flex gap-6 justify-center items-center flex-wrap gap-x w-full'>
      {profiles
        .filter(
          (profile) =>
            profile.firstName
              .toLowerCase()
              .includes(searchItem.toLowerCase()) ||
            profile.lastName.toLowerCase().includes(searchItem.toLowerCase()) ||
            profile.title.toLowerCase().includes(searchItem.toLowerCase())
        )
        .map((profile) => {
          return (
            <ProfileList
              key={profile.id}
              id={profile.id}
              profileImg={profile.picture}
              title={profile.title}
              firstName={profile.firstName}
              lastName={profile.lastName}
            />
          );
        })}
    </div>
  );
}

export default UserList;
