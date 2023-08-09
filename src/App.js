import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
 


  return (
    <>
<Navbar title ="TextUtils" Home="MyHome"/>
<div className="container my-5"> 
{/* my-3 upar se neeche aajaega */}
<TextForm  heading2="Enter your Text here"/>

</div>


</>
  );
}
export default App;
