import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full px-5 flex justify-between items-center bg-gray-100 py-3">
      <div>
        <span className="logo font-bold">Restaurant Landing Page</span>
      </div>
      <div>
        <ul className="flex gap-3 items-center ">
          <li>Landing</li>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          <li className="mt-1">
            <IoMdCart />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
