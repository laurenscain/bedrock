import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({id, total, location}) => {
  return (
    <div className="px-4 py-1 flex flex-row justify-between text-underline">
        {id > 1 ? <Link to={`/${id-1}`} state={{ background: location }} className="underline hover:cursor-pointer">Prev</Link> : <div />}
        {id < total ? <Link to={`/${id+1}`} state={{ background: location }} className="underline hover:cursor-pointer">Next</Link> : <div />}
    </div>
  )
}

export default Navigation;