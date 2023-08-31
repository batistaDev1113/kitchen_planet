import { useState } from "react";
import "../App.css";
import { searchBusinesses } from "../utils/api";

const Search = ({ handleBusinessChange }) => {
  const [business, setBusiness] = useState({
    category: "italian",
    location: "",
    filter: "best_match",
  });

  const searchSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const search = data.get("search");
    const location = data.get("location");
    setBusiness({ ...business, category: search, location: location });
    const results = await searchBusinesses(search, location, business.filter);
    if (results) {
      handleBusinessChange(results);
    }
  };

  const updateFilter = (filterName) => {
    setBusiness({ ...business, filter: filterName });
  };

  return (
    <div className="w-full h-96 search-container flex justify-center place-items-center flex-col">
      <div id="filters" className="lg:w-1/2 w-full mx-auto">
        <div className="flex justify-center filter-background w-[40%] m-auto backdrop-brightness-50 rounded-md">
          <ul className="flex space-x-12 p-5 border-b-2  border-x-slate-400 text-white justify-center w-auto">
            <li
              className={
                `flex flex-col text-center cursor-pointer z-[100]` +
                ` ${business.filter === "best_match" ? "text-yellow-500" : ""}`
              }
              onClick={() => updateFilter("best_match")}
            >
              Best
              <br /> Match
            </li>
            <li
              className={
                "flex flex-col text-center cursor-pointer z-50" +
                ` ${business.filter === "rating" ? "text-yellow-500" : ""}`
              }
              onClick={() => updateFilter("rating")}
            >
              Highest <br /> Rated
            </li>
            <li
              className={
                "flex flex-col text-center cursor-pointer" +
                ` ${
                  business.filter === "review_count" ? "text-yellow-500" : ""
                }`
              }
              onClick={() => updateFilter("review_count")}
            >
              Most <br /> Reviewed
            </li>
          </ul>
        </div>
      </div>
      <form
        onSubmit={searchSubmit}
        className="p-3 flex flex-col w-[50%] align-middle justify-center place-items-center"
      >
        <div className="flex space-x-4 p-5 w-full">
          <input
            placeholder="Search Businesses"
            name="search"
            className="p-3 rounded-md w-1/2 focus:outline-none"
          />
          <input
            placeholder="Where?"
            name="location"
            className="p-3 rounded-md w-1/2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 p-3 rounded-md w-48 hover:bg-yellow-400 font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
