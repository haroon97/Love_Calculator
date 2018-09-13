import React from 'react';
import { connect } from 'react-redux';
import { thunkActionCreator } from './actions/nasa';
import { Embed, Header, Image, Loader} from 'semantic-ui-react';

class NasaImage extends React.Component {

  componentDidMount() {
    this.props.dispatch(thunkActionCreator());
  }
  render() {
      return (
        <div>
          {this.props.state.nasaPic.isPicFetching && <div className='loader'><Loader active size='massive' inline='centered'/></div>}
          {this.props.state.nasaPic.astronomyPicture.media_type === 'video' ?  
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
          </div> : <div><Image src={this.props.state.nasaPic.astronomyPicture.url} centered size='large' className='img'/></div>}
          
        {this.props.state.nasaPic.isPicFetched && <Header as='h2' textAlign='center' inverted color='blue' >
        <h2 className='h2'>{this.props.state.nasaPic.astronomyPicture.title}</h2>
        </Header>}
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