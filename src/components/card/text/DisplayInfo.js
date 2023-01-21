import React from 'react'

 const DisplayInfo = ({recipe}) => {
  return (
    <div className="flex flex-col flex-grow px-2">
        <h3 className="text-xl text-white font-bold">{recipe.title}</h3>
        <h2 className="text-white font-bold">{recipe.source}</h2>
    </div>
  )
}
export default DisplayInfo;