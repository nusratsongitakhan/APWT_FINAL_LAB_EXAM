import AdminNavbar from "./AdminNavbar";
import { Link } from 'react-router-dom';
 const AdminHome = () => {
    return (
       <>
       
       <div>  
        <AdminNavbar/>
        <h3 style={{color:"red"}}>This is Admin Home Page</h3>
       </div>

      
                                    
         <Link to="/" className="btn btn-danger foat-end">Back</Link>
     
      </>
           
    
    )
}
export default AdminHome;