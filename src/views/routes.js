import React, { Component } from 'react'
import config from '../router/config'
import {Route} from 'react-router-dom'
import BScroll from 'better-scroll'

class Routes extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.warper = React.createRef();
  }
  
  componentDidMount() {
    this.scroll = new BScroll(this.warper.current,{
      click: true,
      scrollY: true
    })
  }
  componentDidUpdate(prevProps, prevState) {
    this.scroll.refresh();
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ height: '90%' }} className='abc'  ref={this.warper}>
          <div>
            {
              config.map((item) => {
                return (
                  <Route
                    exact
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  ></Route>
                )
              })
            }
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}
export default Routes;