import { useState } from "react";
import { Button, Text, View, TextInput, StyleSheet, Alert } from "react-native";

export const Label_Field = (props) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const authUserAlert = () =>
        Alert.alert('Alerta w', 'El usuario ha sido autenticado exitosamente.', [
            { text: 'OK', onPress: (setIsDisabled(true)) }
        ])

    return (
        <View style={{
            width: '100%',
            paddingLeft: '7%',
            paddingRight: '15%',
        }}>
            <Text style={{
                fontStyle: 'italic',
                fontSize: 18,
                paddingTop: '15%',
                paddingBottom: '2%',
            }}>{props.labelText}</Text>
            
            {props.isButton ? 
            (
                <Button 
                    title="Sign in" 
                    color='#d10096ff' 
                    style={styles.button} 
                    disabled={isDisabled} 
                    onPress={authUserAlert} 
                />
            ) : (
                <TextInput
                    placeholder={props.placehold}
                    style={styles.textarea}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: '2%',
        margin: '2%',
        borderRadius: 20,
        textAlign: 'center',
    },
    textarea: {
        fontSize: 18,
        borderRadius: 26,
        backgroundColor: '#cfcfcfff',
        textAlign: 'center',
    }
});

export default Label_Field;