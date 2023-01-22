import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DisplayInfo from './text/DisplayInfo';
import RecipeImage from './image/RecipeImage';
import CategoryHolder from './category/CategoryHolder';

const RecipeCard = ({recipe, categories}) => {
  const location = useLocation();
 
  return (
    <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`${recipe.id}`} state={{ background: location }} className="relative">
        <RecipeImage recipe={recipe} />

        <div className="absolute z-4 bottom-1 left-0 right-0 px-2 py-2 flex flex-row">
          <DisplayInfo recipe={recipe} />
          <CategoryHolder recipe={recipe} categories={categories} />
        </div>

      </Link>
    </div> 
  )
}
export default RecipeCard;