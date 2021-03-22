import { Card, CardDeck } from 'react-bootstrap';
import Kohli from "/home/rails/Desktop/Project/shadimubarak/frontend/src/images/kohli.jpg";
import chopra from "/home/rails/Desktop/Project/shadimubarak/frontend/src/images/chopra.png";
import singh from "/home/rails/Desktop/Project/shadimubarak/frontend/src/images/singh.jpg";
import kakkar from '/home/rails/Desktop/Project/shadimubarak/frontend/src/images/kakkar.jpeg';

const imgSize = {
    width: "340px",
    height: "300px"
}
const text = {
    fontStyle: "italic",
    color : "rgb(70, 70, 73)"
}

const TitleText = {
    color : "rgb(70, 70, 73)",
    padding : "30px 30px 30px 30px",
    fontWeight : "bold" 
}
const MatchedCouples = () => {

    return (
        <>
            <center><h2 style={TitleText}> Matched by ShadiMubarak </h2></center>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Kohli} style={imgSize} />
                    <Card.Body>
                        <Card.Title style={text}><center>Ranveer Deepika</center></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={singh} style={imgSize} />
                    <Card.Body>
                        <Card.Title style={text}><center>Ranveer Deepika</center></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chopra} style={imgSize} />
                    <Card.Body>
                        <Card.Title style={text}><center>Nick Priyanka</center></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={kakkar} style={imgSize} />
                    <Card.Body>
                        <Card.Title style={text}><center>Roshanpreet Neha</center></Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

        </>
    )

}
export default MatchedCouples;
