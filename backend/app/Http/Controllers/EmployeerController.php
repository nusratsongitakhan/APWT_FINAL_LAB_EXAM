<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employeer;

class EmployeerController extends Controller
{
    public function registration(Request $req){


        $employeer = new Employeer;
  
        $employeer->employeerName =$req->employeerName;
        $employeer->companyName = $req->companyName ;
        $employeer->contactNo = $req->contactNo;
        $employeer->userName = $req->userName;
        $employeer->password = $req->password;
       
        $employeer->save();

        
        

        return response()->json([
            'status' => 19,
            'message' => 'Successfully Registered!!!'

        ]);

    
    }
    public function edit(Request $req,$id){


        $employeer =Employeer::find($id);

        $employeer->employeerName =$req->employeerName;
        $employeer->companyName = $req->companyName ;
        $employeer->contactNo = $req->contactNo;
        $employeer->userName = $req->userName;
        $employeer->password = $req->password;
       
        $employeer->save();

        
        

        return response()->json([
            'status' => 19,
            'message' => 'Successfully Edited!!!'

        ]);

    
    }
    public function getEmployeer(Request $req,$id){


        $employeer =Employeer::find($id);

     

        return response()->json([
            'status' => 19,
            'employeer' =>  $employeer

        ]);

    
    }
    public function employeersInformation(Request $req){


        $Employeer = Employeer:: all();

        
        

        return response()->json([
            'status' => 19,
            'message' => 'Successfully data inserted !!!',
            'employeers' => $Employeer

        ]);

    
    }
    public function delete($id){


        Employeer::destroy($id);
        

          
            return response()->json([
             'status' => 19,
             'msg' => "Deleted successfully"
          
             
         ]);

    
    }
    public function search(Request $req){
       
        
        $Employeer=Employeer::where('employeerName','LIKE','%'. $req->employeerSearch .'%')
                        ->orWhere('userName','LIKE','%'. $req->employeerSearch .'%')
                        ->get();

       

   

    if( $Employeer){
                  
        return response()->json([
         'status' => 19,
         'employeers' =>  $Employeer,
        
        
         
     ]);}
                                  
        }
}
