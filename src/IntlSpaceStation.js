import React from 'react';
import { connect } from 'react-redux';
import { thunkActionCreatorLocation, thunkActionCreatorPeople } from './actions/iss';
import { Table, Message, Header } from 'semantic-ui-react';
import Moment from 'react-moment';

class intlSpaceStation extends React.Component {

  componentDidMount() {
    setInterval(() => {this.props.dispatch(thunkActionCreatorLocation())}, 5000)
    this.props.dispatch(thunkActionCreatorPeople());
  }

  render() {
    return (
      <div>
        <div className='spaceStation'>
          <Header as='h1' inverted color='blue' className='info'><h1 className='info'>Current Information From Space</h1></Header>
        </div>
        <div className='message'>
          {this.props.state.iss.isPeopleFetched &&  <Message compact color='blue'>
             <Message.Header>There are currently {this.props.state.iss.peopleInSpace.number} people in space</Message.Header>
             <Message.List   items={this.props.state.iss.peopleInSpace.people.map( person => person.name)}/>
           </Message>}
        </div>
        {console.log(this.props.state.iss)}
        <div className='spaceStation'>
          <Header as='h1' inverted color='blue' className='info'><h1 className='info'>Current Data On The ISS</h1></Header>
        </div>
        <div className='message'>
          <Table collapsing color='blue' inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
      
          <Table.Body>
            <Table.Row>
              <Table.Cell>Longitude</Table.Cell>
              <Table.Cell>{this.props.state.iss.isFetched && this.props.state.iss.location.iss_position.latitude}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Latitude</Table.Cell>
              <Table.Cell>{this.props.state.iss.isFetched && this.props.state.iss.location.iss_position.latitude}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Timestamp</Table.Cell>
              <Table.Cell><Moment unix>{this.props.state.iss.location.timestamp}</Moment></Table.Cell>
            </Table.Row>
          </Table.Body>
          </Table>
       </div>
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