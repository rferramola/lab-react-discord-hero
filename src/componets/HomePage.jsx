import image from '../assets/discord-background.png';
import './HomePage.css'

function HomePage(){
return(
    <section className='home-page-section'>
        <div>
        <h1 className="home-page-title">IMAGINE A PLACE...</h1>
        <p className="home-page-paragraph"> ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.</p>
          <button className="mac-button">Download for Mac</button>
          </div>
        <button className="discord-button"> Open Discord in your browser</button>
        <div>
            <img className='image' src={image} ></img>
        </div>
    </section>
)
}

export default HomePage;