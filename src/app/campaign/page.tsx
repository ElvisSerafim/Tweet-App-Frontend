"use client";

import { getCampaign, updateCampaign } from "@/services/fetchService";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Campaign = () => {
  const [campaignPhrase, setCampaignPhrase] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentCampaign = async () => {
    try {
      const response = await getCampaign();
      setCampaignPhrase(response.campaignPhrase);
    } catch (error) {}
  };

  const updateCurrentCampaign = async () => {
    try {
      setIsLoading(true);
      await updateCampaign({ campaignPhrase: campaignPhrase });
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentCampaign();
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10 px-4 py-8 text-white">
      <div className="flex flex-col items-center gap-4 w-full md:w-2/5">
        <h1 className="text-xl font-bold">Campaign phrase</h1>
        <Input
          type="text"
          variant={"bordered"}
          className="text-white"
          value={campaignPhrase}
          color="primary"
          onValueChange={setCampaignPhrase}
        />
        <Button
          fullWidth
          isLoading={isLoading}
          onClick={updateCurrentCampaign}
          className="pointer"
          color="primary"
        >
          Update Phrase
        </Button>
      </div>
    </div>
  );
};

export default Campaign;
