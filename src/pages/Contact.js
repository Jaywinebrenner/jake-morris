import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

    
    return (
        <section className="contact">
            <div className="container">
                <div className="card-top">
                    <h2>jakemorrisdrums@gmail.com</h2>
                    <a target="_blank" href="https://www.instagram.com/drumbschool/?hl=en">
                        <FontAwesomeIcon size="2x" icon={faInstagram} />
                    </a>
                </div>
                <div className='card'>
                    <div className='instagram-feed-wrapper'>
                        <p>Hi Jake. Do you want your IG feed here? Or anyting else? Such a lonely lil page</p>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default Contact;