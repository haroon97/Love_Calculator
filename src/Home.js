import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

const Home = () => {
  return (
    <div className='title'>
      <Header as='h2' icon textAlign='center' className='header' inverted color='blue'>
        <Icon name='space shuttle' />
        <h1 className='h1'>The Space App</h1>
      </Header>
   </div>
  );
};

export default Home;