import React from 'react';
import { connect } from 'react-redux';
import { thunkActionCreatorLocation } from './actions/iss';

class intlSpaceStation extends React.Component {

  componentDidMount() {
    setInterval(() => {this.props.dispatch(thunkActionCreatorLocation())}, 5000)
  }

  render() {
    return (
      <div>
        {this.props.state.iss.isFetched && <h1>{this.props.state.iss.location.iss_position.longitude}</h1>}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(intlSpaceStation);