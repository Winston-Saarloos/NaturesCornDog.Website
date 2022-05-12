import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div>This route is protected</div>
    </>
  );
};

export default Dashboard;