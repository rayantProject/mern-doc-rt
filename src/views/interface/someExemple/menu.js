import { Nav } from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';

const MobileMenu = () => 
{
    return(
        <>

                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Nav.Link href="/home">
                            <Icon.House  className=" d-md-none  d-d-lg-none " />
                            <span  className=" d-xm-none  ">Home</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
        
        </>
    )
}


export default MobileMenu