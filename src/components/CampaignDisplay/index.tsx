import { Chip } from "@nextui-org/react";

const CampaignDisplay = ({ campaignPhrase }: CampaignDisplayProps) => {
  return (
    <div className="flex flex-col gap-2 text-white w-100 items-center">
      <h1 className="text-xl font-bold">Campaign phrase:</h1>
      <Chip
        radius="sm"
        color="primary"
        classNames={{
          base: "flex flex-col max-w-[300px] md:max-w-full h-full p-2 text-center text-wrap",
        }}
      >
        {campaignPhrase}
      </Chip>
    </div>
  );
};

export default CampaignDisplay;
