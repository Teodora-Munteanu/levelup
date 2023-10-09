import './Banner.css';


const Banner = (props) =>{
    const {BannerImage} = props
    return (
        <div className='banner-div' data-aos="zoom-out">
            <img data-aos="zoom-out" className="banner-img" src={BannerImage} alt="banner" />
        </div>
        
       
    );
}

export default Banner;
