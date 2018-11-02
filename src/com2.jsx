import React from 'react';
class Comtwo extends React.Component{

    render(){
        return(
            <div>
               <span className='displayvalue'>{this.props.fromparenttochild}</span>
            </div>
        );
        }
}
export default Comtwo;