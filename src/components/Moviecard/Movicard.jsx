/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {} from "./Movicard.css"
const Movicard = ({ id,rataion,date,title,img}) => {
  return (
    <Link to={`/single-movie/${id}`} >
       <div className="movicard"> 
       <img className="movicard__img" src={img} alt="" />
       <div className="movicard__subtitle">
        <div className="movicard__subtitle-rataion">
          <div className="movicard__subtitle-rataion-conic">
            <span className="flex movicard__subtitle-rataion-center ">{Math.round(rataion*10)}%</span>
          </div>
        </div>
        <h2 className="movicard__subtitle-title mt-[10px]">{title}</h2>
        <span className="movicard__subtitle-date">{date}</span>
       </div>
      </div>
    </Link>
  );
}

export default Movicard