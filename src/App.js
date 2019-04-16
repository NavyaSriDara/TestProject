import React from 'react';
import './App.css';
import { getOneMoreItem } from './actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
const pStyle = {
  display: 'inline-flex'
}
const imgStyle = {
  width: '100 %'
}
class App extends React.Component {
  getOneMoreItem = (e) => {
    this.props.dispatch(getOneMoreItem(this.props.images.length))
  }
  navigateToImagePage = (e, image) => {
    this.props.history.push('/image', e)
  }
  render() {
    return (
      <div className="main-blk" >
        <div style={pStyle}  className="row p-5" >
          {this.props.images && this.props.images.map((image) => {
            return <div className='col-lg-3 col-sm-6 col-md-6 p-0'><div key={image.id} className='p-5 card' >
              <img src={image.thumbnailUrl}  style={imgStyle} onClick={this.navigateToImagePage.bind(this, image)} className='card-img-top' />
              <span className='card-text'>{image.title}</span>
            </div></div>
          })}
        </div>
        <button onClick={this.getOneMoreItem.bind(this)}> Get One More Item</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.images.initialImages
  };
};
export default withRouter(connect(mapStateToProps)(App));



