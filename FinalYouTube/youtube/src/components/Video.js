import { Link ,useParams} from "react-router-dom";
import "./Home.css"



function Video()
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
          videoUrl:"https://www.youtube.com/embed/8Qn_spdM5Zg" 
        },
        {
          title:"MAMA",
          poster:"http",
          img:"./MaMa.jpg",
          type:"Film",
          videoUrl:"https://www.youtube.com/embed/ "
        },
        {
          title:"BlackForest",
          poster:"http",
          img:"./Black_Forest.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/embed/7RIJnkTJVa0"
        },
        {
          title:"Bonda",
          poster:"http",
          img:"./Bonda.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/embed/NGwzOXaybKA" 
            },
        {
          title:"Paneer",
          poster:"http",
          img:"./Panneer_Butter.jpg",
          type:"Cooking",
          videoUrl:"https://youtu.be/bUounn_Bmy4"
        },
        {
          title:"BondPizzaa",
          poster:"http",
          img:"./Pizza.jpg",
          type:"Cooking",
          videoUrl:"https://www.youtube.com/watch?v=VFBZRZ9lTsM&t=149s"
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
    
     const {title} = useParams()
    
   
  // const valuesVideo =useParams();
  // console.log(valuesVideo)
  const videoOne = youtubeList.find((itemsvideo)=>itemsvideo.title==title)
    
    const{img,type,videoUrl}=videoOne
    console.log(videoUrl)
    // const src ="https://www.youtube.com/embed/4qgt-QqHNmA"
    const src ={videoUrl}
    return(
        <>
        
<div className="header">
    <div className="section1">
        
    <div className="hamButton"><img className="hamimage" src="../hamburger.jpg"></img></div>
    <Link to="/">
<div className="logo"><img className="logoimage" src="../logo.jpg"></img></div></Link>
    </div>
<div className="section2">
    

    <input type="text" className="SearchBox" placeholder="Search"></input>
    <button className="Searchbtn"><i class="fa fa-search"></i></button>
    
    
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
<div className="container">
<div >
   {/* <img  src={`../${title}`} alt=""/> */}

    <iframe width="800" height="430" src={videoUrl} 
     frameborder="0" allow=" autoplay;"
      allowfullscreen></iframe>;

   
   
</div>
</div>

        </>
    )
}
export default Video;


