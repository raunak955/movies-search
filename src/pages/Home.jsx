import React from 'react'
import MoviesCard from '../component/MoviesCard'
import { useState } from 'react'
const Home = () => {

  const [search, setSearch] = useState("")

  const movies = [
    {
    id : 1,
    title : "Avengers",
    rating : "8.0",
    image : "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
    id : 2,
    title :"Batman",
    rating :"9.0",
    image : "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
    id : 3,
    title :"Spider-man",
    rating :"10.0",
    image : "https://images.unsplash.com/photo-1642456074142-92f75cb84533?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

  ];

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='px-6'>
      <h1 className='text-3xl font-bold mb-6'>Search Movies</h1>

      <div>
        <input
         type="text"
         value={search}
         onChange={(e) =>(
          setSearch(e.target.value)
         )}
         placeholder='Search movies..'
         className='border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md'
         />

         <button className='bg-gray-900 text-white px-5 py-2 rounded-lg'>Search</button>

        <div className='flex gap-5 mt-10'>
          {filterMovies.map((movie) =>(
          <MoviesCard
          key={movie.id} 
          title={movie.title}
          rating={movie.rating}
          image={movie.image
          }
          />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
