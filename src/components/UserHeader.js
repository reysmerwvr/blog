import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  // componentDidMount() {
  //   const { fetchUser, userId } = this.props;
  //   fetchUser(userId);
  // }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

const mapDispatchToProps = {
  // fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
