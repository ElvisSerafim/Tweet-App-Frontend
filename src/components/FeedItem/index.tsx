"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const FeedItem = ({ tweet }: FeedItemProps) => {
  return (
    <Card
      radius="sm"
      shadow="lg"
      className="min-w-full p-2 md:min-w-[600px] max-w-[400px] md:max-w-600px] border-solid border-1 border-text-light-text bg-light-black"
    >
      <CardHeader>
        <div className="flex flex-col px-1 gap-1 items-start justify-center">
          <h4 className="text-lg font-bold text-white">
            {tweet.tweetAuthorName}
          </h4>
          <div>
            <h4 className="text-light-text">{tweet.tweetCreatedAt}</h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className=" text-base text-white">
        <p>{tweet.tweetText}</p>
      </CardBody>
    </Card>
  );
};

export default FeedItem;
