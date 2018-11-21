import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input.js';
import { connect } from 'react-redux';
import { login, registerUser } from '../actions/auth.js';
import { Redirect } from 'react-router';
import { required, isTrimmed, nonEmpty, length, matches } from '../validators.js';

const passwordLength = length({ min: 6, max: 72 });
const usernameLength = length({ min: 3, max: 12 })
const matchesPassword = matches('password');


export class SignUpForm extends React.Component {

  onSubmit(values) {
    const { username, password } = values;
    const user = { username, password };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
  }

  render() {
    if (this.props.submitSucceeded) {
      return <Redirect to="/" />
    }
    let error;
    if (this.props.error) {
      error = (
        <div>
          {this.props.error}
        </div>
      )
    }


    return (
      <form
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}>
        {error}
        <label htmlFor="username">User Name</label>
        <Field
          component={Input}
          type='text'
          name="username"
          validate={[required, usernameLength, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type='password'
          name="password"
          validate={[required, nonEmpty, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <Field
          component={Input}
          type='password'
          name="passwordConfirm"
          validate={[required, matchesPassword, nonEmpty]}
        />
        <button
          disabled={this.props.pristine || this.props.submitting}>
          Sign Up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
})

connect(mapStateToProps)(SignUpForm);

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) => dispatch(focus('signUp', 'username')),

})(SignUpForm);