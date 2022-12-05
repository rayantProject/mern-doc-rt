const allRoutes = [

    
    {
        topic: "react",
        key: 100,
        path: "/react",
        subs: [
            {
                name: "interface",
                path: "/interface",
                key: 110,
                elements: [
                        {
                            detail: "create a component",
                            key: 111,
                            path: "/create"
                        },
                        {
                            detail: <>import and use <kbd>bootstrap</kbd> and <kbd>react-router-bootstrap</kbd> </> ,
                            key: 112,
                            path: "/bootstrap"
                        },
                        {
                            detail: "how to add style in react",
                            key: 112,
                            path: "/style"
                        }
                ]
            },

            {
                name: "Routing",
                path: "/routing",
                key: 120,
                elements: [
                        {
                            detail: <>Create and use route with <kbd>react-router-dom</kbd></>,
                            key: 121,
                            path: "/create"
                        },
                        {
                            detail: "create protected route",
                            key: 122,
                            path: "/protected"
                        }
                ]
            }
        ]
    }
]



export default allRoutes