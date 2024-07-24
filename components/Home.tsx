import React from 'react';
import {Text, View} from 'react-native';

export default function Home() {
    return (
        <View>
            <View className="flex-1 justify-center items-center bg-green-600">
                <Text>
                    Open up the code for this screen:
                </Text>

                <Text>
                    Change any of the text, save the file, and your app will automatically update.
                </Text>
            </View>
        </View>
    );
}
