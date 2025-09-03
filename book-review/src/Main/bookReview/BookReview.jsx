import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";

function BookReview() {
  const book = useLoaderData();

  const getBooks = (key) => JSON.parse(localStorage.getItem(key)) || [];
  const setBooks = (key, arr) => localStorage.setItem(key, JSON.stringify(arr));

  const handleRead = (bookId) => {
    const readBooks = getBooks("readBooks");
    const wishlistBooks = getBooks("wishlistBooks");

    if (readBooks.includes(bookId)) {
      toast.error("Book is already marked as read.", { position: "top-right" });
      return;
    }

    const updatedWishlist = wishlistBooks.filter((id) => id !== bookId);
    setBooks("wishlistBooks", updatedWishlist);

    setBooks("readBooks", [...readBooks, bookId]);
    toast.success("Book marked as read!", { position: "top-right" });
  };

  const handleWishlist = (bookId) => {
    const readBooks = getBooks("readBooks");
    const wishlistBooks = getBooks("wishlistBooks");

    if (readBooks.includes(bookId)) {
      toast.error("Book is already marked as read.", { position: "top-right" });
      return;
    }
    if (wishlistBooks.includes(bookId)) {
      toast.error("Book is already in wishlist.", { position: "top-right" });
      return;
    }

    setBooks("wishlistBooks", [...wishlistBooks, bookId]);
    toast.success("Book added to wishlist!", { position: "top-right" });
  };

  return (
    <div className="flex max-w-7xl justify-center gap-10 font-display mx-auto p-6 my-12">
      {book ? (
        <>
          <div className="w-1/2 bg-[#1313130D] py-10 rounded-2xl flex justify-center items-center mx-auto">
            <img className="h-[600px]" src={book.image} alt={book.bookName} />
          </div>
          <div className="mt-4 w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">{book.bookName}</h2>
            <p className="text-gray-600">
              <strong>Author: </strong> {book.author}
            </p>
            <hr className="border-gray-300 my-4" />
            <p className="text-gray-600">
              <strong>Category: </strong> {book.category}
            </p>
            <hr className="border-gray-300 my-4" />
            <p className="mt-2">
              <strong>Review: </strong> {book.review}
            </p>
            <p>
              <strong>Tags: </strong> {book.tags.join(",  ")}
            </p>
            <hr className="border-gray-300 my-4" />
            <p>
              <strong>Number of Pages: </strong> {book.totalPages}
            </p>
            <p>
              <strong>Publisher: </strong> {book.publisher}
            </p>
            <p>
              <strong>Year of Publishing: </strong> {book.yearOfPublishing}
            </p>
            <p>
              <strong>Rating: </strong> {book.rating} ⭐
            </p>
            <div className="mt-6 flex gap-4 font-bold">
              <button
                onClick={() => handleRead(book.bookId)}
                className="border-blue-500/85 border-2 cursor-pointer text-blue-500/85 py-2 px-4 rounded"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlist(book.bookId)}
                className="bg-blue-500/85 text-white cursor-pointer py-2 px-4 rounded"
              >
                Wishlist
              </button>
              <ToastContainer />
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full">
          <h2 className="text-red-500 text-4xl">Book not found.</h2>
        </div>
      )}
    </div>
  );
}

export default BookReview;
