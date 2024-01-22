import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 ">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          name="search"
          placeholder="Your favorite food..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w96 shadow-lg
          focus-shadow-red-500
          "
        />
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/"}
            className="mx-5 text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
