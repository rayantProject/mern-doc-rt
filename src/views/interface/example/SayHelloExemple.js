const HelloComponent = ({way, idx}) =>
{

    return(
        
        <div>
            ({idx}) way is : "{way}"
        </div>
        
    )


}




const ExempleSayHello = () => {
    const sayHello = [
        "Hi",
        "Bonjour",
        "Oayo",
        "Hello"
    ]



    return(
        <>
            <h2>How i can say Hello</h2>
            <>
                {
                    sayHello.map(( say, idx ) => (<HelloComponent key={idx}  way={say}  idx={idx} />)  )
                }
            </>
        </>
    )


}


export default ExempleSayHello ;
