import React from "react";

function UserProfile(props) {
  const { firstName, lastName, profileImageUrl, Email } = props;

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  };

  return (
    <div className="bg-gray-200 flex rounded-3xl items-center p-4">
      <div className="bg-white object-cover w-10 h-10 rounded-full m-3">
        {profileImageUrl ? (
          <img src={profileImageUrl} alt={getInitials(firstName, lastName)} />
        ) : (
          <span>{getInitials(firstName, lastName)}</span>
        )}
      </div>

      <div>
        <h1 className="text-lg font-semibold text-black capitalize dark:text-white">
          {firstName}
          {lastName}
        </h1>

        <p className="text-sm text-black dark:text-gray-400">{Email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
