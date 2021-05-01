import rabbit  from '../img/rabbit.jpg'
import dog  from '../img/dog.jpg'

const Home = () => {
    return (
        
        <main>
            <div className="greeting">
                <h1 className="hey">H E Y !</h1>
                <h1>There is no special reason for this greeting. It is just a HI! from me to wish you a day full of blessings!</h1>
            </div>

            <div className="hero">
                <img src={rabbit} alt="rabbit with shades" className="rabbit"/>
                <div className="circle"></div>
                <img src={dog} alt="cute dog" className="dog"/>
            </div>
        </main>
            
       
    )
}

export default Home
