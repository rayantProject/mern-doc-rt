import { Container } from "react-bootstrap"

const CreateRoute = () => 
{
    return(
        <>
            <Container>
                <h1>How to create route and protected route : </h1>
                <Container>
                    <Container>
                    <p>
                        for begin we have to install <kbd>react-router-dom</kbd> packages with <kbd>yarn</kbd> or <kbd>NPM</kbd>.
                        use :
                    </p>

                    <Container>
                        <pre className="pre-terminal">
                            $yarn add react-router-dom
                        </pre>
                    </Container>
                    <Container>
                        <pre className="pre-terminal">
                            $npm install react-router-dom
                        </pre>
                    </Container>

                    </Container>
                    <Container className="mt-3">
                        
                        <h2>The necessary import</h2>


                        <p>
                            For the next we have to import necessary element in App :
                        </p>
                        <Container>
                            <code className="codeBlock">
                                {`import { BrowserRouter, Routes, Route } from 'react-router-dom';`} 
                            </code>
                        </Container>


                    
                    </Container>
                
                    <Container className="mt-3">
                        <h2>Exemple of use</h2>
                        <p>
                            Always in App we use the component <code>BrowserRouter</code>, <code>Routes</code> and <code>Route</code>
                        </p>
                        <Container>
                        <code className="codeBlock">
                            {`

                                // after add with npm or yarn react-router
                                import { BrowserRouter, Routes, Route } from 'react-router-dom';
                                import Home from './views/oneView';


                                function App() {
                                return (
                                    <>

                                    
                                    <main>
                                    <BrowserRouter>
                                        <Routes>
                                        {/* for home page */}

                                        <Route path='/oneViews' element={<oneView/>} />   
                                                                        
                                        </Routes>
                                    </BrowserRouter>
                                    </main>
                                    
                                    </>
                                );
                                }

                                export default App;

                            `}
                        </code>
                    </Container>
                    </Container>

                    <Container className="mt-3">        

                    <h3>How to use <code>Route</code></h3>


                        <p>Route element is use to create path and associate it to component </p>
                        <ul>
                                <li>
                                    <code>path=""</code> is used to define the url path
                                </li>
                                <li>
                                    <code>element=""</code> the redirection
                                </li>
                        </ul>
                        
                        <Container>
                        <code className="codeBlock">
                            {`<Route path='/oneViews' element={<oneView/>} />   `}
                        </code>
                    </Container>
                    </Container>
                </Container>
            </Container>
        </>
    )
}






export default CreateRoute;