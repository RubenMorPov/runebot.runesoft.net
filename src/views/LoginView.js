import React from 'react';
import InputText from '../components/forms/InputText';
import Button from '../components/forms/Button';
import DefaultPanel from '../components/panels/DefaultPanel';

const LoginView = (props) => {
    return (
        <DefaultPanel>
            <InputText label="User"></InputText>
            <InputText label="Password" hideChars></InputText>
            <Button text="Login"></Button>
        </DefaultPanel>
    );
};

export default LoginView;
