import logo1 from '/home/rails/Desktop/Project/shadimubarak/src/images/logo1.jpg';
import navstyle from '/home/rails/Desktop/Project/shadimubarak/src/component/navbar/navstyle.css';

const style = {
    backgroundColor: "#e3f2fd",
}

const Nav = ()=>{
return(
    <>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" style= {style}>
  <a class="navbar-brand" href="#"><img src={logo1} width="120" height="80" alt="" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <button class="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
      <button class="btn btn-primary my-2 my-sm-0" type="submit">Register</button>
    </form>
  </div>
</nav>
    </>
)
}

export default Nav;