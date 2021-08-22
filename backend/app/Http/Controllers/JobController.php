<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
class JobController extends Controller
{
    public function add(Request $req){


        $job = new Job;
  
        $job->companyName =$req->companyName;
        $job->jobTitle = $req->jobTitle ;
        $job->jobLocation = $req->jobLocation;
        $job->salary = $req->salary;
        
       
        $job->save();

        
        

        return response()->json([
            'status' => 19,
            'message' => 'Successfully Added!!!'

        ]);

    
    }
    public function edit(Request $req,$id){


        $job =Job::find($id);

        $job->companyName =$req->companyName;
        $job->jobTitle = $req->jobTitle ;
        $job->jobLocation = $req->jobLocation;
        $job->salary = $req->salary;
        
       
        $job->save();

        
        

        return response()->json([
            'status' => 19,
            'message' => 'Successfully Edited!!!'

        ]);

    
    }
    public function getJob(Request $req,$id){


        $job =Job::find($id);

     

        return response()->json([
            'status' => 19,
            'job' => $job

        ]);

    
    }
    public function jobsInformation(Request $req){


        $job = Job:: all();

        
        

        return response()->json([
            'status' => 19,
            'message' => 'Successfully data inserted !!!',
            'jobs' =>  $job

        ]);

    
    }
    public function delete($id){


        Job::destroy($id);
        

          
            return response()->json([
             'status' => 19,
             'msg' => "Deleted successfully"
          
             
         ]);

    
    }
   
}
