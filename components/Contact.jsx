export default function Contact (){
    return (
        <div className="contact-wrapper" id="contact">
                <div className="contact">
                <div className="cta">
                    <span>Send us a message</span>
                </div>
                <form>
                    <input type="text" placeholder="What is your name?"></input>
                    <input type="text" placeholder="Your email"></input>
                    <input type="text" placeholder="Your message" color="#fff"></input>
                    <button type="submit" name="send" className="send-button">Send</button>
                </form>
            </div>
        </div>
    );
}