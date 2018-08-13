import React, { Component } from 'react'
import { getPlist } from '../../server'
 class Plist extends Component {
   constructor(props) {
     super(props);
     this.state = {
       data:{
         data:[]
       }
     };
   }
  componentDidMount(){
    getPlist().then(({data}) => {
     this.setState({
       data
     })
    })
  }
  render() {
    let { data } = this.state.data
    console.log(this.state.data.data)
    return (
      <div>
        Plist
        {
          data.map((item) => {
            return <p key={item.specialid+Math.random()} onClick={() => {
              this.props.history.push('/plist/list/' + item.specialid)
            }}>{item.specialname}</p>
          })
        }
      </div>
    )
  }
}

export default Plist;