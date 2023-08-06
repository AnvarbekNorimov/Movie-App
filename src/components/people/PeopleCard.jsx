import { Link } from "react-router-dom"
/* eslint-disable react/prop-types */
const PeopleCard = ({id,img,name}) => {
  return (
    <Link to={`/single-people/${id}`}>
    <div>
     <img className="w-[100%]" src={img} alt="" />
     <h2 className=" ml-[5px] text-[24px]">{name}</h2>
    </div>
    </Link>
  )
}

export default PeopleCard