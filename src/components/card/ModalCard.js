import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeDetails from "../details/RecipeDetails";
import { useEffect, useState } from "react";
import { lookupCategories } from '../../utils/CategoryUtil';
import useEscapeKey from '../../hooks/useEscapeKey';
import Navigation from "./navigation/Navigation";

const ModalCard = ({total, location}) => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEscapeKey(() => navigate('/'));


  useEffect(() => {

    if(!id) return;

    fetch(`http://localhost:3004/recipes/${id}`)
    .then(res => res.json())
    .then(
      (result) => {
        setRecipe(result);
      },
      (error) => {

      }
    )
  }, [id])

  if(!recipe) return null;

  return (
    <div className="modalDiv">
      <div className="modal">
        <div className="flex flex-row">
          <h2 className="p-2 font-bold text-2xl flex-grow">{recipe && recipe.title}</h2>
          <div className="py-3 px-2 hover:cursor-pointer font-bold justify-end" onClick={() => navigate('/')}>X</div>
        </div>
        {recipe && <RecipeDetails recipe={recipe} categories={lookupCategories(recipe.categories)} />}
      
      <Navigation id={recipe.id} location={location} total={total} />
      </div>
    </div>
  );
}
export default ModalCard;