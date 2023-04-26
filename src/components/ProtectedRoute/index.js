import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

// bugs identified are
// 1. spread operator is not used for destructuring the values

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
