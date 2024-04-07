import Image from "next/image";

const PointsDisplay = () => {
  return (
    <>
      <div className="flex flex-row gap-2 text-center items-center">
        <p>10</p>
        <Image
          src={"/star-icon.svg"}
          width={15}
          height={15}
          alt={"star-icon"}
        />
      </div>
    </>
  );
};

export default PointsDisplay;
