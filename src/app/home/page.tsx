"use client";
import FeedItem from "@/components/FeedItem";
import { useEffect, useState } from "react";
import Tweet from "@/components/Tweet";
import UserPointsList from "@/components/UserPointsList";
import { Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import { getCampaign } from "@/services/fetchService";
import CampaignDisplay from "@/components/CampaignDisplay";

export default function Home() {
  const [tweet, setTweet] = useState<Tweet>({
    tweetAuthorName: "Elvis Michael Souza Serafim",
    tweetCreatedAt: "4 de abril ás 11:00",
    tweetText:
      "A minha conclusão de quando usar interface VS type é que Depende, o que você realmente precisa? esse tipos serão exportados publicamente? então declare usando interface. Você está declarando tipos de uma classe ou função? então declare usando interface.Essas dentre outras perguntas vai nos ajudar a decidir quando usar uma ou outra. Mas sempre de preferência para interface pois essa declaração nos da suporte melhor em caso de erro.",
  });

  const [campaignPhrase, setCampaignPhrase] = useState<string>("");

  const getAllTweets = async () => {
    try {
    } catch (error) {}
  };

  const getCurrentCampaign = async () => {
    try {
      const response = await getCampaign();
      setCampaignPhrase(response.campaignPhrase);
    } catch (error) {}
  };

  useEffect(() => {
    getAllTweets();
    getCurrentCampaign();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col min-w-full md:min-w-[600px] max-w-[400px] gap-6 md:max-w-600px]">
        <CampaignDisplay campaignPhrase={campaignPhrase} />
        <Tweet />
        <Tabs fullWidth variant="underlined" className="pt-6" color="primary">
          <Tab key="feed" title="Feed">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                  <FeedItem key={index} tweet={tweet} />
                ))}
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
            <UserPointsList />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
}
