import React, { Component } from 'react'
import { getPlistInfo} from '../../server/plist'
export default class PlistInfo extends Component {
  componentDidMount() {
    getPlistInfo({ id: this.props.match.params.id}).then(({data}) => {
      console.log(data)
    })
  }
  render() {
    let {match} = this.props;
    console.log(123,match.params.id)
    return (
      <div>
        PlistInfo
      </div>
    )
  }
}
