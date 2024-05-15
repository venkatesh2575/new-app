/*
import React, { Component } from 'react'

export default class exx extends Component 
  {
    constructor(props){
      super(props)
      this.state= { val: 0}
             this.handleClick= this.handleClick.bind(this)
      
             this.handleClick1=this.handleClick1.bind(this)
      }
      
  handleClick(e){

    this.setState({
      liked: this.state.val +1}   )
    }
  handleClick1(e){

    this.setState({
      liked1: this.state.val +2}    )
  }
  
   render()
   {
    return(
      
      <div>
           
          <h3>{this.state.val}</h3>
          
          <button onClick={this.handleClick}>click to add 1</button>
          <h3>{this.state.liked}</h3>
          <button onClick={this.handleClick1}>click to add 10</button>
          <h3>{this.state.liked1}</h3>
         
         
</div>
)


}}








import React, { Component } from 'react'

export default class exx extends Component {
    constructor(props){
        super(props)
        this.state={
            data:''
        }
      this.updateState=this.updateState.bind(this);
      this.clearState=this.clearState.bind(this);
    }

    updateState(e)
    {
        this.setState({
            data: e.target.value});
    }
    clearState(e)
    {
      this.setState({
        data:''
      });
    }






  render() {
    return (
      <div>
        <input value={this.state.data} onChange={this.updateState}></input>
        <button onClick={this.clearState}>clear</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}



import React, { Component } from 'react'

export default class add extends Component {
    constructor(props){
      super(props)
      this.state = { num1: '', num2: '' };
      this.update=this.update.bind(this);
      
    }  
    update(e)
    {
    var n1=   parseInt(this.setState({ num1: e.target.value }));
     var n2=  parseInt(this.setState({ num2: e.target.value}));
      var ans= n1 +  n2;
      alert(ans);
    }
   

  render() {
    return (
      <div>
<input type='text'  onChange = {this.state.num1}  
 />9

<input type='text' onChange = {this.state.num2} 
 />

<button onClick={this.update}>addition</button>
      </div>
    );
  }
}




import React, {useState } from 'react';


function CBC()
{

  const [titile]=useState('devveloper');

  const [count,set] =useState(0);

  return(
  
    <div>
      <h2>{titile}</h2>
      <h1>{count}</h1>
      <button onClick={()=>{set(count + 1)}}>button</button>
    </div>
  

  );
}
export default CBC;

*/


import React, {useState } from 'react';


function CBC()
{
   const [number1,setnumber1]=useState();
   const [number2,setnumber2]=useState();
  const [total,settotal]=useState(0);

   function multiplication()
   {
    settotal(number1 * number2);
    
   }
   function subraction()
   {
    settotal(number1 - number2);
    
   }
   function divison()
   {
    settotal(number1/number2);
    
   }
   function clear()
   {
    setnumber1(0);
    setnumber2(0);
    settotal(0);
   }
  

   return(
     <div>
      <input value={number1} onChange={(e)=>setnumber1(e.target.value)}></input><br></br>
      <input value={number2} onChange={(e)=>setnumber2(e.target.value)}></input><br></br>
      <div><button onClick={multiplication}>*</button><br></br></div>
      <div><button onClick={subraction}>-</button></div>
      <button onClick={()=>setnumber1(9)}>9s</button>
      <button onClick={clear}>clear</button>
       <h1>{total}</h1>
     </div>




   )


}
export default CBC;




















