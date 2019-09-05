import React from 'react';
import './App.css';
import Answer from './Answer'

class App extends React.Component {
  state = {
    message: '',
    count: 0
  }

  indexOf(array, value) {
    let counter = 1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return {value: array[i], counter}
        }
      counter++; 
    }
      return -1; 
};

binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return this.binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return this.binarySearch(array, value, start, index - 1);
  }
};

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target)
    this.setState({
      message: '',
      count: 0
    })
    const {user_input}= e.target;
    let value = user_input.value
    let array = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5];

 let output = this.indexOf(array, Number(value))
 console.log(output)
    if(output === -1) {
      this.setState({
      
        message: 'Could not find that value!',
        count: array.length
      })
    } else {
      this.setState({
        message: `Found ${output.value}`,
        count: output.counter
      })
    }
    value = ''
  }
  render() {
  return (
    <div className="App">

      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Search For a Number</label>
        <input name="user_input" type="number"></input>
        <button>Search</button>
      </form>
      <Answer info={this.state}/>
  
    </div>
  );
  }
}

export default App;
