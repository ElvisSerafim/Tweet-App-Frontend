"use client";
import FeedItem from "@/components/FeedItem";
import { useEffect, useState } from "react";
import Tweet from "@/components/Tweet";
import UserPointsList from "@/components/UserPointsList";
import { Skeleton, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import {
  createUserTweet,
  getAllUsers,
  getCampaign,
  getTweets,
} from "@/services/fetchService";
import CampaignDisplay from "@/components/CampaignDisplay";

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [tweetLoading, setTweetLoading] = useState(false);
  const [campaignPhrase, setCampaignPhrase] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const getAllTweets = async () => {
    setTweetLoading(true);
    try {
      const response = await getTweets();
      setTweets(response);
    } catch (error) {
    } finally {
      setTweetLoading(false);
    }
  };

  const getCurrentCampaign = async () => {
    setLoading(true);
    try {
      const response = await getCampaign();
      setCampaignPhrase(response.campaignPhrase);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await getAllUsers();
      setUsers(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const createTweet = async (payload: TweetRequest) => {
    setTweetLoading(true);
    try {
      await createUserTweet(payload);
      await getAllTweets();
      await getUsers();
    } catch (error) {
    } finally {
      setTweetLoading(false);
    }
  };

  useEffect(() => {
    getAllTweets();
    getCurrentCampaign();
    getUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col min-w-full md:min-w-[600px] max-w-[400px] gap-6 md:max-w-600px]">
        <Skeleton className="rounded-lg" isLoaded={!loading}>
          <CampaignDisplay campaignPhrase={campaignPhrase} />
        </Skeleton>
        <Tweet createTweet={createTweet} />
        <Tabs fullWidth variant="underlined" className="pt-6" color="primary">
          <Tab key="feed" title="Feed">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-5">
                {tweetLoading ? (
                  <Skeleton isLoaded={!tweetLoading} className="rounded-lg">
                    {tweets?.map((tweet) => (
                      <FeedItem key={tweet.id} tweet={tweet} />
                    ))}
                  </Skeleton>
                ) : (
                  <>
                    {tweets?.map((tweet) => (
                      <FeedItem key={tweet.id} tweet={tweet} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </Tab>
          <Tab
            key="ranking"
            title={
              <div className="flex items-center space-x-2">
                <span>Users Posts Ranking </span>
                <Image
                  src={"/star-icon.svg"}
                  width={15}
                  height={15}
                  alt={"star-icon"}
                />
              </div>
            }
          >
            <UserPointsList users={users} />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
}
