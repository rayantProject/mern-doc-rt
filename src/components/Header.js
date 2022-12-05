import {Navbar, Container, Nav} from "react-bootstrap";


const ImportAndUseBootstrap = () =>
{

    return(
        <header>
            
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    MERN_RT_DOC
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            
        </header>
    )


}

export default ImportAndUseBootstrap;