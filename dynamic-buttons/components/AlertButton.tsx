import React from "react";
import { Button, Alert } from 'react-native';

type AlertButtonProps = {
    message: string;
    children: string;
};

const AlertButton = ({ message, children }: AlertButtonProps) => {
    const handleClick = () => {
        Alert.alert(message)
    };

    return (
        <Button title={children} onPress={handleClick}/>
    );    
};

export default AlertButton;