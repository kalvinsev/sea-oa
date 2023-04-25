import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About (){
    return (
        <div className="about">
            <Header />
            <div className="about-text">
                <span>About Charly&apos;s gym</span>
            </div>
            <div className="about-paragraph">
                <p>
                    I have been in the fitness industry for a while my first time in a gym I was 13y and was when my passion woke up ,and I decided to put that on the right way working hard and playing harder.
                    few of those places where I got most of my experience in USA were :  Bally total fitness - LA Fitness - Gold's Gym - Rizap INC.
                    RIZAP took me to a new level definitely cuz the offer wasn't as a trainer, they put me in charge as a Director of education and since is a Japanese company it was a great opportunity to learn a new style (in Japan)  and I thought, how many people have that opportunity?
                    Also,  being fluently bi-lingual has been a great asset and has aided me in crossing over into both the American and Latin markets. 
                    When I say to the people I have 20 years experience they expect to meet someone over 50 ,well I would expect the same lol ,  then when they see me I tell them I started very young! 
                    Charly's Gym was created to give you absolutely privacy and without distractions plus putting 20 years of experience you'll reach your results in the short time possible, because your Goal is my Goal!!.
                </p>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}