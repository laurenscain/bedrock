import React, { useEffect, useState, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import RecipeCard from '../card/RecipeCard';
import { Link } from 'react-router-dom';
import { lookupCategories } from '../../utils/CategoryUtil';

const RecipeGrid = ({items, loading}) => {
  //const { data, error } = useFetch('http://localhost:3004/recipes')

  


  return (
    <>
      <div className="flex flex-row flex-wrap">
        {items && items.map(r => <RecipeCard key={r.id} recipe={r} categories={lookupCategories(r.categories)}>{r.title}</RecipeCard>)}
      </div>
      {loading && 
        <div className="flex justify-center">
          <span className="rounded border border-black-600 p-2">Loading More...</span>
        </div>
      }
    </>
  );
}

export default RecipeGrid;