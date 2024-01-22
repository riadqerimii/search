import { useContext } from "react";
import RecipeItem from "../../components/recipe-list";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <div>
          <p className=" lg:text-6xl text-xl text-center text-black text-extrabold">
            Nothing is added to list
          </p>
        </div>
      )}
    </div>
  );
}
