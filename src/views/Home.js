import { Container } from "react-bootstrap";
import Summury from "./Summury";



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