import React, { Component } from 'react'

class Classcounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0       //creating state variable called count
        }
    }
    incrementCount = ()=>{              //creating method to increment the count value by 1
        this.setState({
            count: this.state.count +3
        })
       
        

    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count {this.state.count} </button>
                {
                    console.log(this.state.count)
                }
               
            </div>
             
        )
    }
}

export default Classcounter

