import { useState } from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import Search from "./components/Search";
import Banner from "./components/Banner";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleBusinessChange = (updatedBusinesses) => {
    console.log("updated businesses in app", updatedBusinesses);
    setBusinesses(updatedBusinesses);
  };
  return (
    <>
      <Banner />
      <Search handleBusinessChange={handleBusinessChange} />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
