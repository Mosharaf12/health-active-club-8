import React from 'react';
import './Cart.css'

const Cart = () => {
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
                    <button>
                        <p>10 <small>mint</small></p>
                    </button>
                    <button>
                        <p>20 <small>mint</small></p>
                    </button>
                    <button>
                        <p>30 <small>mint</small></p>
                    </button>
                    <button>
                        <p>40 <small>mint</small></p>
                    </button>
                   

                </div>
             </div>
             <div className='input-field'>
                <div>
                    <h3>Exercise Details</h3>
                </div>
                <div className='exercise-field'>
                    Exercise Time :<input className='exercise' type="text" placeholder='Exercise Times' />

                </div>
                <div className='break-field'>
                    Break Time:<input className='time' type="text" placeholder="Break Time"></input>
                </div>
             </div>
             <button className='btn-complete'>
                <p>Activity Completed</p>
             </button>
            
             
        </div>
    );
};

export default Cart;