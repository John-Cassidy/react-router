import React, { Component } from 'react';

import { useParams } from 'react-router-dom';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  state = { user: '' };

  componentDidMount() {
    let { user } = this.props.params;
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'>{user}</h3>
      </div>
    );
  }
}

// const Card = () => {
//   let { user } = useParams();

//   return user ? (
//     <div
//       className='ui raised very padded text container segment'
//       style={{ marginTop: '80px' }}
//     >
//       <h3 className='ui header'>{user}</h3>
//     </div>
//   ) : (
//     <div>Loading...</div>
//   );
// };

export default withParams(Card);
