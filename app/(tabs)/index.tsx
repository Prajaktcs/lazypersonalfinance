import Home from '@/components/Home';
import {View} from 'react-native';


export default function TabOneScreen() {
    return (
        <View className="flex-1">
            <Home path="app/(tabs)/index/tsx"/>
        </View>
    );
}
