import { redirect } from "react-router-dom";
import userService from '../services/users'
import { connect } from 'react-redux'
import { logout } from '../reducers/AuthReducer'

export const Profile = (props) => {
  const handleLogout = () => {
    props.logout()
    userService.destroyToken()
    window.localStorage.removeItem('loggedUser')
    redirect("/")
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      user: state.user,
  }
}

const mapDispatchToProps = { logout }

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ConnectedProfile