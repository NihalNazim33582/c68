import React from 'react';
import {Text,View} from 'react-native';

export default class In extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center', marginTop: 20}}>
                <Text>Latest New About the Gram!!!</Text>

                <Text style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                President Trump has been banned indefinitely from Instagram after his role in
                 the controversial "protest" that leaded to anarchy in the capital.
                </Text>

            </View>
        )
    }
}