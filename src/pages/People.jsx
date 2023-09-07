import axios from "axios";
import { useEffect, useState } from "react"
import {} from "./movi.css"
import PeopleCard from "../components/people/PeopleCard";
const People = () => {
  const[people,setState]=useState({
    isFetchet: false,
    data:[],
    error:false
  })
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/person/popular", {
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
    }) 
    .catch(err => {
      setState({
        isFetchet:true,
        data:[],
        error:err.Messange,
      })
    })
  });
 },[]);
 console.log(people.data, "salom data")
  return  (
    <div className=" bg-[#181B22]  pt-[100px]">
        <div className="container mx-auto h-[100%] people_grid">
              {
         people?.data?.map((people)=>(
      <>
      <div className=" peopleres_card overflow-hidden  text-white bg-[#445566] rounded-[10px]  mt-[10px]">
      <PeopleCard
      id={people.id}
      img={`https://www.themoviedb.org/t/p/w235_and_h235_face/${people.profile_path}`}
      name={people.name}
      original_title={people.original_title}
      />
          {
            people?.known_for?.map((people) =>(
              <>
              <div className=" mt-[2px] pl-[5px]">
                <span className=" text-teal-400  font-sans text-[15px]">{people.original_title}</span>
              </div>
              </>
            ))
          }
      </div>
      </>
        ))
    }
        </div>
    </div>
  )
}

export default People
	// https://www.themoviedb.org/t/p/w235_and_h235_face/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg