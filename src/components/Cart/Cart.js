import React from 'react';
import './Cart.css'
import Swal from 'sweetalert2'


const Cart = ({cart,}) => {

    let total =0;
    for(const game of cart){
        total = total + game.time;
    }
    const completed=()=>{
        if(completed){
            console.log(Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              ))
        }
    }
  
   
    
    return (
        <div>
             <div className='cart'>
                <h3>Md. Mosharaf Hossain</h3>
                <p>Chittagong, Bangladesh</p>
                <div className='personal'>
                    <div><h4>80kg <small>weight</small></h4>
                    
                    </div>
                   <div> <h4>6 <small>feet</small></h4>
                  
                   </div>
                    <div><h4>30 <small>age</small></h4>
                    
                    </div>
                </div>
             </div>
             <div className='break'>
                <div className='break-text'> 
                    <h4>At A Break</h4>

                </div>
                <div className='btn-mint'>
                    <button >
                        <p>10 <small>min</small></p>
                    </button>
                    <button>
                        <p>20 <small>min</small></p>
                    </button>
                    <button>
                        <p>30 <small>min</small></p>
                    </button>
                    <button>
                        <p>40 <small>min</small></p>
                    </button>
                   

                </div>
             </div>
             <div className='input-field'>
                <div>
                    <h3>Exercise Details</h3>
                </div>
                <div className='exercise-field'>
                    <h4>Exercise Time: {total} <small>min</small></h4>
                    
                </div>
                <div className='break-field'>
                   <h4> Break Time:</h4>
                </div>
             </div>
             <button onClick={completed}  className='btn-complete'>
                <p>Activity Completed</p>
             </button>
            
             
        </div>
    );
};

export default Cart;