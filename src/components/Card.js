import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import withRouter from '../hooks/withRouter';

// import { deleteCard } from '../actions/cardActions';



function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);
    this.props.navigate('/contact');
  };

  render() {
    const { id, title, body } = this.props.card;
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
        key={id}
      >
        <h3 className='ui header'>{title}</h3>
        <p>{body}</p>
        <button
          className='ui primary right floated button'
          onClick={this.onButtonClick}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.params.user;
  return {
    card: state.cards.find((card) => card.title === title),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch({
        type: 'DELETE_CARD',
        id,
      });
    },
  };
};

export default withRouter(
  withParams(connect(mapStateToProps, mapDispatchToProps)(Card))
);
