import AdminNavbar from "./AdminNavbar";
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import axios from 'axios';
import RegisterEmployee from "./RegisterEmployee";
import { useHistory } from "react-router-dom";
 const EmployeersInfo = () => {
   const [employeers, setEmployeersInfo] = useState([]);
   const [search, setSearch] = useState({employeerSearch: '' });
   const searchChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setSearch({  ...search,[name]: value})
      console.log(name, value);
      
  }

  const onSearch = async (e) => {
      
   e.preventDefault();
   
   
  
   const employeerSearch =search.employeerSearch.toString();
   
 
   const sendSearch={"employeerSearch": employeerSearch};
   console.log(sendSearch);
   // const response = await axios.post("http://localhost:8000/api/user/report", { event_id: event_id,user_id: user_id,user_name: user_name,details: details,status : status});
   
   
   
  
       const response = await axios.post("http://localhost:8000/api/admin/EmployeerInfoSearch",sendSearch );
       console.log(response)
       if(response.data.status === 19){

         setEmployeersInfo(response.data.employeers);
         
         history.push("/admin/employeersInformation"); 
            
       }
       else{
           alert("Something went wrong!");

          
       }
   

}



   const history = useHistory();
    const url = 'http://localhost:8000/api/admin/employeersInformation';
   
    const getData = async ()=>{
      const response = await axios.get(url); 
      console.log(response.data.employeers);
      if (response.data.status === 19) {
         
         setEmployeersInfo(response.data.employeers);
           
      }
      else{
          alert("Data not found");
      }
    
  }

  useEffect(()=>{
      getData();
  }, [])

    const deleting = async (e,id) => {
  
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Processing";
            const response = await axios.delete(`http://localhost:8000/api/admin/DeleteEmployeer/${id}`);
            // history.push('http://localhost:8000/api/user/followedOrganization'); 
   
            if (response.data.status === 19){
                thidClickedFunda.closest("tr").remove();
                alert(response.data.msg)
            }
            else{

                alert("Can't Delete")
            }
         }
    const editing = async (e,id) => {
  
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Processing";
       history.push(`/admin/edit/info/${id}`)
         }

    return (
       <>
       
       <div>  
        <AdminNavbar/>
       </div>
            <div>

            <div className="app-content content">
            <div className="content-overlay"></div>
               <div className="content-wrapper">
                     <div className="content-body">

                        <section id="widgets-Statistics">

                           <div className="row">
                                 <div className="col-11 mt-1 mb-2">
                                    <h4>Employeers Information</h4>
                                    
                                 </div>
                                 <div className="col-1 mt-1 mb-2">
                                    
                                    <Link to="/admin/home" className="btn btn-danger foat-end">Back</Link>
                                 </div>

                                 <hr/>
                           </div>
                           <form onSubmit={onSearch} >
                              {/* @csrf */}
                              <div className="row">
                                    <div className="col-10 mt-1 mb-2">
                                    <input type="text" className="form-control"  name="employeerSearch" value={search.employeerSearch} onChange={searchChange} placeholder="Search event here..."/>
                                    </div>

                                    <div className="col-2 mt-1 mb-2">
                                    <button type="submit" className="btn btn-outline-danger">Search</button>
                                    </div>
                              </div>
                           </form>
          
                           <table className="table table-striped" >
                                 <thead>
                                    <tr>
                                       <th>Employer Name</th>
                                       <th>Company Name</th>
                                       <th>Contact No</th>
                                       <th>User Name</th>
                                       <th>Password</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                    <tbody>

                                          {
                                             employeers.map((employeer)=>{
                                             return (
                                             <tr key={employeer.id}>
                                                <td>{employeer.employeerName}</td>
                                                <td>{employeer.companyName}</td>
                                                <td>{employeer.contactNo}</td>                 
                                                <td>{employeer.userName}</td>                 
                                                <td>{employeer.password}</td>                 
                                                <td>
                                                   {/* <Link to="/admin/home" className="btn btn-primary foat-end">Edit</Link> */}
                                                   <button type="button" onClick={(e)=>editing(e,employeer.id)} className="btn btn-success btn-sm foat-end">Edit</button>
                                                   <a>  </a>
                                                   <button type="button" onClick={(e)=>deleting(e,employeer.id)} className="btn btn-danger btn-sm foat-end">Delete</button>
                                                  
                                                </td>                 
                                             </tr> 
                                             );
                                             })
                                       }


                                    </tbody>
                           </table>          
                        </section>

                     </div>
               </div>
            </div>



            </div>
          
      </>

      
           
    
    )
}
export default EmployeersInfo;