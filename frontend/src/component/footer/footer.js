import { FaFacebook, FaEnvelope, FaGoogle , FaInstagram } from 'react-icons/fa'
// import '/home/rails/Desktop/Project/shadimubarak/src/component/footer/footer.css'
// import {SocialMediaIconsReact} from 'social-media-icons-react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faYoutube , FaFacbooke , }
import Jumbotron from 'react-bootstrap/Jumbotron'

const font = {
    fontStyle: "italic",
    fontSize: "20px"
}
const social = {
    color: "whitesmoke"
}

const Foot = () => {
    return (
        <footer>

            <Jumbotron style = {{backgroundColor : "rgb(99, 120, 146)", color : "whitesmoke"}}  >
                <center> <h4 class="display-4" id="About">About shadimubarak.com</h4></center>
                <br />
                <p class="lead" style = {font}>
                    shadimubarak.com is one of India’s leading matrimonial websites that has helped lakhs of members find their perfect life partner.

                    We believe choosing a life partner is a big and important decision, and hence work towards giving a simple and secure matchmaking experience for you and your family. Each profile registered with us goes through a manual screening process before going live on site; we provide superior privacy controls for Free; and also verify contact information of members.

                    You can register for Free and search according to your specific criteria on age, height, community, profession, income, location and much more- on your computer, tablet or mobile. Regular custom mails and notifications make the process easier and take you closer to your shadimubarak!</p>
                <hr class="my-4" />
                <div class="lead" style={{social}}>
                   
                <a href="https://www.facebook.com/"><FaFacebook size="30px"/></a>
                <a href="https://www.google.com/gmail/"><FaEnvelope size="30px"/></a>
                <a href="https://www.google.com/"><FaGoogle size="30px"/></a>
                <a href="https://www.instagram.com/?hl=en"><FaInstagram size="30px"/></a>
                </div>
                <div class="lead lead-a">
                <a> <center>Copyright © 2014 shadimubarak Internet Services</center></a>
                </div>
                
               
                
                {/* <SocialMediaIconsReact icon="twitter" url="https://twitter.com"/> */}

            </Jumbotron>
        </footer>
    )
}
export default Foot;