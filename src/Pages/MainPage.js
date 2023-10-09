import Banner from '../Components/Banner/Banner';
import SuccessStory from "../Components/SuccessStory/SuccessStory";
import BannerImage from '../assets/images/Banner.png'
import ActionAreaCard from '../Components/ProgramCard/ProgramCard';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import ImageCard1 from "../assets/programImages/program-img2.jpg"
import Monika1 from '../assets/reultsImages/Monika1.jpg'
import Dana1 from '../assets/reultsImages/Dana1.jpg'
import Ralu2 from '../assets/reultsImages/Ralu1.jpg'
import Laura1 from '../assets/reultsImages/Laura1.jpg'



const MainPage = () =>{
  const [cardData] = useState({
    card1: {
      title: "Transform Your Fitness Journey - In Gym or online",
      price: 'see more',
      image: ImageCard1,
      height: "400px", 
      width: "1000px",
      description: (
        <>
          <strong>Transform Your Fitness Journey:</strong> Join my 12-session gym program for a month of focused fitness and wellness.
          <br />
          <strong>Personalized Workouts:</strong> Experience tailored workouts designed exclusively for you, ensuring maximum results.
          <br />
          <strong>Nutritional Guidance:</strong> Receive expert nutritional insights to complement your workouts and make informed choices for a balanced lifestyle.
          <br />
          <strong>Individual Assessment:</strong> Benefit from a 1-to-1 evaluation to customize the program to your unique needs and ensure personalized attention.
          <br />
          <strong>Track Your Progress:</strong> Stay motivated with efficient progress tracking, ensuring you're on the right path to achieving your fitness goals.
        </>
      )
    }
    });   
    return(
        <>
            <Banner BannerImage={BannerImage}/> 
            
            <div className='main-page-section'>
                <h2>Nice to meet you</h2>
               <p>My name is Teodora and I am a Fitness and Wellness trianer</p>
               <p>I chose to help others first and foremost through the power of my own example. I've put into practice every piece of advice that I now pass on. I've felt, and still feel, the same post-workout fatigue, muscle soreness. I've heard my own thoughts telling me to give up, but I chose not to listen to them. I've experienced firsthand the change that I wish to inspire in the people around me.</p>
               <Link className="link-to-other-page" to="/about">Find more about me</Link>
            </div>
            <div className='main-page-section'>
                <h2>Results</h2>
                <SuccessStory itemData = {itemData}/>
               <Link className="link-to-other-page" to="/results">See more</Link>
            </div>
            <div className='main-page-section'>
                <h2>Plans</h2>
                <div className='card-container-main-page'>
                  {Object.keys(cardData).map((card) => (
                    <ActionAreaCard
                      key={card}
                      image={cardData[card].image}
                      title={cardData[card].title}
                      description={cardData[card].description}
                      price={<Link className="link-to-other-page" to="/programs">See more</Link>
                      }
                      cardClassName={"card-class"}
                    />
                  ))}
                </div>
               
            </div>
            

        </>
    )
}

export default MainPage;
const itemData = [
    {
      img: Monika1,
      title: 'Monika1',
    },
    {
      img: Dana1,
      title: 'Dana1',
    },
    {
      img: Ralu2,
      title: 'Ralu2',
    },
    {
      img: Laura1,
      title: 'Laura1',
    },
  ];