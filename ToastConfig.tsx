import { BaseToast, ErrorToast } from 'react-native-toast-message'

export const toastConfig = {
    success: (props:any) => (
        <BaseToast 
            {...props}
            style={{
                borderLeftColor:'#16a34a',
            }}
            contentContainerStyle={{
                backgroundColor:'#16a34a',
                width:'100%'
            }}
            text1Style={{
                fontSize: 16,
                color:'white',
                fontFamily:'noto-sans-medium',
            }}
            text2Style={{
                fontSize: 13,
                color:'white',
                fontFamily:'noto-sans-medium',
            }}
        />
    )

}