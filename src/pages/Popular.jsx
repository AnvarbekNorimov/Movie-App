import axios from "axios";
import { useEffect, useState } from "react";
import {} from "../style/home.css"
import CardHeader from "../components/homecomp/CardHeader";
// import CardHeader from "../components/homecomp/CardHeader";
const Popular = () => {
  const[state,setState]=useState({
    isFetchet: false,
    data:[],
    error:false
  })
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/popular`, {
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
    <div className="">
        <h2 className="bg-[#181B22] text-amber-600  p-[25px] font-[900] text-[20px]">Whats Popular</h2>
     <div className="bg-[#181B22] flex   overflow-y-hidden">
             {
        state?.data?.results?.map((Home)=>(
          <>
          <CardHeader 
          id={Home.id}
          img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${Home.poster_path}`}
          vote_average={Home.vote_average}
          original_title={Home.name}
          release_date={Home.first_air_date}
         />
         </>
        ))
      }
    </div>
    </div>
  )
}
}
export default Popular