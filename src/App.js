import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        const { setCurrentUser } = this.props;
        userRef.onSnapshot((userSnapShot) => {
          setCurrentUser({
            current_user: {
              id: userSnapShot.id,
              ...userSnapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { current_user } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              return current_user ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  current_user: user.current_user,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
