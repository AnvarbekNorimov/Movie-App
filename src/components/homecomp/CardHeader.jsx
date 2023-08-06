/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {} from "./headervard.css"
const CardHeader = ({id,img,vote_average,original_title,release_date}) => {
  return (
    
    <Link to={`/Single-Home/${id}`} >
         <div className="heaeder__card w-[270px] h-[450px]  ml-[50px] mt-[20px] mb-[20px] relative shadow-inner]"  >
             <img className="w-[100%] h-[350px] rounded-t-[10px]" src={img} alt="img" />
             <div className="rounded-b-[10px] h-[100px] sans-sherif pl-2 bg-[#445566]">
              <span className="block  text-sky-200 absolute top-[330px] left-0 bg-[#445566] rounded-[5px] w-9 text-center">
                {Math.round(vote_average*10)}%
              </span>
              <span className="block textfont-[700] font-mono text-slate-200 text-xl pt-3">
                {original_title}
              </span>
              <span className="block text-sky-200 text-[15px] absolute bottom-2">{release_date}</span>
             </div>
            </div>
    </Link>
  )
}

export default CardHeader