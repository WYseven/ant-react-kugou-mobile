import React, { Component } from 'react'
import { getDataComponent } from '../../components/getDataComponent'
 class Rank extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
  componentDidMount() {
    let arr = [];
    for (var i = 0; i < 100; i++) {
      arr.push(i);
    }

    this.setState({
      arr
    })
  }
  render() {
    return (
      <div>
        {
          this.state.arr.map(item => <p key={item}>{item}</p>)
        }
      </div>
    )
  }
}
export default getDataComponent('getRankList')(Rank)