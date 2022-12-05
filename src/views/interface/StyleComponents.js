import { Container } from "react-bootstrap";



const BlueColorText = () =>
{
    return(
        <>
            <div style={{color: "blue"}}>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, animi eveniet? Ab alias corrupti harum! Fugiat sit magni quam, repudiandae illo voluptatem alias. Quia in aspernatur obcaecati natus sequi! Tempora.
                </p>
                
            </div>
        </>
    )
}


const StyleComponent = () => 
{
    return(
        <>
        
        <Container>
            <h1>
                use style 
            </h1>
            <Container>
                <h2>Use directly style property</h2>

                <Container>
                <Container className="mt-3">
                <code className="codeBlock">

                    {`
                    const Template = () => 
                    {
                        return(
                            <>
                                <ComposantOrHTMLElement style={{style_property: "value"}}>

                                    ...
                                    
                                </div>
                            </>
                        )
                    }
                    
                    `}

                </code>
                </Container>



                
                <Container className="mt-3">
                    <h6>Exemple :</h6>
                    <code className="codeBlock">
                        {`
                        //in your component file
                        const TestComponent = () =>
                        {

                            return(
                                <>
                                    <div style={{color: "blue"}}>

                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                            Eaque, animi eveniet? Ab alias corrupti harum! Fugiat sit magni quam, repudiandae illo voluptatem alias.
                                            Quia in aspernatur obcaecati natus sequi! Tempora.
                                        </p>
                                        
                                    </div>
                                </>
                            )
                        }

                        export default TestComponent
                        
                        `}
                    </code>
                </Container>
                <Container className="mt-3">
                    <h6>Resutat :</h6>
                    <Container className="border ">
                        <BlueColorText/>
                    </Container>
                </Container>
                </Container >

                <Container className="mt-5">
                <h2>add scss or css style</h2>
                <Container>
                    <Container>
                        <code className="codeBlock">
                            {`
                                // in scss or css
                            
                                .your-class-selector
                                {
                                    property: value
                                }

                                #your-id-selector
                                {
                                    property: value
                                }
                            `}
                        </code>
                    </Container>
                    <Container className="mt-3" >
                        <code className="codeBlock">
                            {`
                                // in your component 

                                <ComposantOrHTMLElement id="your-id-selector" className={"your-class-selector"} >

                                    ...
                                    
                                </div>
                            `}
                        </code>
                    </Container>



                    <Container className="mt-3" >
                        <code className="note-alert">
                            Instead  of <code>class</code> witch we use in vanilla <code>html</code> balise
                            we use <code>className</code>
                        </code>
                    </Container>


                </Container>
                </Container>
            </Container>

        </Container>


        
        </>
    )
}


export default StyleComponent