import MenuItem from "./MenuItem";

export default ({ cards }) => {
  return (
    <div>
      {cards.map((card) => {
        const info = card.card.info;
        return (
          <MenuItem
            key={info.id}
            name={info.name}
            price={parseInt(info.price ?? info.defaultPrice) / 100}
            imageId={info.imageId}
            description={info.description}
            itemRatings={info.ratings.aggregatedRating.rating}
          />
        );
      })}
    </div>
  );
};
