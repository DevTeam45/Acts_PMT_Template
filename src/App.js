import { lazy, Suspense, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './redux/selectors/AuthSelectors';
import Index from './views';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { UserRightsProvider } from './context/UserRightsContext';

const ForgotPassword = lazy(() => import('./views/pages/auth/ForgotPassword'));
const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./views/pages/auth/Login')), 500);
  });
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);
  }, [dispatch, navigate]);

  const routeblog = (
    <Routes>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/forgot-password' element={<ForgotPassword />} />
    </Routes>
  );

  if (props.isAuthenticated) {
    return (
      <Suspense fallback={
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      }>
        <UserRightsProvider>
          <Index /> 
        </UserRightsProvider>
      </Suspense>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }>
          <UserRightsProvider>
            {routeblog}
          </UserRightsProvider>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default withRouter(connect(mapStateToProps)(App));