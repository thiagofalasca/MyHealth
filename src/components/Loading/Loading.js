import { StyleSheet, View } from "react-native"
import AnimatedLottieView from "lottie-react-native"

const Loading = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <AnimatedLottieView source={require('../../../assets/loading.json')} autoPlay loop />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1
    }
})

export default Loading