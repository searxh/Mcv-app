import * as Font from 'expo-font'

const fonts = async () => {
  await Font.loadAsync({
    'noto-sans-thin': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Thin.ttf'),
    'noto-sans-extra-light': require('../assets/fonts/NotoSans/en/NotoSansDisplay-ExtraLight.ttf'),
    'noto-sans-light': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Light.ttf'),
    'noto-sans-regular': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Regular.ttf'),
    'noto-sans-medium': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Medium.ttf'),
    'noto-sans-semi-bold': require('../assets/fonts/NotoSans/en/NotoSansDisplay-SemiBold.ttf'),
    'noto-sans-bold': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Bold.ttf'),
    'noto-sans-extra-bold': require('../assets/fonts/NotoSans/en/NotoSansDisplay-ExtraBold.ttf'),
    'noto-sans-black': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Black.ttf'),
    'noto-sans-thai-thin': require('../assets/fonts/NotoSans/en/NotoSansDisplay-Thin.ttf'),
    'noto-sans-thai-extra-light': require('../assets/fonts/NotoSans/en/NotoSansDisplay-ExtraLight.ttf'),
    'noto-sans-thai-light': require('../assets/fonts/NotoSans/th/NotoSansThai-Light.ttf'),
    'noto-sans-thai-regular': require('../assets/fonts/NotoSans/th/NotoSansThai-Regular.ttf'),
    'noto-sans-thai-medium': require('../assets/fonts/NotoSans/th/NotoSansThai-Medium.ttf'),
    'noto-sans-thai-semi-bold': require('../assets/fonts/NotoSans/th/NotoSansThai-SemiBold.ttf'),
    'noto-sans-thai-bold': require('../assets/fonts/NotoSans/th/NotoSansThai-Bold.ttf'),
    'noto-sans-thai-extra-bold': require('../assets/fonts/NotoSans/th/NotoSansThai-ExtraBold.ttf'),
    'noto-sans-thai-black': require('../assets/fonts/NotoSans/th/NotoSansThai-Black.ttf'),
  })
}

export default fonts
