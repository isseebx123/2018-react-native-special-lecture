import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinDetail extends React.Component {
    render(){
        let date = new Date();
        let now = date.toLocaleString();

        return(
            <View style={styles.container}>
                <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
                />
                <Text style={[styles.text]}>{'#' + (this.props.rank || 'Rank')}</Text>
                <Text style={[styles.text]}>{this.props.name || 'Name'}</Text>
                <Text style={[styles.text]}>{'Price: ' + (this.props.price || 0)}</Text>
                <Text style={[styles.text]}>{'Volume: ' + (this.props.volumn || 0)}</Text>
                <Text style={[styles.text]}>{'Updated: ' + (this.props.time || 0)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: 'white',
    }
});

export default CoinDetail;