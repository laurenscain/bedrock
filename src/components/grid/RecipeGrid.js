import React from 'react';
import RecipeCard from '../card/RecipeCard';
import { lookupCategories } from '../../utils/CategoryUtil';

const RecipeGrid = ({items, loading}) => {
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-center">
        {items && items.map(r => 
          <RecipeCard key={r.id} recipe={r} categories={lookupCategories(r.categories)}>{r.title}</RecipeCard>)
        }
      </div>
      {loading && 
        <div className="flex justify-center">
          <span className="rounded border border-black-600 p-2">Loading More...</span>
        </div>
      }
    </div>
  );
}

export default RecipeGrid;