import React from 'react';
import {Text,View} from 'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>FaceBook News</Text>
                    <Text style={{flex:1,justifyContent:'center',alignItems:'center', marginTop: 20}}>
                        President Trump has been banned indefinitely from Facebook after his role in
                        the controversial "protest" that leaded to anarchy in the capital.
                    </Text>
            </View>
        )
    }
}