import { Image } from 'react-bootstrap';
import Register from '../navbar/Register';
import styles from "./mystyle.module.css";
const img = {
    width: "1500px",
    height: "400px"
}

const RegisterUi = (props) => {
return(
    <>
    <div>
    <Image src="./images/hands.jpg" style={img}></Image>
    {/* <Register className={styles.btnn} onClick={props.handleClose} type="button" class="btn my-2 my-sm-0"></Register> */}
    </div>
    </>
)

}
export default RegisterUi;