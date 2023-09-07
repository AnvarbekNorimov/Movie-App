const HomeHeder = () => {
  
    const homebg ={backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg)`}
  return (
    <div className="pt-[78px] bg-[#181B22]">
            <div  style={homebg} className="  heder__section w-[100%] h-[400px]">
              <div className="bgcolor p-20">
              <h1 className="textfont-[700] font-mono text-[50px] text-sky-200">
                Welcome.
              </h1>
              <p className="textfont-[700] font-mono text-sky-200 mt-[10px]">
                Millions of movies, TV shows and people to discover. Explore now.
              </p>
              <form className="mt-[20px] relative" >
                <input className=" header__input outline-none w-[1000px] h-10 rounded-lg p-1 placeholder:text-slate-500 text-black/50 text-base" type="search" placeholder="Search for a movie,tv show,person...." />
                <button className=" header__button ml-10px text-[15px] w-[100px] bg-blue-500 h-10 rounded-lg ml-10">search</button>
              </form>
              </div>
            </div> 
    </div>
  )
}

export default HomeHeder