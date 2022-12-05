import { Container } from "react-bootstrap";


const ImportAndUseBootstrap = () =>
{


    
    return(
        <Container>
        <h1>How to create component with bootstrap</h1>
        <Container>

            <Container>
            <h2>Install and import :</h2>
                <Container className="mt-3">
                    <h3>install</h3>
                    <pre className="pre-terminal">
                        $yarn add react-bootstrap
                    </pre>
                </Container>
                <Container className="mt-3" >
                <h3>import</h3>
                <p>For use we have to import the component that you want to use</p>
                    <code className="codeBlock">
                        {`import { Container } from "react-bootstrap";`} 
                    </code>
                </Container>
                <Container className="mt-3" >
                <h3>how to use  <kbd>component</kbd> </h3>
                <p>For use we have to import the component that you want to use</p>
                    <code className="codeBlock">
    {`
        const Home = () =>  
        {
            return(
                <>
                    <Container className="my-3">
                        <h1>
                            Home
                        </h1>
                        
                    </Container>
                    <Container className="my-3">
                        <h2>
                            What is MERN
                        </h2>

                        <p>
                            MERN is many technologies used to UI
                        </p>
                        <ul>
                            <li>
                                M of MERN is used to Mongo
                            </li>
                            <li>
                                E of MERN is used to Express
                            </li>
                            <li>
                                R of MERN is used to React
                            </li>
                            <li>
                                N of MERN is used to Node
                            </li>
                        </ul>

                    </Container>

                    <Container className="my-3" >
                        <h2>Summury</h2>
                        <Summury />

                    </Container>
                </>
            )
        }


        export default Home;
    `} 
                    </code>
                </Container>
            </Container>





            <Container className="mt-5" >
                <h2>Use <kbd>router-bootstrap</kbd></h2>
                <Container>
                    <h3>What is it </h3>
                    <p>
                        is used to Wrap your React Bootstrap element in a <code>{'<LinkContainer>'}</code> to make it behave like a React Router <code>{'<Link></Link>'}</code>
                    </p>
                    <Container>
                        <p className="note-alert">
                            <a href="https://reactrouter.com/en/main/components/link"><code>{'<Link></Link>'}</code></a> is  is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <code>{'<Link>'}</code> renders an accessible <code>{'<a>'}</code> element with a real href that points to the resource it's linking to
                        </p>
                    
                    </Container>

                    <Container>

                        <p>
                            If you use the <code>{'<LinkContainer></LinkContainer>'}</code> to create a link with another component
                            <code className="codeBlock">
                                {`
                                import { LinkContainer } from "react-router-bootstrap";

                                    <LinkContainer to="/" style={{ cursor: 'pointer' }}>
                                        <Navbar.Brand>
                                            <span style={{ width: 95 }}>Some text</span>
                                            <img  src="somesrc" style={{ height:20, float:'right', marginLeft:10 }}/>
                                        </Navbar.Brand>
                                    </LinkContainer>
                                `}
                            </code>
                        </p>
                    </Container>
                </Container>
            </Container>


        </Container>
    </Container>
    )
        
}


export default ImportAndUseBootstrap;