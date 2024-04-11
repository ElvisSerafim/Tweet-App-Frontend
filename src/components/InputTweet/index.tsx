"use client";

import { Textarea } from "@nextui-org/react";
import React from "react";

const InputTweet = ({ tweetMessage, setTweetMessage }: InputTweetProps) => {
  return (
    <Textarea
      variant="underlined"
      color="primary"
      radius="sm"
      placeholder="What are you thinking ?"
      fullWidth
      value={tweetMessage}
      onValueChange={setTweetMessage}
      classNames={{
        input: "text-white text-base",
      }}
    />
  );
};

export default InputTweet;
