import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
class CustomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let { banner } = this.props;
    return ( 
      <Carousel
        autoplay={false}
        infinite
        selectedIndex={1}
      >
        {banner.map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={val.imgurl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}
 
export default CustomeCarousel;