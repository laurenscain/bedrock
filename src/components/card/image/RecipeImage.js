import React, { useState, useEffect } from 'react';

const RecipeImage = ({recipe, w=400, h=300, radius='md', modal=false}) => {
  
    const [img, setImg] = useState(null);

    useEffect(() => {
        //to prevent rerenders on scroll
        setImg(`https://picsum.photos/${w}/${h}?${Math.random()}`);
    }, [])
    

    return (
        <div>
            <img height={h} width={w} className={`rounded-${radius} relative z-0`} src={img} alt={recipe.title} />
            {!modal && <div className={`rounded-${radius} absolute inset-0 flex justify-center items-center top-1/2 z-2 bg-gradient-to-b from-transparent to-gray-900`} />}
        </div>
    )

}
export default RecipeImage;