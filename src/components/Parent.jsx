import React, { Component } from 'react';
import Child from './Child';
import { concatManipulation, joinManipulation, toStringManipulation, pushManipluation } from '../utils/arrayManipulations';
// import { reverseStringLoop } from '../utils/reverseString';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    
    render() {
        // console.log('count', this.state.count);
        // const myArray = ['my', 'array', 'with', 'values'];
        // const array1 = [1,2,3];
        // const array2 = [4,5,6];
        // const toStringMethod = toStringManipulation(myArray);
        // const joinMethod = joinManipulation(myArray);
        // const concatMethod = concatManipulation(array1, array2);
        // const pushMethod = pushManipluation(myArray, 'test');
        // console.log("reverseStringLoop", reverseStringLoop('test'));
        return(
            <div>
                <Child 
                name="Sirisha"  
                handleOnClick={() => this.setState({ 
                ...this.state,
                count: this.state.count + 1
            })}
             stringData={toStringMethod} 
             joinData={joinMethod} 
             concatData={concatMethod} 
             />
             </div>
        );
    }
}

export default Parent;