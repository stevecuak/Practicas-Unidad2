import { View } from "react-native";
import {Label_Field} from './LabelField.js';

export const BottomPart = () => {
    
    return (
        <View style={{
            width: '100%',
            paddingLeft: '7%',
            alignContent: 'center',
        }}>
            <Label_Field labelText='Username' isButton={false} placehold='User'/>
            <Label_Field labelText='Password' isButton={false} placehold='********'/>
            <Label_Field labelText='' isButton={true}/>
        </View>
    );
}

export default BottomPart;