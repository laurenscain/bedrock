import React from 'react'
import Category from './Category';

const CategoryHolder = ({recipe, categories}) => {
  return (
    <div className="flex flex-row">
        {categories.map(c => <Category key={`${recipe.id}-${c.id}`} id={recipe.id} category={c} />)}
    </div>
  )
}
export default CategoryHolder;