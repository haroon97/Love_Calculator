import React from 'react';
import { connect } from 'react-redux';
import { thunkActionCreator } from './actions/nasa';
import { Embed } from 'semantic-ui-react';

class NasaImage extends React.Component {

  componentDidMount() {
    this.props.dispatch(thunkActionCreator());
  }

  render() {
    return (
      <div className='embed'>
        <Embed
        brandedUI
        color='white'
        hd={false}
        className='video'
        url={this.props.state.nasaPic.astronomyPicture.url}
        aspectRatio='21:9'
        icon='youtube'
      />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(NasaImage);