import {Link,Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
        <>
        <Navbar bg="light" data-bs-theme="light" style={{position:"sticky",top:"0%" ,width:"100%"}}>
        <Container>
          <Navbar.Brand href="#home"><img style={{width:"110px"}} src="https://assets.ucleanlaundry.com/assets/images/logo.png"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="service">Service</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr size="1" color="black"/>
     <Outlet/>
        </>
    )
}
export default Layout;