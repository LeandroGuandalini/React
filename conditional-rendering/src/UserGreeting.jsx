import PropTypes from 'prop-types'

function UserGreeting(props){
  if(props.isLoggedIn){
    return <h2 className="welcome-message">Welcome {props.UserName}</h2>
  }

  return <h2 className="login-prompt">Please log in to continue</h2>

}

UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool,
  UserName: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  UserName: "Guest",
}

export default UserGreeting