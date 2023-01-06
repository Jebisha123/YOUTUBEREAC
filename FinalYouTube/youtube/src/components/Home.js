import "./Home.css"
import React,{useState,useEffect} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Link ,useParams } from "react-router-dom"

function Home()
{
    const youtubeList=[
        {
          title:"Titanic",
          poster:"http",
          img:"./Titanic.jpeg",
          type:"Film",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"StarWars",
          poster:"http",
          img:"./starwar.jpeg",
          type:"Film",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
      
        {
          title:"MAMA",
          poster:"http",
          img:"./MaMa.jpg",
          type:"Film",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"BlackForest",
          poster:"http",
          img:"./Black_Forest.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Bonda",
          poster:"http",
          img:"./Bonda.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Paneer",
          poster:"http",
          img:"./Panneer_Butter.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"BondPizzaa",
          poster:"http",
          img:"./Pizza.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
      
        

      
        {
          title:"American Snipper",
          poster:"http",
          img:"./American.jpg",
          type:"Film",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Time Rush",
          poster:"http",
          img:"./TimeRush.jpg",
          type:"Cartoon",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Chathuram",
          poster:"http",
          img:"./Chathuram.avif",
          type:"Film",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Excaliber",
          poster:"http",
          img:"./Excaliber.jpg",
          type:"Cartoon",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Peppa Pig",
          poster:"http",
          img:"./peppapig.jpg",
          type:"Cartoon",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
        },
        {
          title:"Mickey Mouse",
          poster:"http",
          img:"./Disney.jpg",
          type:"Cartoon",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"OOgy the Cockroach",
          poster:"http",
          img:"./OOgy.jpg",
          type:"Cartoon",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"Arcane",
          poster:"http",
          img:"./Arcane.jpg",
          type:"Cartoon",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"Mr.Bean",
          poster:"http",
          img:"./Bean.jpg",
          type:"Comedy",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"Bhai",
          poster:"http",
          img:"./Bhai.jpg",
          type:"Comedy",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"Harry Porter",
          poster:"http",
          img:"./HarryPorter.jpg",
          type:"Comedy",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"Good News",
          poster:"http",
          img:"./GoodNews.jpg",
          type:"Comedy",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
        {
          title:"Hatty Boy",
          poster:"http",
          img:"./HattyBoy.jpg",
          type:"Comedy",
          videoUrl:"https://www.youtube.com/embed/4qgt-QqHNmA"
          
        },
      
        
      ]
      const[color,setColor] = useState("grey")
      const click = () => {
        setColor("black")
      }
      // useEffect(()=>{document.getElementsByClassName("youtubebtn").color=color},[color])
      const[youtube,setYoutube]=useState(youtubeList)
      const youTubeItems =(type)=>{
        let newyoutubeitems=youtubeList.filter((tubeitem)=>tubeitem.type==type)
        setYoutube(newyoutubeitems)
      
       
        }

      const allYoutube =() =>{
        setYoutube(youtubeList)
      }
      // const searchvalue =document.getElementById("searchvalue").textContent;
      // console.log(searchvalue)
      // const searchYoutube =() =>{
      //   setYoutube(youtubeList)
      // }

      
    
    return(
        <>
<div className="header">
 <div className="section1">
    <div className="hamButton"><img className="hamimage" src="./hamburger.jpg"></img></div>
   
<div className="logo"><img className="logoimage" src="./logo.jpg"></img></div>
    </div>
<div className="section2">
    

    <input type="text" id="searchvalue" className="SearchBox" placeholder="Search"></input>
    <button className="Searchbtn" ><i class="fa fa-search"></i></button>
    
    
</div>
<div className="microphoneimage">
    <i class="fa fa-microphone"></i>
</div>
<div>
</div>
<div className="section3">
<div className="PlusLogo"><i class="fa fa-plus"></i></div>
<div className="Notification"><i class="fa fa-bell"></i></div>
<div className="ProfileImage"><i class="fa fa-user" aria-hidden="true"></i></div>
</div>


</div>
<div className="subheader">


    <diV  className="insidesubheader">
    
        <div> <i class="fa fa-home" aria-hidden="true"></i>{"   "}Home</div>
        <br/>
    <div ><img src="./shorts.png" className="shortsimage"></img>{"  "}Shorts</div>
    <br/>
    <div><img src="./subscriptionimage.png" className="shortsimage"></img>{"  "}Subscriptions</div>
    
    <diV  className="insidesubheader1">
    
        <div> <img src="./library.png" className="shortsimage"></img>{"  "}Library</div>
        <br/>
    <div ><img src="./history.png" className="shortsimage"></img>{"  "}History</div>
    <br/>
    <div><img src="./yourvideos.jpg" className="shortsimage"></img>{"  "}Your Videos</div>
    <br/>
    <div><img src="./watchlater.png" className="shortsimage"></img>{"  "}Waatch Later</div>
    <br/>
    <div ><img src="./likedvideos.png" className="shortsimage"></img>{"  "}Liked Videos</div>
    <br/>
    <div><img src="./subscriptionimage.png" className="shortsimage"></img>{"  "}Show Later</div>
    
    
    </diV>
    <diV  className="insidesubheader1">
    
        <div> <i class="fa fa-home" aria-hidden="true"></i>{"  "}Trending</div>
      <br/>
    <div ><img src="./shorts.png" className="shortsimage"></img>Music</div>
    <br/>
    <div><img src="./subscriptionimage.png" className="shortsimage"></img>Movies</div>
    <br/>
    <div> <i class="fa fa-home" aria-hidden="true"></i>Explore</div>
    <br/>
    <div ><img src="./shorts.png" className="shortsimage"></img>Live</div>
    <br/>
    <div><img src="./subscriptionimage.png" className="shortsimage"></img>Connect</div>
    
    
    </diV>
    </diV>
    
    
</div>
    
<div className="subsection2" >

    <div className="youtubebtn"  onClick={allYoutube} onMouseOver= {click}>All</div>
    <div className="youtubebtn" onClick={()=>youTubeItems("Film")}>Movies</div>
    <div className="youtubebtn" onClick={()=>youTubeItems("Cartoon")}>Cartoon</div>
    <div className="youtubebtn" onClick={()=>youTubeItems("Cooking")}>Cooking</div>
    <div className="youtubebtn" onClick={()=>youTubeItems("Comedy")}>Comedy</div>

</div >
<div className="container">



{
            youtube.map((youtubeitem)=>{
                return(
                    <> 
                        
                 {/* <Link to={`Video/${youtubeitem.img}`}> */}
                 <Link to={`Video/${youtubeitem.title}`}>
      <div >
   
           <img className="image" src={youtubeitem.img} alt=""/>
           { <h4 className="title">{youtubeitem.title}</h4> }
           
        </div>
        </Link>
        
                           
                    </>
                )
            })
        } 
    

</div>
        </>
    )
}
export default Home;


