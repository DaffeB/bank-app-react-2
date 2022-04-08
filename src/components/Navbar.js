import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    D'B
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/createaccount">Krijimi i llogarise</Nav.Link>
                    <Nav.Link as={Link} to="/deposit">Depozit</Nav.Link>
                    <Nav.Link as={Link} to="/withdraw">Terheqje</Nav.Link>
                    <Nav.Link as={Link} to="/alldata">Te dhenat</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar