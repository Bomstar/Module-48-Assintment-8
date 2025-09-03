function HeroSection({ booksData }) {
  return (
    <div className="p-24 rounded-2xl flex flex-col gap-20 md:flex-row items-center justify-between bg-[#1313130D]">
      <div className="w-[60%] ">
        <h1 className="text-[56px]  leading-14 font-bold  mb-4">
          Books to freshen up your bookshelf
        </h1>
        <p className="text-lg mb-6">
          Your one-stop solution for reviewing and managing your books.
        </p>
      </div>
      <div className="w-[40%] p- pl-8">
        <img
          src="http://static1.squarespace.com/static/5fed0a6a15120a7c1d180129/5ff33655ef2f3400f0cac1d8/5ff336a1ef2f3400f0cacf8d/1609774753941/img_1321.jpg?format=original"
          alt="Book Review"
        />
      </div>
    </div>
  );
}

export default HeroSection;
