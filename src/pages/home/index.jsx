import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <div>
          <p className=" lg:text-6xl text-xl text-center text-black text-extrabold">
            Search your favorite food here
          </p>
        </div>
      )}
    </div>
  );
}
