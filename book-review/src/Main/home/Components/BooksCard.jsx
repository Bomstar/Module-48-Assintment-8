import { Link } from "react-router";

function BooksCard({ book }) {
  return (
    <Link
      to={`/book-review/${book.bookName}`}
      className="border space-y-3 p-4 rounded-lg flex flex-col"
    >
      <div className="h-72 bg-[#F3F3F3] rounded-md  grid items-center justify-center overflow-hidden mb-4">
        <img
          className="w-[200px] object-cover"
          src={book.image}
          alt={book.bookName}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{book.bookName}</h2>
      <p className="text-gray-600">{book.author}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm px-2 p-1 rounded bg-[#23BE0A]/10 text-[#23BE0A] font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
      <hr className=" border-dashed border-b-2 border-gray-200 mt-auto" />
      <div className="flex justify-between text-gray-600 font-medium">
        <p>{book.category}</p>
        <p>{book.rating} ⭐</p>
      </div>
    </Link>
  );
}

export default BooksCard;
