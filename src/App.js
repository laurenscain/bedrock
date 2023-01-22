import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import RecipeGrid from './components/grid/RecipeGrid';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RecipeCard from './components/card/RecipeCard';
import ModalCard from './components/card/ModalCard';

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  const perPage = 21;
  const [items, setItems] = useState([]);
  const [loading, setLoading]  = useState(false);
  const [error, setError] = useState(null);
  const hasMore = useRef(true);
  const page = useRef(1);

  useEffect(() => {
    fetchData(page.current);
  }, [page.current])

  const fetchData = (page) => {
    setLoading(true);

    fetch(`http://localhost:3004/recipes?_page=${page}&_limit=${perPage}`)
    .then(res => res.json())
    .then(
      (result) => {
        setItems([...items, ...result]);
        if(result.length < perPage) {
          hasMore.current = false;
        } 
        setLoading(false);
      },
      (error) => {
        setError(error);
        hasMore.current = false;
      }
    )
  }
    
  const onScroll = () => {
    if(!hasMore.current) return;

    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
  
    if (scrollTop + clientHeight >= scrollHeight-200) {
      page.current = page.current + 1;
      setLoading(true);
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <div className="App">
         <Routes location={background || location}>
          <Route exact path="/" element={<RecipeGrid items={items} loading={loading} />}>
            <Route path="/:id" element={<ModalCard total={items.length} location={location} />} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path="/:id" element={<ModalCard total={items.length} location={location} />} />
          </Routes>
        )}
        </div>
  )
}
