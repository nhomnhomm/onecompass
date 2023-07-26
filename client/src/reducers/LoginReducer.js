import loginService from '../services/login'

const initialState = {
    loginFormData: {
        username: '', 
        password: ''
    }, 
    formErrors: {}
}

export const login = (content) => {
    return async dispatch => {
        try {
            const user = await loginService.login({
                username: content.username,
                password: content.password
            })
            window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
            dispatch({
                type: 'SET_USER',
                data: user
            })
        } catch (exception) {
            return exception
        }
    }
}

const LoginReducer = (state = null, action) => {
    switch (action.type) {
    case 'SET_USER':
        return action.data
    case 'LOGOUT':
        return null
    default:
        return state
    }
}

export default LoginReducer