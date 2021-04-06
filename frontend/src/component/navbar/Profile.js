import { CardDeck, Card, Breadcrumb, Button, Form, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {userProfilePicAction} from '../../redux/actions/userProfilePicAction';
import {userProfileDataAction} from '../../redux/actions/userProfileDataAction';
import {userProfileImgAction} from '../../redux/actions/userProfileImgAction';

const profile = {
    width: "465px",
    height: "300px"
}
const bgtexture = {
    backgroundColor: "rgb(73, 110, 189)",
    color: "white"
}

const Profile = () => {

    const [profiles, setProfiles] = useState([]);
    const [visible, setVisible] = useState(0);
    const { register, handleSubmit } = useForm();
    const [displayimg, setDisplayimg] = useState([]);
    const [file, setFile] = useState();
    const [liked , setLiked] = useState(0);
    
    const dispatch = useDispatch();

    const getProfileData = useSelector(state => state.getProfileData);
    // const { userInfo } = getProfileData;
    
    const getProfileInfo = getProfileData.userInfo
    console.log(getProfileInfo);

    const handleProfile = async () => {
       
        dispatch(userProfileDataAction());
         setProfiles(getProfileInfo)

        // try {
        //     const res = await axios.get('http://localhost:8000/register')
        //     setProfiles(await res.data);
        //     console.log(res.data)

        // } catch (err) {
        //     alert(err);
        // }
    }
    const getProfileImg = useSelector(state => state.getProfileImg);
    const getProfilePic = getProfileImg.userInfo
    console.log(getProfilePic);

    const handleImage = async () => {
        dispatch(userProfileImgAction());
        setDisplayimg(getProfilePic);
        // try {
        //     const res = await axios.get('http://localhost:8000/upload')
        //     setDisplayimg(await res.data);
        //     // console.log(res.data);
        // } catch (err) {
        //     alert(err);
        // }
    }   

        const loadLess = () =>{
            setVisible(visible +1)
        }

    const loadMore = () => {
         setVisible( visible +1)     
         setLiked(liked +1) 
       
    }
console.log(visible);
    useEffect(() => {
        handleProfile();
        handleImage();

    },[]);

    const userProfilePic = useSelector(state => state.userProfilePic);
    // const { userInfo } = userProfilePic;

    const upload = async (data) => {
        console.log(data.file);
        const filedata = new FormData();
        filedata.append("file", file);
        console.log(filedata);

        dispatch(userProfilePicAction(filedata));
        // try {
        //     // const uploadImg = {
        //     //     file : data.file    
        //     // }

        //     const response = await axios.post('http://localhost:8000/upload', filedata)
        //     console.log("image send");
        // } catch (err) {
        //     alert(err);
        // }
    }
    
   
    return (
        <>
            <CardDeck>
                <Card >
                    <Card.Header style={bgtexture}><h3>My Profile</h3>
                        <form onSubmit={handleSubmit(upload)} encType="multipart/form-data">
                            <input ref={register} type="file" name="file" accept=".jpg,.png,.jpeg" onChange={event => {
                                const file = event.target.files[0];
                                setFile(file)
                            }} />
                            <button type="submit">Upload</button>
                        </form>
                    </Card.Header>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Matches</Breadcrumb.Item>
                    </Breadcrumb>
                    <Card.Body>
                      {
                    profiles && profiles.slice(0,liked).map((curElem) => {
                        return (
                            <div key={curElem.id}>
                              <h3>you liked {curElem.username}'s profile</h3> 
                                 {console.log(curElem.username)}  
                                </div>
                        )
                        })
                    }    
                    
                    </Card.Body>
                    <Card.Footer>

                        <small className="text-muted">Matched once</small>
                    </Card.Footer>
                </Card>

                <Card>
                    {
                        displayimg && displayimg.slice(0,1).map((curImg) => {
                            return (
                                <div>
                                    <Card.Img variant="top" src={displayimg[visible].image} style={profile} />
                                </div>
                            )
                        })
                    }

                    <Card.Body>
                        <Card.Title>
                            <Button variant="danger" as="input" type="button" value="Dislike" onClick={loadLess}  />
                            <Button variant="success" as="input" type="button" value="Like" onClick={loadMore}/>
                        </Card.Title>
                        <Card.Text>
                        {/* {profiles && profiles[visible].dob} */}
             
                           {
                               profiles && profiles.slice(0,1).map((curElem) => {
                                    return (
                                        <div>
                                        <h3>{profiles[visible].username}</h3>
                                            <h6><b>Date of Birth :</b> {profiles[visible].dob} <br /><b>Contact:</b> {profiles[visible].mobile}
                                                <br />
                                                <b>Height:</b> {profiles[visible].height}<br /> <b>Weight:</b> {profiles[visible].weight}
                                                <br />
                                                <b>Matrial Status:</b>  {profiles[visible].matrialStatus}
                                                <br />
                                                <b>Mother Toungue:</b> {profiles[visible].motherToungue}<br />
                                                <b>Religion:</b>  {profiles[visible].religion} <br /><b>city:</b>{profiles[visible].city}
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
                            <Button type="submit" >Change</Button>
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
                        <br/>
                        <Button variant="danger" size="lg" block href="./home">
                            Logout
                            </Button>
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