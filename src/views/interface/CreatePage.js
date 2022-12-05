import { Container } from "react-bootstrap"
import ExempleSayHello from "./example/SayHelloExemple";



const CreateView = () =>
{
    return(
        <Container>
            <h1>
                Create component
            </h1>

           <Container>
           <Container >
                <code className="codeBlock">
                    {`import {Navbar, Container, Nav} from "react-bootstrap";


                        const Header = () =>
                        {

                            return(
                                <header>
                                    
                                    <Navbar bg="dark" variant="dark">
                                        <Container>
                                        <Navbar.Brand href="">MERN_RT_DOC</Navbar.Brand>
                                        <Nav className="me-auto">
                                            <Nav.Link href="/">Home</Nav.Link>
                                        </Nav>
                                        </Container>
                                    </Navbar>
                                    
                                    
                                </header>
                            )


                        }

                        export default Header;`}
                </code>
            </Container>

            <Container className="note mt-3">
                don't forget to :
                    <ul>
                        <li>
                            Put the name of <code>const</code> in uppercase for exemple here we have : Header
                        </li>
                        
                    </ul>
            </Container>
            
           </Container>

            <Container className="mt-3">
                <h2>Create property </h2>
                <Container>
                    <p>
                        We can create and use property for one vue
                    </p>

                    <code className="codeBlock">
                        {`const ExempleSayHello = () =>
                            {
                                conet sayHello = [
                                    "Hi",
                                    "Bonjour",
                                    "Oayo",
                                    "Hello"
                            
                                ]



                                return(
                                    <>
                                        <h2>How i can say Hello</h2>
                                        <div>
                                            {
                                                sayHello.map(( say, idx ) =>  (<HelloComponent key={idx}  say={say}  idx={idx} /> ))
                                            }
                                        </div>
                                    </>
                                )


                            }

                            export default HelloComponent;`}
                    </code>
                    <Container>
                        <div className="alert">

                            Each Child in the list should be have unique <code>key</code> prop :
                            React require that every components have unique <code>key</code> to identify this components

                        </div>
                    </Container>
                    <Container>
                        <p>
                            We have to create another component with <kbd>Attribut</kbd>
                        </p>
                        <code className="codeBlock">
                        {`const HelloComponent = ({say, idx}) =>
                        {

                            return(
                                <div>
                                    ({idx}) way is : "{way}"
                                </div>
                            )


                        }

                        export default HelloComponent;`}
                        </code>
                       
                    </Container>

                    <Container >
                            <h3>Result : </h3>
                            <Container className="border">
                                <ExempleSayHello/>
                            </Container>

                            
                        </Container>
                </Container>
               
            </Container>
            
            <Container>

            </Container>
        </Container>

    )
}


export default CreateView;