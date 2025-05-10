import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlertButton from './AlertButton';



const Toolbar = () => {
    const buttons = [
        { message: 'Downloading!', children: 'Download File' },
        { message: 'Sharing!', children: 'Share Document' },
        { message: 'Uploading!', children: 'Upload File' },
      ];

    return (
        <View style={styles.container}>
            {buttons.map((btn, index) => (
                <AlertButton key={index} message={btn.message}>
                    {btn.children}
                </AlertButton>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      gap: 10,
      marginVertical: 20,
    },
  });

export default Toolbar;