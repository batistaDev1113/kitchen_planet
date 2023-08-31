const Business = ({ business }) => {
  const { name, image_url, location, categories, rating, review_count } =
    business;

  const { address1, city, state, zip_code } = location;
  const { title } = categories[0];
  const formattedReviewCount = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(review_count);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
      <img
        className="object-cover h-48 w-96"
        src={image_url}
        alt="Restaurant image"
      />
      <div className="px-2 py-4">
        <p className="font-bold text-xl mb-2">{name}</p>
        <div className="flex justify-between">
          <section>
            <p>{address1}</p>
            <p>{city}</p>
            <p>
              {state}, <span>{zip_code}</span>
            </p>
          </section>
          <section>
            <h3 className="uppercase text-yellow-500 font-semibold">{title}</h3>
            <p className=" text-yellow-500 font-semibold">{rating} stars</p>
            <p>{formattedReviewCount} reviews</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Business;
