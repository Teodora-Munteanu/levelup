import SuccessStory from "../SuccessStory/SuccessStory"

import personalImage from '../../assets/reultsImages/personal1.jpg'
import Monika1 from '../../assets/reultsImages/Monika1.jpg'
import Monika2 from '../../assets/reultsImages/Monika2.jpg'
import Dana1 from '../../assets/reultsImages/Dana1.jpg'
import Dana2 from '../../assets/reultsImages/Dana2.jpg'
import George1 from '../../assets/reultsImages/George1.jpg'
import George2 from '../../assets/reultsImages/George2.jpg'
import Ralu1 from '../../assets/reultsImages/Ralu2.jpg'
import Ralu2 from '../../assets/reultsImages/Ralu1.jpg'
import Laura1 from '../../assets/reultsImages/Laura1.jpg'
import Laura2 from '../../assets/reultsImages/Laura2.jpg'
import Vlad1 from '../../assets/reultsImages/Vlad1.jpg'

const Results = () => {
    
    return (
        <SuccessStory itemData = {itemData}/>
    );
  }

  export default Results;

const itemData = [
    {
      img: personalImage,
      title: 'personal',
    },
    {
      img: Monika1,
      title: 'Monika1',
    },
    {
      img: Monika2,
      title: 'Monika',
    },
    {
      img: Dana1,
      title: 'Dana1',
    },
    {
      img: Dana2,
      title: 'Dana2',
    },
    {
      img: George1,
      title: 'George1',
    },
    {
      img: George2,
      title: 'George2',
    },
    {
      img: Ralu1,
      title: 'Ralu1',
    },
    {
      img: Ralu2,
      title: 'Ralu2',
    },
    {
      img: Laura1,
      title: 'Laura1',
    },
    {
      img: Laura2,
      title: 'Laura2',
    },
    {
      img: Vlad1,
      title: 'Vlad1',
    },
  ];