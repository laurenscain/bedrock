import appetizers from '../assets/appetizers.png';
import snacks from '../assets/snacks.png';
import breads from '../assets/breads.png';
import cakes from '../assets/cakes.png';
import cereal from '../assets/cereal.png';

const CATEGORIES = [
    {"id": 0, "categoryName": "Appetizers"},
    {"id": 1, "categoryName": "Snacks"},
    {"id": 2, "categoryName": "Breads"},
    {"id": 3, "categoryName": "Brunch"},
    {"id": 4, "categoryName": "Cakes"},
    {"id": 5, "categoryName": "Cereal"}
];

export const lookupCategories = (cats) => {
    if(!cats) return [];
    return CATEGORIES.filter(c => cats.includes(c.id));
}

const images = {
    appetizers,
    snacks,
    breads,
    cakes,
    cereal
};

function getImageByKey(key) {
  return images[key.toLowerCase()]
}

export default getImageByKey