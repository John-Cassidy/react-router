import { deleteCard, fetchUsers } from '../actions/cardActions';

import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import withRouter from '../hooks/withRouter';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);
    this.props.navigate('/contact');
  };

  render() {
    const { users } = this.props;
    return users.map((user) => {
      return (
        <div
          className='ui raised very padded text container segment'
          style={{ marginTop: '80px' }}
          key={user.id}
        >
          <h3 className='ui header'>{user.name}</h3>
          <p>{user.email}</p>
          <button
            className='ui primary right floated button'
            onClick={this.onButtonClick}
          >
            Delete
          </button>
        </div>
      );
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.params.user;
  return {
    card: state.cards.find((card) => card.title === title),
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    },
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default withRouter(
  withParams(connect(mapStateToProps, mapDispatchToProps)(Card))
);
