"use client";

import React, { useState } from "react";
import InputTweet from "../InputTweet";
import { Button } from "@nextui-org/react";
import moment from "moment";

const Tweet = ({ createTweet }: TweetProps) => {
  const [tweetMessage, setTweetMessage] = useState<string>("");

  const generateTweet = () => {
    const tweetData: TweetRequest = {
      message: tweetMessage,
      userEmail: "elvisserafim6@gmail.com",
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    createTweet(tweetData);
    setTweetMessage("");
  };
  return (
    <div className="flex flex-col items-end gap-4 border-solid border-1 p-4 rounded-md">
      <InputTweet
        tweetMessage={tweetMessage}
        setTweetMessage={setTweetMessage}
      />
      <div className="flex w-full flex-row items-center text-white justify-between">
        <div className="flex flex-row gap-2">
          <p className="text-sm">
            Create tweets using the campaign phrase for make points!
          </p>
        </div>
        <Button onClick={generateTweet} color="primary">
          Post
        </Button>
      </div>
    </div>
  );
};

export default Tweet;
