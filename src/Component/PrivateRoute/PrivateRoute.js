import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ContextElement } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
      const [nav, setNav,userLoginInfo, setUserLoginInfo] = useContext(ContextElement);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          userLoginInfo.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;