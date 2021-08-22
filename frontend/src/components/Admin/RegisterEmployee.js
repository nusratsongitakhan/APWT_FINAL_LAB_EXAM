import AdminNavbar from "./AdminNavbar";
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


   

 const RegisterEmployee = () => {


    const { id: eid } = useParams();
   
    const history = useHistory();
    const [employeer, setEmployeer ] = useState({
        employeerName:'',
        companyName: '',
        contactNo: '',
        userName: '',
        password : ''
        
    });
    const getEmployeer = async ()=>{
       
        const response = await axios.get(`http://localhost:8000/api/admin/GetEmployeer/${eid}`); 
       
        if (response.data.status === 19) {
            console.log("response",response)
            setEmployeer(response.data.employeer);
             
        }
        else{
            alert("Data not found");
        }
      
    }
  
    useEffect(()=>{
        if(eid)
        getEmployeer();
    }, [])
   

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeer({...employeer,[name]: value})
        console.log(name, value);
        
    }

    const onSubmit = async (e) => {
      
        e.preventDefault();
        
        const  employeerName =employeer.employeerName.toString();
        const  companyName =employeer.companyName.toString();
        const  contactNo =employeer.contactNo.toString();
        const  userName= employeer.userName.toString();
        const  password= employeer.password.toString();

        const sendEmployeers={ "employeerName": employeerName,"companyName": companyName,"contactNo":contactNo,"userName": userName,"password" : password};
        console.log(sendEmployeers);
        // const response = await axios.post("http://localhost:8000/api/user/report", { event_id: event_id,user_id: user_id,user_name: user_name,details: details,status : status});
        
        
        
       
            const response = await axios.post("http://localhost:8000/api/admin/registerEmployee",sendEmployeers);
            console.log(response.data.status);
            if( response.data.status === 19){
                alert(response.data.message);
                setEmployeer({ 
                employeerName: '',
                companyName: '',
                contactNo: '',
                userName: '',
                password :''})
             history.push("/admin/employeersInformation"); 
                 
            }
            else{
                alert("Something went wrong!");

                setEmployeer({ 
                    employeerName: '',
                    companyName: '',
                    contactNo: '',
                    userName: '',
                    password :''})
        
    
    }
}
    const OnEdit = async (e) => {

        
        e.preventDefault();
        
        const  employeerName =employeer.employeerName.toString();
        const  companyName =employeer.companyName.toString();
        const  contactNo =employeer.contactNo.toString();
        const  userName= employeer.userName.toString();
        const  password= employeer.password.toString();

        const sendEmployeers={ "employeerName": employeerName,"companyName": companyName,"contactNo":contactNo,"userName": userName,"password" : password};
        console.log(sendEmployeers);
        // const response = await axios.post("http://localhost:8000/api/user/report", { event_id: event_id,user_id: user_id,user_name: user_name,details: details,status : status});
        
        
        
       
            const response = await axios.put(`http://localhost:8000/api/admin/EditEmployeer/${eid}`,sendEmployeers);
            console.log(response.data.status);
            if( response.data.status === 19){
                alert(response.data.message);
                setEmployeer({ 
                employeerName:'',
                companyName: '',
                contactNo: '',
                userName: '',
                password :''})
             history.push("/admin/employeersInformation"); 
                 
            }
            else{
                alert("Something went wrong!");

                setEmployeer({ 
                    employeerName: '',
                    companyName: '',
                    contactNo: '',
                    userName: '',
                    password :''})
        
    
    }
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
                            <h3>{eid?<h3>Edit Employeer Information</h3>:<h3>Registration Employeer</h3>}</h3>
                        </div>

                        <div className="col-1 mt-1 mb-2">
                                    
                       <Link to="/admin/home" className="btn btn-danger foat-end">Back</Link>
                        </div>
                    </div>

                    <form onSubmit={eid? OnEdit:onSubmit}>

                        <div className="col-12 mt-1 mb-2">
                       
                            <label><b>Employer Name</b></label ><br/>
                            <input type="text" className="form-control" id="inputUserName"  name="employeerName"  value={employeer.employeerName} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label ><b>Company Name</b></label><br/>
                            <input type="text" className="form-control" id="inputcompanyName" name="companyName" value={employeer.companyName} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label for="inputPhone" className="form-label"><b>Contact No</b></label><br/>
                            <input type="number" className="form-control" id="inputContactNo" name="contactNo" value={employeer.contactNo} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label ><b>User Name</b></label><br/>
                            <input type="text" className="form-control" id="inputUserName" name="userName" value={employeer.userName} onChange={change}/>
                        </div>
                        <br/>
                        <div className="col-12 mt-1 mb-2">
                            <label for="inputPassword4" className="form-label"><b>Password</b></label><br/>
                            <input type="password" className="form-control" id="inputPassword4" name="password" value={employeer.password} onChange={change}/>
                        </div>
                      
 
                        <div className="col-12 mt-1 mb-2">
                           <br/>
                        </div>
                        <div className="col-12 mt-1 mb-2">
                          <button type="submit" className="btn btn-danger">Done</button>
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
export default RegisterEmployee;