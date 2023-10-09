import SuccessStory from '../Components/SuccessStory/SuccessStory'
import Aboutme1 from '../assets/about-me-images/about-me1.jpg'
import Aboutme2 from '../assets/about-me-images/about-me2.jpg'
import Aboutme3 from '../assets/about-me-images/about-me3.jpg'
import Aboutme4 from '../assets/about-me-images/about-me4.jpg'
const AboutMePage = () =>{
    return(
        <>
        <div className='about-me-container'>
            <SuccessStory className="about-me-img-list" itemData = {itemData}/>
            <div className="about-me-description">
                <p>I am Teo. And no, despite appearances, I didn't always enjoy sports. I haven't always been the best of friends with healthy eating either.

However, now sports are a part of me. Every day starts and ends with movement.
To get here, I had to understand that changes don't happen when we're 100% ready for a new phase of life. They occur when we realize that we deserve more, that we can do better, that in order to help others, we need to help ourselves - body, mind, and soul. And sports do that. Sports are discipline, perseverance, progress, and consistency.

I chose to help others first and foremost through the power of my own example. I've put into practice every piece of advice that I now pass on. I've felt, and still feel, the same post-workout fatigue, muscle soreness. I've heard my own thoughts telling me to give up, but I chose not to listen to them. I've experienced firsthand the change that I wish to inspire in the people around me.

In addition to personal results, I am inspired by the progress of every person who chooses to train with me. The journey to a healthier life can seem tiring, sprinkled with various temptations, and often in vain, as it is a long one, where changes happen slowly.

However, everything is easier with a guide, with a friend, with someone to encourage us. This is what I've set out to be for those around me: a guide towards a better state.</p>
            </div>
        </div>
            
        </>
    )
}

export default AboutMePage;

const itemData = [
    {
      img: Aboutme1,
      title: 'Teo1',
    },
    {
      img: Aboutme2,
      title: 'Teo2',
    },
    {
      img: Aboutme3,
      title: 'Teo3',
    },
    {
      img: Aboutme4,
      title: 'Teo4',
    },
  ];