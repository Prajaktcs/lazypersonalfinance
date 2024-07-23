import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-start">
      <Text className="btn btn-blue">Tab One</Text>
    </View>
  );
}
