 import React, { Component } from 'react';
 class Counter extends Component {
     state = {  
         count: 4
     };
     render() { 
         return(
             <div> <h1>HEEEElllllllllllllllllllllllllllllllllllllllloooooooooooooooooooooooooooooooo</h1>
             <span>{this.state.count}</span>
             <button>Increment</button>
             </div>
         );
     }
 }
  
 export default Counter;