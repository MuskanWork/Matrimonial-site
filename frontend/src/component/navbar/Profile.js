import { CardDeck, Card, Breadcrumb, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useForm } from 'react-hook-form';
import Kohli from "/home/rails/Desktop/Project/shadimubarak/frontend/src/images/kohli.jpg";

const profile = {
    width: "465px",
    height: "300px"
}
const bgtexture = {
    backgroundColor : "rgb(73, 110, 189)",
    color : "white"
}

    const Profile = () => {

    const [profiles, setProfiles] = useState([]);
    const [visible , setVisible] = useState(1);
    const { register, handleSubmit } = useForm();
    const [file , setFile] = useState();

    const handleProfile= async()=>{
try {
    const res = await axios.get('http://localhost:8002/register')
    setProfiles(await res.data);

}catch(err){
    alert(err);
    }
 }

 const handleImage= async()=>{
    try {
        const res = await axios.get('http://localhost:8002/upload')
        const img = await res.data;
        console.log(img);
       const dp=(img)=>{
        return img;
        }
    
    }catch(err){
        alert(err);
        }
     }


 const loadMore = () =>{
     setVisible(visible +1)
 }

    useEffect(() => {
       handleProfile(),
       handleImage()
    },[])

    const upload= async(data)=>{
        console.log(data.file);
        const filedata = new FormData();
        filedata.append("file" , file);
        console.log(filedata);
        try{
            // const uploadImg = {
            //     file : data.file    
            // }
           
        const response = await axios.post('http://localhost:8002/upload', filedata)
        console.log(response.data)
        }catch(err){
            alert(err);
        }
    }
 
    return (
        <>
            <CardDeck>
                <Card >
                    <Card.Header style={bgtexture}><h3>My Profile</h3> 
                    <form onSubmit={handleSubmit(upload)} encType="multipart/form-data">
                    <input ref={register} type="file" name="file" accept=".jpg,.png,.jpeg" onChange={event=>{
                        const file = event.target.files[0];
                        setFile(file)
                    }} />
                    <button type="submit">Upload</button>
                    </form>
                    </Card.Header>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Matches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Messages
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card.Body>
                    
                    </Card.Body>
                    <Card.Footer>
                    
                        <small className="text-muted">Matched once</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={dp} style={profile} />
                    <Card.Body>
                        <Card.Title>
                            <Button variant="danger" as="input" type="button" value="Dislike" />
                            <Button variant="success" as="input" type="button" value="Like" onClick={loadMore}/>
                        </Card.Title>
                        <Card.Text>
                        {
                           profiles.slice(0,visible).map((curElem) => {
                            return(
                                <div key={curElem.id}>
                                <h3>{curElem.username}</h3>
                                <h6><b>Date of Birth :</b> {curElem.dob} <br/><b>Contact:</b> {curElem.mobile}
                                <br/>
                                <b>Height:</b> {curElem.height}<br/> <b>Weight:</b> {curElem.weight}
                                <br/>
                               <b>Matrial Status:</b>  {curElem.matrialStatus}
                               <br/>
                               <b>Mother Toungue:</b> {curElem.motherToungue}<br/>
                               <b>Religion:</b>  {curElem.religion} <br/><b>city:</b>{curElem.city}
                                </h6>
                                </div>
                            )
                        })
                    }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">click Like if you like profile</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header style={bgtexture}><h3>Settings</h3></Card.Header>

                    <Card.Body>
                        <Card.Title>Filters</Card.Title>
                        <Card.Text>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4} htmlFor="status">
                                    Show : 
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="select" name="status" placeholder="Please select" required>
                                        <option label="Please select"></option>
                                        <option>Mens</option>
                                        <option>Womens</option>
                                        <option>Both</option>
                                        
                                    </Form.Control>
    
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4} htmlFor="status">
                                    Martial  status : 
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="select" name="status" placeholder="Please select" required>
                                        <option label="Please select"></option>
                                        <option>Married</option>
                                        <option>Divorce</option>
                                        <option>Never married</option>
                                        <option>Awaiting divorce</option>
                                        <option>Widowed</option>
                                        <option>Anulled</option>
                                    </Form.Control>
    
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4} htmlFor="status">
                                    Religion : 
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="select" name="status" placeholder="Please select" required>
                                        <option label="Please select"></option>
                                        <option>Hindu</option>
                                        <option>Muslim</option>
                                        <option>Sikh</option>
                                        <option>Chrishtan</option>
                                        
                                    </Form.Control>
    
                                </Col>
                            </Form.Group>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Filter it out your choice</small>
                    </Card.Footer>
                </Card>

            </CardDeck>

        </>
    )

}
export default Profile;