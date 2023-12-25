const _ = require("lodash");

const FAKE_CARDS_COUNT = 20;

const ShimmerCard = () => {
  return <div className="shimmmer-card m-4 p-4 w-[250px] bg-pink-100 rounded-md h-[400px]"></div>;
};

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap">
      {/* {_.range(1, FAKE_CARDS_COUNT).forEach((current, index, range) => {
        ShimmerCard();
      })} */}
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
