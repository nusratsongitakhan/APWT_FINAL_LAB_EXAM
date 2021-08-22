import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminHome from './components/Admin/AdminHome';
import RegisterEmployee from './components/Admin/RegisterEmployee';
import EmployeersInfo from './components/Admin/EmployeersInfo';
import EmployeerHome from './components/Employeer/EmployeerHome';
import AddAndEditJob from './components/Employeer/AddAndEditJob';
import JobInfo from './components/Employeer/JobInfo';
import Dashboard from './components/Dashboard';


function App() {







  return (
   
    <Router>
      
      <Switch>
          <Route exact path='/'> 
            < Dashboard/>  
          </Route>
          <Route path="/admin/home" children={< AdminHome/>}></Route>
          <Route path="/admin/edit/info/:id" children={< RegisterEmployee/>}></Route>
          <Route path="/admin/employeersInformation" children={< EmployeersInfo/>}></Route>
          <Route path="/admin/registerEmployee" children={< RegisterEmployee status='Register'/>}></Route>
          {/* <Route path='/admin/employeerInfoEdit/:id' children={<RegisterEmployee status='edit'/>} ></Route> */}
         
         
          <Route path="/employeer/home" children={< EmployeerHome/>}></Route>
          <Route path="/employeer/edit/info/:id" children={< AddAndEditJob/>}></Route>
          <Route path="/employeer/jobsInformation" children={<JobInfo/>}></Route>
          <Route path="/employeer/addJob" children={< AddAndEditJob status='Add'/>}></Route>
         
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
