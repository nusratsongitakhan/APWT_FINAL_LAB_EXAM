import EmployeerNavbar from "./EmployeerNavbar";
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


   

 const AddAndEditJob = () => {


    const { id: eid } = useParams();
   
    const history = useHistory();
    const [job, setJob ] = useState({
        companyName: '',
        jobTitle: '',
        jobLocation: '',
        salary: ''
       
        
    });
    const getJob = async ()=>{
        const response = await axios.get(`http://localhost:8000/api/employeer/GetJob/${eid}`); 
       
        if (response.data.status === 19) {
           
            setJob(response.data.job);
             
        }
        else{
            alert("Data not found");
        }
      
    }
  
    useEffect(()=>{
    if(eid)getJob();
    }, [])
   

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setJob({  ...job,[name]: value})
        console.log(name, value);
        
    }

    const onSubmit = async (e) => {
      
        e.preventDefault();
        
     
        const  companyName =job.companyName.toString();
        const  jobTitle =job.jobTitle.toString();
        const  jobLocation= job.jobLocation.toString();
        const  salary= job.salary.toString();

        const sendJobs={ "companyName": companyName,"jobTitle": jobTitle,"jobLocation":jobLocation,"salary": salary};
        console.log(sendJobs);
       
        
            const response = await axios.post("http://localhost:8000/api/employeer/addJobs",sendJobs);
            console.log(response.data.status);
            if( response.data.status === 19){
                alert(response.data.message);
                setJob({ 
                companyName: '',
                jobTitle: '',
                jobLocation: '',
                salary :''})
             history.push("/employeer/jobsInformation"); 
                 
            }
            else{
                alert("Something went wrong!");

                setJob({ 
                    companyName: '',
                    jobTitle: '',
                    jobLocation: '',
                    salary :''})
        
    
    }
}
    const OnEdit = async (e) => {

        
        e.preventDefault();
        
        const  companyName =job.companyName.toString();
        const  jobTitle =job.jobTitle.toString();
        const  jobLocation= job.jobLocation.toString();
        const  salary= job.salary.toString();


        const sendJobs={ "companyName": companyName,"jobTitle": jobTitle,"jobLocation":jobLocation,"salary": salary};
        console.log(sendJobs);
        // const response = await axios.post("http://localhost:8000/api/user/report", { event_id: event_id,user_id: user_id,user_name: user_name,details: details,status : status});
        
        
        
       
            const response = await axios.put(`http://localhost:8000/api/employeer/EditJob/${eid}`,sendJobs);
            console.log(response.data.status);
            if( response.data.status === 19){
                alert(response.data.message);
                setJob({ 
                    companyName: '',
                    jobTitle: '',
                    jobLocation: '',
                    salary :''})
             history.push("/employeer/jobsInformation"); 
                 
            }
            else{
                alert("Something went wrong!");

                setJob({ 
                    companyName: '',
                    jobTitle: '',
                    jobLocation: '',
                    salary :''})
        
    
    }
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
                        <div className="col-12 mt-1 mb-2">
                            {eid? <h3>Edit Job Information</h3>:<h3>Add New Job</h3>}
                        </div>
                    </div>

                    <form onSubmit={eid? OnEdit:onSubmit}>

                        <div className="col-12 mt-1 mb-2">
                       
                            <label><b>Company Name</b></label ><br/>
                            <input type="text" className="form-control"  name="companyName" value={job.companyName} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label ><b>Job Title</b></label><br/>
                            <input type="text" className="form-control"  name="jobTitle" value={job.jobTitle} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label for="inputPhone" className="form-label"><b>Job Location</b></label><br/>
                            <input type="text" className="form-control"  name="jobLocation" value={job.jobLocation} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label ><b>Salary</b></label><br/>
                            <input type="text" className="form-control"  name="salary" value={job.salary} onChange={change}/>
                        </div>
                       
            
                        <div className="col-12 mt-1 mb-2">
                           <br/>
                        </div>
                        <div className="col-12 mt-1 mb-2">
                          <button type="submit" className="btn btn-danger">{eid?<b>Edit</b>:<b>Add</b>}</button>
                        </div>


                        
                    </form>
                </section>
            </div>
        </div>
        </div>
    </div>
    <div className="sidenav-overlay"></div>
    <div className="drag-target"></div>
   
      </>
           
    
    )
}
export default AddAndEditJob;