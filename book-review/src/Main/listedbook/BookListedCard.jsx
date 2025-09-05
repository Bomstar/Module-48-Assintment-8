import { SlLocationPin } from "react-icons/sl";
import { LuUsersRound } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router";

function BookListedCard({ bookData }) {
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = bookData;
  return (
    <div className="border border-[#13131380] flex gap-8 rounded-lg p-4 mb-4">
      <div className="py-5 px-20 bg-[#F3F3F3] rounded-md  grid items-center justify-center overflow-hidden">
        <img className="w-[120px] object-cover" src={image} alt={bookName} />
      </div>
      <div className="space-y-4 flex-1">
        <h1 className="text-3xl font-display font-bold">{bookName}</h1>
        <p className="text-[#131313CC]">By: {author}</p>
        <div className="flex gap-3">
          <p>
            <strong className="mr-4">Tags </strong>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm mr-3 px-3 p-1 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] font-bold"
              >
                {tag}
              </span>
            ))}
          </p>
          <p className="text-[#131313CC] flex items-center gap-3">
            <SlLocationPin />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex gap-10 mt-3">
          <p className="text-[#131313CC] flex items-center gap-3">
            <LuUsersRound />
            {publisher}
          </p>
          <p className="text-[#131313CC] flex items-center gap-3">
            <RiPagesLine />
            Total Pages: {totalPages}
          </p>
        </div>
        <hr className="border-gray-300" />
        <div className="flex gap-5 items-center">
          <button className="bg-[#328EFF]/15 text-[#328EFF] py-3 px-5 rounded-full">
            Category: {category}
          </button>
          <button className="bg-[#FFAC33]/15 text-[#FFAC33] py-3 px-5 rounded-full">
            Rating: {rating}
          </button>
          <Link
            className="bg-[#23BE0A] py-3 px-5 font-bold rounded-full text-white"
            to={`/book-review/${bookName}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookListedCard;
