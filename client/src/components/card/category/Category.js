import React from 'react';
import getImageByKey from '../../../utils/CategoryUtil';

const Category = ({id, category}) => {
  return (
    <div className="flex flex-col justify-end items-center">
        <img key={`${id}-${category.categoryName}`} className="p-1 h-10 w-10 relative z-0 text-white" src={getImageByKey(category.categoryName)} alt={category.categoryName} />
        <span className="p-1 relative z-0 text-white text-xs">{category.categoryName}</span>
    </div>
  )
}
export default Category;