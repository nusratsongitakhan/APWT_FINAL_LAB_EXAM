import EmployeerNavbar from "./EmployeerNavbar";
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import axios from 'axios';

import { useHistory } from "react-router-dom";
 const JobInfo = () => {
   const [jobs, setJobsInfo] = useState([]);
  
   const history = useHistory();
   //  const url = 'http://localhost:8000/api/employeer/jobsInformation';
   
    const getData = async ()=>{
      const response = await axios.get('http://localhost:8000/api/employeer/jobsInformation'); 
      console.log(response.data.jobs);
      if (response.data.status === 19) {
         
         setJobsInfo(response.data.jobs); 
           
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
            const response = await axios.delete(`http://localhost:8000/api/employeer/DeleteJobs/${id}`);
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
       history.push(`/employeer/edit/info/${id}`)
         }

    return (
       <>
       
       <div>  
        <EmployeerNavbar/>
       </div>
            <div>

            <div className="app-content content">
            <div className="content-overlay"></div>
               <div className="content-wrapper">
                     <div className="content-body">

                        <section id="widgets-Statistics">

                           <div className="row">
                                 <div className="col-11 mt-1 mb-2">
                                    <h4>Jobs Information</h4>
                                    
                                 </div>
                                 <div className="col-1 mt-1 mb-2">
                                    
                                    <Link to="/employeer/home" className="btn btn-danger foat-end">Back</Link>
                                 </div>

                                 <hr/>
                           </div>
                           
          
                           <table className="table table-striped" >
                                 <thead>
                                    <tr>
                                       <th>companyName</th>
                                       <th>jobTitle</th>
                                       <th>jobLocation</th>
                                       <th>salary</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>

{
   jobs.map((job)=>{
   return (
   <tr key={job.id}>
      <td>{job.companyName}</td>
      <td>{job.jobTitle}</td>
      <td>{job.jobLocation	}</td>                 
      <td>{job.salary}</td>                 
    
      <td>
         {/* <Link to="/admin/home" className="btn btn-primary foat-end">Edit</Link> */}
         <button type="button" onClick={(e)=>editing(e,job.id)} className="btn btn-success btn-sm foat-end">Edit</button>
         <a>  </a>
         <button type="button" onClick={(e)=>deleting(e,job.id)} className="btn btn-danger btn-sm foat-end">Delete</button>
        
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
export default JobInfo;