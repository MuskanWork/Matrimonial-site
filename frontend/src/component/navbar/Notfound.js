import Notfound from '/home/rails/Desktop/Project/shadimubarak/frontend/src/images/Notfound.jpg';

const imsize={
    width: "1500px",
    height: "700px"
}



const Error = () =>{
    return(
        <>
       <img src={Notfound} style={imsize}/>
        </>
    )
}
export default Error;