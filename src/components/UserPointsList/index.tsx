"use client";

import React, { useState } from "react";
import UserPointsItem from "../UserPointsItem";
import { Divider, ScrollShadow } from "@nextui-org/react";

const UserPointsList = () => {
  const [user, setUser] = useState<User>({
    email: "elvisserafim6@gmail.com",
    name: "Elvis Serafim",
    points: 50,
  });

  return (
    <div className="border-solid border-1 rounded-md flex flex-col w-full items-center p-2 text-white">
      <ScrollShadow hideScrollBar className="w-full h-[400px]">
        {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (item, index) => {
            return (
              <>
                <div className="flex flex-col">
                  <UserPointsItem
                    user={user}
                    key={index}
                    position={index + 1}
                  />
                  <Divider className=" w-100 mx-3 bg-white" />
                </div>
              </>
            );
          }
        )}
      </ScrollShadow>
    </div>
  );
};

export default UserPointsList;
