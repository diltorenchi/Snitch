import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css'
import NavigationBar from '../components/NavigationBar';
import Carousals from '../components/Carousals';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import CarousalCenter from '../components/CarousalCenter';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';







function App() {
  


  return (
    <>
   <NavigationBar/>
   <Carousals/>

    

    

   <div className='d-flex justify-content-center align-items-center m-5'>
    <a className='buttondesign1' style={{marginRight:'20px'}} href="">NEW DROPS</a>
    <a className='buttondesign' href="">MOST TRENDING</a>
     </div>

     <Card1/>

     <div  className='d-flex justify-content-center align-items-center m-5'>

      <a className='viewbutton' href="">VIEW ALL</a>
     </div>

     <Card2/>

     <div className='d-flex justify-content-center align-items-center m-5'>
    <a className='buttondesign1' style={{marginRight:"15px"}} href="">SHIRTS</a>
    <a className='buttondesign' style={{marginRight:"10px"}} href="">T-SHIRTS</a>
    <a className='buttondesign' style={{marginRight:"10px"}} href="">JEANS</a>
    <a className='buttondesign' style={{marginRight:"10px"}} href="">TROUSERS</a>
     </div>

     <Card3/>

     <div  className='d-flex justify-content-center align-items-center m-5'>

      <a className='viewbutton' href="">VIEW ALL</a>
     </div>

     <CarousalCenter/>  

     
   <div className='d-flex justify-content-center align-items-center m-5'>
    <a className='buttondesign1' style={{marginRight:'20px'}} href="">SHORTS</a>
    <a className='buttondesign' style={{marginRight:'20px'}} href="">CO-ORDS</a>
    <a className='buttondesign'  href="">PYJAMAS</a>
     </div>

    <Card4/>

    <div  className='d-flex justify-content-center align-items-center m-5'>

<a className='viewbutton' href="">VIEW ALL</a>
</div>

   <Card5/>

   {/* <Card6/> */}

   

   <Footer/>
   
  
      
       
    </>
  )
}

export default App
