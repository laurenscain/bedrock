import React from 'react';
import RecipeImage from '../card/image/RecipeImage';
import CategoryHolder from '../card/category/CategoryHolder';
import DisplayInfo from '../card/text/DisplayInfo';

const RecipeDetails = ({recipe, categories}) => {
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  
  return (
    <div>
      <RecipeImage recipe={recipe} w={700} h={300} radius={'none'} modal={true} />
      
      <div className="flex flex-row bg-gray-700 p-2 h-24 md:h-20">
        
        <DisplayInfo recipe={recipe} />

        <CategoryHolder recipe={recipe} categories={categories} />

      </div>

      <div className="px-4 py-4 h-48 md:h-60 overflow-y-scroll">
        {renderHTML(recipe.directions)}
      </div>
</div>

  )
}
export default RecipeDetails;