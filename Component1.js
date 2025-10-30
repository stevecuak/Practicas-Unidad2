import { Text, View } from "react-native";

export const SquareText = (props) => {
    return (
        <View style={{
            backgroundColor: props.backgroundC,
            width: '100%',
            paddingLeft: '7%',
        }}>
            <Text style={{
                fontStyle: 'italic',
                fontSize: 25,
                color: '#fff',
                paddingTop: '15%',
                paddingBottom: '10%',
            }}>
                {props.fullName}
            </Text>
            <View style={{
                flexDirection: "row",
                paddingTop: '10%',
                paddingBottom: '18%',
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: '#fff',
                }}>
                    React Native -
                </Text>
                <Text style={{
                    fontSize: 25,
                    color: '#fff'
                }}> User registration</Text>
            </View>
        </View>
    );
}

export default SquareText;