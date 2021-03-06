import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util'

import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>A already have account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        label='email'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <FormInput
                        type='password'
                        name='password'
                        label='password'
                        value={this.state.password}
                        onChange={this.handleChange} />


                    <CustomButton type='submit' > Sign in </CustomButton>
                    <CustomButton isGoogleSignIn='true' onClick={ signInWithGoogle }> Sign in with Google </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
