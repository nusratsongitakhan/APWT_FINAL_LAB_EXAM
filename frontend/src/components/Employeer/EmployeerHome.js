import EmployeerNavbar from "./EmployeerNavbar";
import { Link } from 'react-router-dom';
 const EmployeerHome = () => {
    return (
       <>
       
       <div>  
        <EmployeerNavbar/>
       </div>
       <h3 style={{color:"red"}}>This is Employeer Home Page</h3> 

       <Link to="/" className="btn btn-danger foat-end">Back</Link>
      </>
           
    
    )
}
export default EmployeerHome;