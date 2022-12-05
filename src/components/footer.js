import { MDBFooter } from 'mdb-react-ui-kit';

const FooterComponent = () =>
{
    return(
        <MDBFooter bgColor='light' className='text-center text-lg-left mt-5' style={{position: "static" , bottom: 0}}>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://github.com/rayantProject'>
            Rayan Traore's 
          </a>
        </div>
      </MDBFooter>
    )
}

export default FooterComponent