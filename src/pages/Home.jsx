import axios from "axios";
import { useEffect, useState } from "react";
import {} from "../style/home.css"
import HomeHeder from "../components/homecomp/HomeHeder";
import CardHeader from "../components/homecomp/CardHeader";
import Popular from "./popular";

const Home = () => {
  const[state,setState]=useState({
    isFetchet: false,
    data:[],
    error:false
  })
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/day`, {
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
},[]);
  console.log(state.data.results,"sssss");

  {
  return (
    <div className="bg-[#181B22]">
          <div className="container m-auto pt-[px] bg-[#181B22]">
      <HomeHeder/>
        <p className="bg-[#181B22] text-amber-600  p-[25px] font-[900] text-[20px]">Trending</p>
      <div className="">
                <div className="bg-[#181B22] flex   overflow-y-hidden">
             {
        state?.data?.results?.map((Home)=>(
          <>
          <CardHeader 
          id={Home.id}
          img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${Home.poster_path}`}
          vote_average={Home.vote_average}
          original_title={Home.original_title}
          release_date={Home.release_date}
         />

         </>
        ))
      }
       </div>
       <Popular/>
      </div>
    </div>
    </div>
  )
}
}
export default Home