import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
  componentDidMount() {
    // console.log(this.props.props);
  }

  render() {
    const { title, body } = this.props.card;
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'>{title}</h3>
        <p>{body}</p>
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

export default withParams(connect(mapStateToProps)(Card));
