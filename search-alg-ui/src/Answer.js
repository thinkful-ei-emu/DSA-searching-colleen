import React from 'react'

class Answer extends React.Component{
render(){  return (
  <div>
    <p>{this.props.info.message} Number of Steps:{this.props.info.count}</p>
  </div>
  )
}
}
export default Answer;