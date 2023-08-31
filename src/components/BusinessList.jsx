import Business from "./Business";

const BusinessList = ({ businesses }) => {
  if (businesses.length === 0) {
    return (
      <div className="flex flex-1 p-14">
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl font-bold text-gray-700">No results found</h1>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap md:px-36 justify-between">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
