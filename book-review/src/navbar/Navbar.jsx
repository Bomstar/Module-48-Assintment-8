import { NavLink } from "react-router";

const navlist = [
  { path: "/", label: "Home" },
  { path: "/listed", label: "Listed Book" },
  { path: "/pages-to-read", label: "Pages to Read" },
];

function Navbar() {
  return (
    <nav className="bg-white  py-6 px-6 flex items-center justify-between w-full">
      {/* Logo/Brand Name */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">Book Review</span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6">
        {navlist.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive, isPending }) =>
              isActive
                ? "border-2 py-1 px-4 rounded-md font-bold text-blue-500 border-blue-500"
                : isPending
                ? "pending"
                : "border-2 border-white py-1 px-4"
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold">
          Sign In
        </button>
        <button className="px-4 py-2 bg-gray-200 text-blue-600 rounded hover:bg-gray-300 font-semibold">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
