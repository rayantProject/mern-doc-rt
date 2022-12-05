import { Container, ListGroup} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import allRoutes from "./routeEl";
// import { Link } from "react-router-dom";


const Summury = () => {




        

    return(
        <Container>
                
                <ListGroup>
                
                        
                        {allRoutes.map( (superRoute ) => (

                                <>

                                        <LinkContainer to={superRoute.path} key={superRoute.key} style={{cursor: "pointer"}} >
                                                <ListGroup.Item>
                                                        <h6><b>{superRoute.topic}</b></h6>
                                                </ListGroup.Item>
                                                
                                        </LinkContainer>
                                        {superRoute.subs.map((sub) => ( 
                                        <>
                                                <LinkContainer key={sub.key}  to={superRoute.path+sub.path} style={{cursor: "pointer"}} >
                                                        <ListGroup.Item >
                                                                <span className="ms-2">{sub.name}</span>
                                                        </ListGroup.Item>
                                                </LinkContainer> 

                                                {sub.elements.map((element) => (
                                                <>
                                                <LinkContainer key={element.key}  to={superRoute.path+sub.path+element.path} style={{cursor: "pointer"}} >
                                                        <ListGroup.Item   >
                                                                <span className="ms-4">{element.detail}</span>
                                                        </ListGroup.Item>
                                                </LinkContainer> 
                                                
                                                </>) )}
                                                
                                        
                                        </>
                                        
                                        )
                                        
                                        
                                        
                                        )}
                                </>
                        ) )}
                
                
                </ListGroup>

        </Container>
    )

}

export default Summury;