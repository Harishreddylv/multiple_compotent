import React from 'react';
class Comthree extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        this.changeCount = this.changeCount.bind(this);
        this.changeCountMinus = this.changeCountMinus.bind(this);
    }
    changeCount(e){
        e.preventDefault();
        
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
          },()=>{
            this.props.handlerFromParants(this.state.count);
          });
          
          console.log("hari",this.state.count);
    }
    changeCountMinus(e){
        e.preventDefault();
       
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
          },()=>{
            this.props.handlerFromParants(this.state.count); 
          });
          
    }
    render(){
        return(
            <div>
                <input type ='button' value= 'count' onClick={this.changeCount}/> <br />
                <input type ='button' value= 'minus' onClick={this.changeCountMinus}/>
            </div>
            
        );
    }
}
export default Comthree;