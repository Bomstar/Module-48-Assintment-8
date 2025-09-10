import { useState } from "react";
import BookListedCard from "./BookListedCard";
import { useLoaderData } from "react-router";
const sortBy = ["Rating", "Number of Pages", "Publish Year"];

function ListedBook() {
  const booksdata = useLoaderData();
  const [selectedSortOption, setSelectedSortOption] = useState("Sort by");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isReadBooks, setIsReadBooks] = useState(true);
  const [localBookData, setLocalBookData] = useState("readBooks");

  const getBooksId = JSON.parse(localStorage.getItem(localBookData)) || [];

  const shortBy = (book, option) => {
    if (option === "Rating") {
      return book.sort((a, b) => b.rating - a.rating);
    } else if (option === "Number of Pages") {
      return book.sort((a, b) => b.totalPages - a.totalPages);
    } else if (option === "Publish Year") {
      return book.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return book;
  };

  const getBooklistRow = booksdata.filter((book) =>
    getBooksId.includes(book.bookId)
  );

  const getBooklist = shortBy(getBooklistRow, selectedSortOption);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option);
    setIsDropdownOpen(false);
  };

  const handleBookListUpdate = (listType) => {
    setLocalBookData(listType);
    setIsReadBooks(listType === "readBooks");
    setSelectedSortOption("Sort by");
  };

  return (
    <div className=" max-w-7xl mx-auto p-6 my-8">
      <div className="p-12 rounded-2xl bg-[#1313130D] text-center">
        <h1 className="text-4xl font-bold">Books</h1>
      </div>
      <div className="flex justify-center z-10 mt-8">
        <div className="relative bg-[#1313130D] w-64 transform">
          <button
            onClick={() => handleDropdownToggle()}
            className=" w-full relative z-10 bg-blue-500 text-white px-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
          >
            {selectedSortOption}
          </button>
          <div
            className={`absolute w-full h-0 pt-8 top-4 bg-white z-1 transition-all duration-300 ease-in-out  overflow-hidden rounded-b-lg shadow-lg ${
              isDropdownOpen && "h-38"
            }`}
          >
            <div className=" flex flex-col h-full w-full">
              {sortBy.map((option) => (
                <button
                  onClick={() => handleSortOptionChange(option)}
                  key={option}
                  className="px-4 py-2 h-full hover:bg-blue-500 hover:text-white"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex mt-8 space-x-4 border-b-2 border-[#13131380] text-black relative">
          <span
            className={`absolute top-0.5  h-full rounded-t-lg border-x-2 border-y-2 border-[#13131380] border-b-white transition-all duration-300 ease-in-out ${
              isReadBooks ? "left-0 w-32" : "left-34 w-39"
            }`}
          />
          <button
            className={`ml-0.5 px-4 py-2 pt-3 ${
              isReadBooks ? "text-black" : "text-[#13131380]"
            }`}
            onClick={() => handleBookListUpdate("readBooks")}
          >
            Read Books
          </button>
          <button
            className={`px-4 py-2 pt-3 ${
              !isReadBooks ? "text-black" : "text-[#13131380]"
            }`}
            onClick={() => handleBookListUpdate("wishlistBooks")}
          >
            Wishlist Books
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {getBooklist.length > 0 ? (
            getBooklist.map((bookData) => (
              <BookListedCard key={bookData.bookId} bookData={bookData} />
            ))
          ) : (
            <h2 className="text-[#13131380] py-20 text-4xl text-center">
              No books found.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListedBook;
