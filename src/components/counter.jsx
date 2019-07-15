 import React, { Component } from 'react';
 class Counter extends Component {
     state = {  
         count:0,
         tag: []
         
     };
     styles={
        fontSize:10,
        fontWeight:'bold'
     };
     renderTags(){
         if(this.state.tag.length===0) return<p>there are no elements</p>;
         return  <ul>{this.state.tag.map(tags => <li key={tags}>{tags}</li>)} </ul>;
     }
     render() { 
        let classes = this.getBadgeClasses();
         return(
             <div> <h3>Heellllloooooooo</h3>
             <span style={ this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button className="btn btn-secondary btn-sm">Increment</button>
            {this.renderTags()}
             </div>
         );
     }
     getBadgeClasses() {
         let classes = "badge m2 badge-";
         classes += (this.state.count === 0) ? "warning" : "primary";
         return classes;
     }

     formatCount()
     {
         const { count }=this.state;
         return count === 0 ? 'Zero': count;
     }
 }
  
 export default Counter;