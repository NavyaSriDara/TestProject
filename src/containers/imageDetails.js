import React from 'react';
import { connect } from 'react-redux';
import { store } from './../index';
import { updateCount } from './../actions/index';

class imageDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }

  }
  componentDidMount() {
    if (this.props.location.state.count) {
      this.setState({ count: this.props.location.state.count })
    }
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      store.dispatch(updateCount(this.props.location.state, this.state.count))
    })

  }
  decrementCount = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 }, () => {
        store.dispatch(updateCount(this.props.location.state, this.state.count))

      })
    }

  }
  render() {
    return (
      <div className="App row main-blk  flex-column d-flex align-items-center" >
        <div className='img-blk col-md-6 p-5 card'>
          <img src={this.props.location.state.url} className='card-img-top' />
          <span className='card-text'>{this.props.location.state.title}</span>
        </div>
        <div className='d-flex w-50 align-items-center btn-blk'>
          <button onClick={this.incrementCount.bind(this)}>+</button>
          <span>{this.state.count}</span>
          <button onClick={this.decrementCount.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  };
};
export default connect(
  mapStateToProps,
)(imageDetails)


