import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Button,
  Alert
} from 'react-native';
import {bind} from '../utils/utils';

export default class QuoteDetail extends Component{
    static propTypes = {
        quote: PropTypes.object.isRequired
    }

    constructor(props,context){
        super(props, context);
    }

    backView(){
        this.props.navigator.push({
            name:"quotes"
        })
    }
    
    render(){
        const {quote} = this.props;
        return (
             <View style={styles.quote}>
                <Image style={styles.cover}
                    source={{uri: quote.picture.large}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {`${quote.name.first.toUpperCase()} ${quote.name.last.toUpperCase()}`}
                    </Text>
                    <Text>
                        <Text style={styles.fontBold}>Phone: </Text>
                        {quote.cell}
                    </Text>
                    <Text>
                        <Text style={styles.fontBold}>Email: </Text>
                        {quote.email}
                    </Text>
                    <Text>
                        <Text style={styles.fontBold}>Location: </Text>
                        {quote.location.city},
                        {quote.location.street}
                    </Text>
                    <Text>
                        <Text style={styles.fontBold}>DOB: </Text>
                        {quote.dob}
                    </Text>
                    <Button 
                        onPress={this.backView}
                        title="Learn More"
                        color="#841584"
                    />
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    quote: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 40,
        padding: 5,
        backgroundColor: '#FFFFFF'
    },
    cover: {
        flex: 1,
        height: 150,
        marginTop: 40,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    name: {
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    },
    fontBold: {
        fontWeight: '700'
    }
})
