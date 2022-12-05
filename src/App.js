// after add with npm or yarn react-router<i class="fa fa-diamond" aria-hidden="true"></i>
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateView from './views/interface/CreatePage';
import CreateProtectedRoute from './views/routes/CreateProtectedRoute';
import CreateRoute from './views/routes/CreateRoute';
import Home from './views/Home';
import ImportAndUseBootstrap from './views/interface/ImportAndUseBootstrap';
import StyleComponent from './views/interface/StyleComponents';
import ReactComponent from './views/title/ReactComponent';
import InterfaceComponent from './views/title/InterfaceComponent';
import RouteComponent from './views/title/RouteComponent';
import TestCompenent from './views/interface/example/test';
import FooterComponent from './components/footer';



// remarque meme si j'enleve le /route du l'url du path les import fonctionne 


function App() {
  return (
    <>

    <Header />
    
    <main>
      <BrowserRouter>
        <Routes>
          {/* for home page */}
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
      {/* React */}
      <Route path='/react' element={ <ReactComponent/>  } />
          {/* create compenent */}          
          <Route path='/react/interface/' element={ <InterfaceComponent/>  } />
          <Route path='/react/interface/test' element={ <TestCompenent/>  } />
          <Route path='/react/interface/create' element={ <CreateView />  } />
          <Route path='/react/interface/bootstrap' element={ <ImportAndUseBootstrap />  } />
          <Route path='/react/interface/style' element={ <StyleComponent />  } />

  
          {/* Routing */}
          <Route path='/react/routing' element={ <RouteComponent/> } />
          <Route path='/react/routing/create' element={ <CreateRoute />  } />
          <Route path='/react/routing/protected' element={ <CreateProtectedRoute />  } />



          {/* 404 */}
          <Route path='*' element={  "this page don't exists 404 " } />
        </Routes>
      </BrowserRouter>
    </main>

    <FooterComponent/>
    </>
  );
}

export default App;
