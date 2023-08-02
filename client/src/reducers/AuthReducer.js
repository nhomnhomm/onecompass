import loginService from '../services/login'
import signupService from '../services/signup'

// unused 
const initialState = {
    loginFormData: {
        username: '', 
        password: ''
    }, 
    formErrors: {}
}

export const setUser = (content) => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data: { username: content.username, token: content.token, cohort: content.cohort }
    })
  }
}

export const login = (content) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username: content.username,
        password: content.password
      })
      console.log('user' + JSON.stringify(user))
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      dispatch({
        type: 'SET_USER',
        data: user
      })
    } catch (exception) {
      throw new Error('Invalid username or password')
    }
  }
}

export const signup = (content) => {
  return async dispatch => {
    try {
      const user = await signupService.signup({
        username: content.username,
        password: content.password, 
        email: content.email, 
        cohort: content.cohort
      })
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      dispatch({
        type: 'SET_USER',
        data: user
      })
    } catch (exception) {
      return exception
    }
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

const AuthReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  case 'LOGOUT':
    return null
  default:
    return state
  }
}

export default AuthReducer