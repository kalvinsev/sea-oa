import Carousel from 'react-elastic-carousel';

export default function MobileServices (){
    return (
        <Carousel itemsToShow={1}>
                <div className="service-card">
                    <img src="card1.jpg" loading="lazy" /> 
                    <div className="service-card-text">
                        <h3>1:1 personal training program</h3>
                    </div>
               </div>
               <div className="service-card">
               <img src="card2.jpg" loading="lazy" /> 
                    <div className="service-card-text">
                        <h3>Lean muscle & Tone up</h3>
                    </div>
               </div>
               <div className="service-card">
               <img src="card3.jpg" loading="lazy" /> 
                    <div className="service-card-text">
                        <h3>Nutritional advice</h3>
                    </div>
               </div>
            </Carousel>
    );
}