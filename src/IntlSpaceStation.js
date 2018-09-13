import React from 'react';
import { connect } from 'react-redux';
import { thunkActionCreatorLocation, thunkActionCreatorPeople } from './actions/iss';
import { Table, Message } from 'semantic-ui-react';
import Moment from 'react-moment';

class intlSpaceStation extends React.Component {

  componentDidMount() {
    setInterval(() => {this.props.dispatch(thunkActionCreatorLocation())}, 5000)
    this.props.dispatch(thunkActionCreatorPeople());
  }

  render() {
    return (
      <div>
        {this.props.state.iss.isPeopleFetched &&  <Message compact>
          <Message.Header>There are currently {this.props.state.iss.peopleInSpace.number} people in space</Message.Header>
          <Message.List  items={this.props.state.iss.peopleInSpace.people.map( person => person.name)}/>
        </Message>}
        {console.log(this.props.state.iss)}
       <Table collapsing>
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
    );
  };
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(intlSpaceStation);