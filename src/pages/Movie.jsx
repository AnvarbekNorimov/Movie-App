import axios from "axios";
import { useEffect, useState } from "react"
import Movicard from "../components/Moviecard/Movicard";
import {} from "./movi.css"
const Movie = () => {
  const[state,setState]=useState({
    isFetchet: false,
    data:[],
    error:false
  })
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: "c68e1cb74b44cc46207ee74e432bc620",
    },
  })
  .then((res) => res)
  .then ((data) => {
    setState({
      isFetchet:true,
       data:data.data.results,
       error:false
    }) .catch(err => {
      setState({
        isFetchet:true,
        data:[],
        error:err.Messange,
      })
    })
  });
 },[]);
  return (
        <div className="bg-[#181B22]">
          <div className=" container movicard__grid grid grid-cols-4 pt-[100px] mx-auto">
            {
              state?.data?.map((movie)=>(
                <Movicard 
                id={movie.id}
                date={movie.release_date}  
                rataion={movie.vote_average} 
                key={movie.id} 
                title={movie.title} 
                img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />

              ))
            }
          </div>
    </div>
  )
}

export default Movie