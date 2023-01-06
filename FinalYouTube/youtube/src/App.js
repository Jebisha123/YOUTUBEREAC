import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Video  from './components/Video';



function App() {
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
  return (
  // <Video></Video>
  
  <BrowserRouter>
  <Routes>
  
    <Route path='/' element={<Home/>}></Route>
     {/* <Route path='/Video/:img' element={<Video/>}></Route>  */}
     <Route path='/Video/:title' element={<Video/>}></Route> 
 
  </Routes>
  </BrowserRouter>
  );
}

export default App;
