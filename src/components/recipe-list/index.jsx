import { Link } from "react-router-dom";

export default function RecipeItem({ item, index }) {
  return (
    <div
      key={index}
      className="flex flex-col w-80  overflow-hidden
    
    p-5 bg-white/75 shadow-xl gap-5 border-2
    rounded-2xl border-white
    "
    >
      <div className=" h-40  flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt={item?.title} className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-2 mt-8 px-8 rounded-sm uppercase font-medium tracking-wider  inline-block shadow-md bg-red-400 text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
