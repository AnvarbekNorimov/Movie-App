/* eslint-disable react/prop-types */
import {} from "./movimomp.css"
const MoviMomp = ({img,original_title,release_date,vote_average,tagline,overview}) => {
    
  return (
    <div className="singlestyle-bg">
        <div className="text-white flex items-center w-[1000px] h-[500px] mx-auto pt-[100px] ">
         <img className=" movicard__images rounded-md" src={img} alt="sg" />
          <div className="Movicard__title sans-sherif ml-5">
               <h2 className="font-[700] font-mono text-[30px]">{original_title}</h2>
               <span className="block font-mono text-[20px]">{release_date}</span>
               <div className="vote__average-width">
                <div className="vote__average-gradient">
                    <div className="vote__average-senter ">{Math.round(vote_average* 10)}%</div>
                </div>
               </div>
               <span className="blocktext-[25px]">{tagline}</span>
               <span className="block mb-3"> <b className="font-[700] text-[15px]">Overview </b><br />
               {overview}</span>
          </div>
        </div>
    </div>
  )
}

export default MoviMomp