import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Quote = ({quote})=>{
        return (
            <View style={styles.quote}>
                <Image style={styles.cover}
                   source={{uri: quote.picture.large}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {`${quote.name.first.toUpperCase()} ${quote.name.last.toUpperCase()}`}
                    </Text>
                    <Text>
                        phone: {quote.cell}
                    </Text>
                    <Text>
                        {quote.email}
                    </Text>
                </View>
            </View>
        )
}

Quote.propTypes = {
    ...View.propTypes
};

const styles= StyleSheet.create({
    quote: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1
    },
    cover: {
        flex: 1,
        width: 150,
        height: 150,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    name: {
        marginBottom: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    }
})

export default Quote;


