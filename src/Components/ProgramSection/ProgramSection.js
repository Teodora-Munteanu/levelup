import './ProgramSection.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from '../ProgramCard/ProgramCard';
import ImageCard1 from "../../assets/programImages/program-img2.jpg"
import ImageCard2 from "../../assets/programImages/program-img5.jpg"
import ImageCard3 from "../../assets/programImages/program-img7.jpg"
import ImageCard4 from "../../assets/programImages/program-img3.jpg"
import ImageCard5 from "../../assets/programImages/program-img6.jpg"
import ImageCard6 from "../../assets/programImages/program-img1.jpg"
const ProgramSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [exchangeRates, setExchangeRates] = useState({});
  const [cardData] = useState({
    card1: { title: "Fitness training - 12 sesions (in gym)", price: 400, image: ImageCard1 , height: "400", width: "400", description: (<><strong>12 Sessions in 1 Month:</strong> Embark on a focused fitness journey with our program comprising 12 sessions spread across a single month.<br />    <strong>Personalized Nutritional Guidance:</strong> Receive expert nutritional insights that complement your workouts, helping you make informed choices for a balanced lifestyle.    <br />    <strong>Individual Evaluation:</strong> Benefit from a 1-to-1 assessment to tailor the program to your unique needs and ensure personalized attention.    <br />    <strong>Efficient Progress Tracking:</strong> Stay motivated by tracking your progress consistently, guaranteeing you're on the right track to achieving your fitness goals.    <br />    <strong>Customized Workouts:</strong> Experience tailored workouts designed exclusively for you, maximizing the impact of each session for optimal results.  </>)},
    card2: { title: "Fitness training - 8 sesions (in gym)" ,price: 300, image: ImageCard2 , height: "400", width: "400", description: (<><strong>8 Sessions in 1 Month:</strong> Embark on a focused fitness journey with our program comprising 12 sessions spread across a single month.<br />    <strong>Personalized Nutritional Guidance:</strong> Receive expert nutritional insights that complement your workouts, helping you make informed choices for a balanced lifestyle.    <br />    <strong>Individual Evaluation:</strong> Benefit from a 1-to-1 assessment to tailor the program to your unique needs and ensure personalized attention.    <br />    <strong>Efficient Progress Tracking:</strong> Stay motivated by tracking your progress consistently, guaranteeing you're on the right track to achieving your fitness goals.    <br />    <strong>Customized Workouts:</strong> Experience tailored workouts designed exclusively for you, maximizing the impact of each session for optimal results.  </>)},
    card3: { title: "Fitness training - 12 sesions (online)", price: 300, image: ImageCard4 , height: "400", width: "400", description: (<><strong>12 Online Sessions in 1 Month:</strong> Embark on a focused fitness journey with our program comprising 12 sessions spread across a single month.<br />    <strong>Personalized Nutritional Guidance:</strong> Receive expert nutritional insights that complement your workouts, helping you make informed choices for a balanced lifestyle.    <br />    <strong>Individual Evaluation:</strong> Benefit from a 1-to-1 assessment to tailor the program to your unique needs and ensure personalized attention.    <br />    <strong>Efficient Progress Tracking:</strong> Stay motivated by tracking your progress consistently, guaranteeing you're on the right track to achieving your fitness goals.    <br />    <strong>Customized Workouts:</strong> Experience tailored workouts designed exclusively for you, maximizing the impact of each session for optimal results.  </>)},
    card4: { title: "Fitness training - 8 sesions (online)", price: 200, image: ImageCard5 , height: "400", width: "400", description: (<><strong>8 Online Sessions in 1 Month:</strong> Embark on a focused fitness journey with our program comprising 12 sessions spread across a single month.<br />    <strong>Personalized Nutritional Guidance:</strong> Receive expert nutritional insights that complement your workouts, helping you make informed choices for a balanced lifestyle.    <br />    <strong>Individual Evaluation:</strong> Benefit from a 1-to-1 assessment to tailor the program to your unique needs and ensure personalized attention.    <br />    <strong>Efficient Progress Tracking:</strong> Stay motivated by tracking your progress consistently, guaranteeing you're on the right track to achieving your fitness goals.    <br />    <strong>Customized Workouts:</strong> Experience tailored workouts designed exclusively for you, maximizing the impact of each session for optimal results.  </>)},
    card5: { title: "Wellness program - price to be determined", price: 300, image: ImageCard6 , height: "400", width: "400", description: (<><strong>Embark on a transformative wellness journey</strong> with our program designed to nurture your holistic well-being. Benefit from a personalized touch with 1-to-1 evaluations, ensuring the program aligns precisely with your needs. Empower your health with a personalized nutritional plan that seamlessly integrates into your daily routine. Additionally, our inclusive program provides carefully selected supplements, enhancing your path to vitality.      <br />      <br />      Stay motivated through progress tracking, witnessing your positive changes unfold. Enjoy a curated selection of home-based fitness exercises, empowering you to maintain your wellness regimen independently. For continuous support, <strong>I am here to guide you 24/7 via WhatsApp</strong>, ensuring you're motivated and empowered throughout your personal wellness voyage. <br/><br/> <strong>Starting with:</strong></>)},
    card6: { title: "Group training - 1 sesion (in gym / online)" ,price: 25, image: ImageCard3 , height: "400", width: "400", description: (<><p>Join our dynamic group training program, available both online and in-gym, for an engaging fitness experience. Discover the benefits of training in a group setting, where motivation thrives and camaraderie is built. My expert guidance ensures you receive effective workouts tailored to group dynamics. </p>  <p>          Whether you choose to participate virtually or in person, our program offers a structured fitness routine to cater to various preferences. Embrace the energy of group training while receiving personalized attention to align with your fitness goals.        </p> <br/>  Booking Type:        <br />        <strong>Chat with me:</strong> <Link className="btn btn-link btn-floating btn-lg text-dark m-1 mb-0" to="/contact"><i className="fa-regular fa-envelope"></i></Link>        <br />        <strong>Schedule via Calendly:</strong> <a href="https://calendly.com/teomunteanu/group-training">https://calendly.com/teomunteanu/group-training</a></>),},
    });
  

useEffect(() => {
  // Fetch the currency list and initial exchange rates
  axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JGvRvtjm5XApbjgg5Tzvq47IZXAQTufSW7oqVzsd&currencies=&base_currency=RON")
    .then((res) => {
      const currenciesList = Object.keys(res.data.data);
      setCurrencies(currenciesList);
      setSelectedCurrency('RON'); // Set the default selected currency
      setExchangeRates(res.data.data);
      console.log(currenciesList,res.data.data);
      setIsLoaded(true);
    })
    .catch((error) => {
      console.error("Error fetching currency data:", error);
    });
}, []);

useEffect(() => {
  // Fetch updated exchange rates when selected currency changes
  if (selectedCurrency) {
    const updatedAmountChangedByCard = {};

    for (const card in cardData) {
      if (exchangeRates[selectedCurrency]) {
        console.log(cardData[card].price, exchangeRates[selectedCurrency]);
        updatedAmountChangedByCard[card] = (cardData[card].price * exchangeRates[selectedCurrency]).toFixed(2);
      }
    }
  }
}, [selectedCurrency, cardData, exchangeRates]);

return (
  <div className={`main-container ${isLoaded ? 'loaded' : ''}`}>
    <p>Choose Your Preferred Currency for a Global Fitness Journey</p>
    <select
      id="currencyToChange"
      className="select-field"
      onChange={(e) => setSelectedCurrency(e.target.value)}
      value={selectedCurrency}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
    <div className='card-container'>
      {Object.keys(cardData).map((card) => (
        <ActionAreaCard
          key={card}
          image={cardData[card].image}
          title={cardData[card].title}
          description={cardData[card].description}
          price={
            selectedCurrency && exchangeRates[selectedCurrency]
              ? (cardData[card].price * exchangeRates[selectedCurrency]).toFixed(2)
              : cardData[card].price
          }
          currency={selectedCurrency}
          cardClassName={"card-class"}
        />
      ))}
    </div>
  </div>
);
};

export default ProgramSection;