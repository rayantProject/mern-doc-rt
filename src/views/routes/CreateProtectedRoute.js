import { Container } from "react-bootstrap";

const CreateProtectedRoute = () =>
{

        return(
            <>


             
                    <Container>
                        <h1>How to create protected route</h1>
                        <Container>
                            <Container>
                                <p>
                                    to begin we have to add a route with element this route is define to use all protected route.
                                    For this exemple, we create many route protected for <kbd>user</kbd>. So, we have create a route without path and witch
                                    have only one <code>element</code>
                                </p>
                                
                            </Container>
                            <Container>
                                <code className="codeBlock">
                                    {` 
                                        <Route element={<ProtectedRoutesComponent />}>
                                            <Route path="/user" element={<UserProfilePage />} />
                                            <Route path="/user/my-orders" element={<UserOrdersPage />} />
                                            <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
                                            <Route
                                                path="/user/order-details"
                                                element={<UserOrderDetailsPage />}
                                            />
                                        </Route>
                                    `} 
                                </code>
                            </Container>
                            <Container className="mt-3">
                                <h2>Fake authentifaction action</h2>
                                <p>
                                    For the simulation : We have create a fake authenfication.
                                    So in <code>ProtectedRoutesComponent</code>
                                </p>
                                <code className="codeBlock">
                                    {` 
                                        import { Outlet, Navigate } from "react-router-dom";
                                        const ProtectedRoutesComponent = () => {
                                          const auth = true;
                                          return auth ? <Outlet /> : <Navigate to="/login" />;
                                        };
                                        
                                        export default ProtectedRoutesComponent
                                        
                                    `} 
                                </code>
                                <h3>what <code>outlet</code> and <code>Navigation to="/login"</code> is :</h3>
                                <p>
                                    <code>outlet</code> is all protecteds routes
                                    this mean that if <code>auth</code> is true, you go to the corresponding route.
                                    if is false you go to the login  
                                </p>
                            </Container>
                        </Container>
                    </Container>
                
            </>
        )

}

export default CreateProtectedRoute;