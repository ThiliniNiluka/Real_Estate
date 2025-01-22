import logo from "../assets/logo.svg";

export default function Navbar(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="/Home" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="/About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="/Project" className="cursor-pointer hover:text-gray-400">
            Project
          </a>
          <a
            href="/Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block px-8 bg-white py-2 rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
}
