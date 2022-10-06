import React, { useState } from 'react';
import InputText from '../components/forms/InputText';
import Button from '../components/forms/Button';
import DefaultPanel from '../components/panels/DefaultPanel';
import MainView from './MainView';

const LoginView = (props) => {
    const [loginState, setLoginState] = useState(false);
    const handleLogin = () => {
        setLoginState(true);
    };
    return loginState ? (
        <MainView></MainView>
    ) : (
        <DefaultPanel>
            <InputText label="User"></InputText>
            <InputText label="Password" hideChars></InputText>
            <Button text="Login" handler={handleLogin}></Button>
        </DefaultPanel>
    );
};

export default LoginView;
