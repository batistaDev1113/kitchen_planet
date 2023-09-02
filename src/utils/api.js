export const searchBusinesses = async (term, location, sortBy) => {
  const API_KEY = import.meta.env.VITE_YELP_API_ACCESS_KEY;
  const data = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const jsonResponse = await data.json();
  if (jsonResponse.businesses) {
    return jsonResponse.businesses;
  }
};
