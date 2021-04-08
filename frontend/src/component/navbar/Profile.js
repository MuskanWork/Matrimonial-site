import { CardDeck, Card, Breadcrumb, Button, Form, Row, Col } from 'react-bootstrap';
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {userProfilePicAction} from '../../redux/actions/userProfilePicAction';
import {userProfileDataAction} from '../../redux/actions/userProfileDataAction';
import {userProfileImgAction} from '../../redux/actions/userProfileImgAction';

const logout = {
    marginTop : "250px"
}
const profile = {
    width: "468px",
    height: "300px"
}
const bgtexture = {
    backgroundColor: "rgb(73, 110, 189)",
    color: "white"
}

const Profile = () => {
    const [visible, setVisible] = useState(0);
    const { register, handleSubmit } = useForm();
    const [file, setFile] = useState();
    const [liked , setLiked] = useState(0);
    const [filter , setFilter] = useState([]);
    const [filterPic , setFilterPic] = useState([]);
   
    const dispatch = useDispatch();

    const getProfileData = useSelector(state => state.getProfileData);
   
    const getProfileInfo = getProfileData.userInfo
    // console.log(getProfileInfo);

    const getProfileImg = useSelector(state => state.getProfileImg);
    const getProfilePic = getProfileImg.userInfo
    // console.log(getProfilePic);
//    var count=1
    const loadLess = () =>{
      setVisible(visible +1)
    //   count = count +1
    }

    const loadMore = () => {
    //    console.log(getProfileInfo[visible].username);

         setVisible( visible +1) 
       setLiked(liked +1 )
    }
   
    useEffect(() => {
      dispatch(userProfileDataAction());
    },[]);

    useEffect(() => {
      dispatch(userProfileImgAction());
    },[]);


    const userProfilePic = useSelector(state => state.userProfilePic);
   
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
    
    onchange=(data)=>{
        //  console.log(data.status);
        if(data.status == 'Mens'){
            var filterGender = getProfileInfo.filter((data)=>{
                // console.log(data.gender == 'male');
                return data.gender == 'male'
    
            })
            var filterGenderPic = getProfilePic.filter((data) =>{
                console.log(data.image.slice(29,30));
                return data.image.slice(29,30) == 'b';
            } ) 
            
        }
        if(data.status == 'Womens'){
            var filterGender = getProfileInfo.filter((data)=>{
                // console.log(data.gender == 'female');
                return data.gender == 'female'
                
            })
            var filterGenderPic = getProfilePic.filter((data) =>{
                console.log(data.image.slice(29,30));
                return data.image.slice(29,30) == 'g';
            } ) 
        }
        if(data.status == 'Both'){
            var filterGender = getProfileInfo.filter((data)=>{
                return data.gender
                
            })
            var filterGenderPic = getProfilePic.filter((data) =>{
                 return data.image
            } ) 
        }
        setFilter(filterGender)
        setFilterPic(filterGenderPic)
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
                  {/* { 
                    filter && 
                            <div>
                                <h3>you liked {filter[liked]?.username}'s profile</h3>
                      </div>
  
                    } */}
                    
                  {
                       filter && filter.slice(0,liked).map((curElem) => {
                      return (
                          <div key={curElem.id}>
                            <h3>you liked {curElem.username}'s profile</h3>
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
                    filterPic &&
                      <div>
                          <Card.Img variant="top" src={filterPic[visible]?.image} style={profile} />
                      </div>
                  }

                  <Card.Body>
                      <Card.Title>
                          <Button variant="danger" as="input" type="button" value="Dislike" onClick={loadLess}  />
                          <Button variant="success" as="input" type="button" value="Like" onClick={loadMore}/>
                      </Card.Title>
                      <Card.Text>
                      {
                          filter &&  
                            <div>
                              <h3>{filter[visible]?.username}</h3>
                               
                               <h6><b>Date of Birth :</b> {filter[visible]?.dob} <br /><b>Contact:</b> {filter[visible]?.mobile}
                                   <br />
                                   <b>Height:</b> {filter[visible]?.height}<br /> <b>Weight:</b> {filter[visible]?.weight}
                                   <br />
                                   <b>Matrial Status:</b>  {filter[visible]?.matrialStatus}
                                   <br />
                                   <b>Mother Toungue:</b> {filter[visible]?.motherToungue}<br />
                                   <b>Religion:</b>  {filter[visible]?.religion} <br /><b>city:</b>{filter[visible]?.city}
                               </h6>
                              </div>
                          
                      }
         
                         {/* {
                             getProfileInfo &&
                              <div>
                                <h3>{getProfileInfo[visible]?.username}</h3>
                               
                                  <h6><b>Date of Birth :</b> {getProfileInfo[visible]?.dob} <br /><b>Contact:</b> {getProfileInfo[visible]?.mobile}
                                      <br />
                                      <b>Height:</b> {getProfileInfo[visible]?.height}<br /> <b>Weight:</b> {getProfileInfo[visible]?.weight}
                                      <br />
                                      <b>Matrial Status:</b>  {getProfileInfo[visible]?.matrialStatus}
                                      <br />
                                      <b>Mother Toungue:</b> {getProfileInfo[visible]?.motherToungue}<br />
                                      <b>Religion:</b>  {getProfileInfo[visible]?.religion} <br /><b>city:</b>{getProfileInfo[visible]?.city}
                                  </h6>
                              </div>

                                 
                          }   */}
                         
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
                      <Form onSubmit={handleSubmit(onchange)}>
                           <Form.Group as={Row}>
                              <Form.Label column sm={4} htmlFor="status">
                                  Show :
                              </Form.Label>
                              <Col sm={7}>
                                  <Form.Control as="select" name="status" placeholder="Please select" ref={register}>
                                      <option label="Please select"></option>
                                      <option>Mens</option>
                                      <option>Womens</option>
                                      <option>Both</option>

                                  </Form.Control>
                              </Col>
                          </Form.Group> 
                          <Button type="submit" variant="warning">Filter</Button>
                          </Form>
                          {/*
                          <Form.Group as={Row}>
                              <Form.Label column sm={4} htmlFor="status">
                                  Martial  status :
                              </Form.Label>
                              <Col sm={7}>
                                  <Form.Control as="select" name="status" placeholder="Please select" ref={register}>
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
                          </Form.Group> */}
                      </Card.Text>
                      <br/>
                      <Button variant="danger" size="lg" block href="./home" style={logout}>
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