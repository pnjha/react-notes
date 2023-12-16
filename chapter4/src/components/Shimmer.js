const _ = require("lodash");

const FAKE_CARDS_COUNT = 20;

const ShimmerCard = () => {
  return <div className="shimmmer-card"></div>;
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
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
