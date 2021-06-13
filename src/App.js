import React, { Component } from 'react';
import { connect } from 'react-redux'
class App extends Component {

  render() {
    return (
      <div>
        Age : {this.props.age}
        <div>
          <button onClick={this.props.ageUP}>Age UP</button>
          <button onClick={this.props.ageDown}>Age Down</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUP: () => dispatch({ type: 'ADD' }),
    ageDown: () => dispatch({ type: 'SUB' })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);