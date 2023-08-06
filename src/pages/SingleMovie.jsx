import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import {} from "./Singlemovi.css"
import MoviMomp from "../components/Moviecard/MoviMomp";
const SinglMovie = () => {
    const {Singleid}= useParams();
  const[state,setState]=useState({
    isFetchet: false,
    data:[],
    error:false
  })
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${Singleid}`, {
    params: {
      api_key: "c68e1cb74b44cc46207ee74e432bc620",
    },
  })
  .then((res) => res)
  .then((data)=> setState({
    isFetchet:true,
    data:data.data,
    error:false
  }),
  )
  .catch((err)=>console.log(err))
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
//  console.log(state.data,"sssss");
   const styleBg = {backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${state.data.backdrop_path})`} 
  return (
           <div className="container mx-auto">
           {state.isFetchet?(
                <div style={styleBg} className="singlestyle">
                  <MoviMomp
                  img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.poster_path}`}
                  original_title={state.data.original_title}
                  release_date={state.data.release_date}
                  vote_average={state.data.vote_average}
                  tagline={state.data.tagline}
                  overview={state.data.overview}
                  />
              </div> 
              ):(
                <><h1>loading...</h1></>
                )
                } 
           </div> 
)
}


export default SinglMovie