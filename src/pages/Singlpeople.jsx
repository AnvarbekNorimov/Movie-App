/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react"
import {} from "./movi.css"
import { useParams } from "react-router-dom";
const SinglePeople = () => {
   const {id}= useParams();
  const[people,setState]=useState({
    isFetchet: false,
    data:[],
    error:false
  })
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/person/${id}`, {
    params: {
      api_key: "c68e1cb74b44cc46207ee74e432bc620",
    },
  })
  .then((res) => res)
  .then ((data) => {console.log(data.data);
    setState({ 
      isFetchet:true,
       data:data.data,
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
    <div className=" bg-[#445566] pt-[100px] h-[1300px] text-white">
           {
           people.isFetchet?(
                <>
                <div className="container m-auto">
                <div className=" m-[50px]  flex  gap-[30px]">
                  <div >
                  <img className=" rounded-[10px]" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${people.data.profile_path}`} alt="" />
                  <span>{people.data.title}</span>
                  <p className="text-orange-400 font-[700] mt-3">Known For</p>
                  <span>{people.data.known_for_department}</span>
                  <span>{people.data.gender===1?'Female':'Male'}</span>
                  <p className="text-orange-400 font-[700] mt-3">Birthday</p>
                  <span>{people.data.birthday}</span>
                  <p className="text-orange-400 font-[700] mt-3">Place of Birth</p>
                  <span>{people.data.place_of_birth}</span>
                  <p className="text-orange-400 font-[700] mt-3">Also Known As</p>
                  {
                    people?.data?.also_known_as.map((item) =>
                    <>
                    <p className="mt-2">
                      {item}
                    </p>
                    </>
                    )
                  }
                </div>
                <div>
                <h2 className="text-[30px] font-[800]">{people.data.name}</h2>
                <p className="text-orange-400 font-[700] text-[20px] font-arial">Biography</p>
                <p className="w-[1000px] text-[15px]">{people.data.biography}</p>
                </div>
                </div>
                </div>
                </> 
              ):(
                <><h1>loading...</h1></>
                )
                } 
    </div>
  )
}

export default SinglePeople
	// https://www.themoviedb.org/t/p/w235_and_h235_face/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg