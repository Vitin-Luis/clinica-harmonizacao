import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    logo: {
        width: '500px',
        height: '400px',
        paddingLeft: '30px',
        justifycontent: 'flex-start',
        alignitems: 'flex-start'
    },
    text: {
        "color":"#000",
        "textAlign":"center",
        "fontSize":"27px",
        "fontWeight":"700",
        "lineHeight":"normal"
      },
      btn: {
        backgroundColor: 'green',
        height: '40px',
        width: '100%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    butao: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
})

export default styles;