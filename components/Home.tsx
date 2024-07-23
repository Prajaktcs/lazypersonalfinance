import React from 'react';
import {Text, View} from 'react-native';

export default function Home({path}: { path: string }) {
    return (
        <View>
            <View className="flex-col backdrop-grayscale">
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
