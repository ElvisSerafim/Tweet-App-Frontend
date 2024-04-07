import React from "react";
import InputTweet from "../InputTweet";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Tweet = () => {
  return (
    <>
      <div className="flex flex-col items-end gap-4 border-solid border-1 p-4 rounded-md">
        <InputTweet />
        <div className="flex w-full flex-row items-center text-white justify-between">
          <div className="flex flex-row gap-2">
            <p className="text-sm">
              Create tweets using the campaign phrase for make points!
            </p>
          </div>
          <Button color="primary">Post</Button>
        </div>
      </div>
    </>
  );
};

export default Tweet;
