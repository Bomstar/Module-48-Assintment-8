import { useLoaderData } from "react-router";
import HeroSection from "./Components/HeroSection.jsx";
import BooksCard from "./Components/BooksCard.jsx";

function Home() {
  const booksData = useLoaderData();
  return (
    <div className="max-w-7xl font-display space-y-20 mx-auto px-6">
      <HeroSection booksData={booksData} />
      <div>
        <h1 className="text-5xl text-center font-bold mb-16">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.map((book) => (
            <BooksCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
