"use client";

import React from "react";
import UserPointsItem from "../UserPointsItem";
import { Divider, ScrollShadow } from "@nextui-org/react";

const UserPointsList = ({ users }: UserPointsListProps) => {
  return (
    <div className="border-solid border-1 rounded-md flex flex-col w-full items-center p-2 text-white">
      <ScrollShadow hideScrollBar className="w-full h-[400px]">
        {users?.map((user, index) => {
          return (
            <div key={user.id} className="flex flex-col">
              <UserPointsItem user={user} position={index + 1} />
              <Divider className=" w-100 mx-3 bg-white" />
            </div>
          );
        })}
      </ScrollShadow>
    </div>
  );
};

export default UserPointsList;
