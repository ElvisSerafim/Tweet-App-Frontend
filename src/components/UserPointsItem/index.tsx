import React from "react";
import PointsDisplay from "../PointsDisplay";

const UserPointsItem = ({ user, position }: UserPointsItemProps) => {
  return (
    <div className="flex flex-row  gap-10 items-center justify-between p-4 min-w-50 text-white">
      <div className="flex flex-row gap-3 items-center">
        <div className="flex flex-col bg-primary items-center justify-center rounded-full p-4 w-8 h-8 break-words">
          <p>{position}°</p>
        </div>
        <p>{user.name}</p>
      </div>
      <div>
        <PointsDisplay />
      </div>
    </div>
  );
};

export default UserPointsItem;
