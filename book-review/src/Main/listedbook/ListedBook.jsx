import { useState } from "react";
const sortBy = ["Rating", "Number of Pages", "Publish Year"];

function ListedBook() {
  const [selectedSortOption, setSelectedSortOption] = useState("Sort by");
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className=" max-w-7xl font-display mx-auto p-6 my-8">
      <div className="p-12 rounded-2xl bg-[#1313130D] text-center">
        <h1 className="text-4xl font-bold">Books</h1>
      </div>
      <div className="flex flex-col items-center mt-8">
        <label
          htmlFor="book"
          className="mb-2 text-lg font-semibold text-gray-700"
        >
          Sort Books By:
        </label>
        <div className="relative w-64 ">
          <button
            onClick={handleDropdownToggle}
            className=" w-full bg-blue-500 text-white px-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
          >
            {selectedSortOption}
          </button>
          <div
            className={`absolute transition-all duration-300 ease-in-out bg-[#1313130D] overflow-hidden rounded-b-lg shadow-lg ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="absolute flex flex-col pt-10 top-4 bg-[#1313130D] -z-1 w-full">
              {sortBy.map((option) => (
                <button
                  onClick={() => handleSortOptionChange(option)}
                  key={option}
                  className="px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListedBook;
