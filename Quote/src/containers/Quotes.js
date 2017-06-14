import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator
} from 'react-native';

import QuoteApi from '../api/mockQuoteAPI';
import QuoteList from '../components/QuoteList'
import {bind} from '../utils/utils';

export default class Quotes extends Component{
    constructor(props, context) {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props, context);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoading: true
        };
        bind(this)('_renderLoadingView')
    }

    _renderLoadingView() {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    componentDidMount() {
        QuoteApi.getAllQuotes()
            .then(function (data) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    isLoading: false
                })
            }.bind(this));
    }

    render(){
        if (this.state.isLoading) {
            return this._renderLoadingView();
        }

        return (
            <View>
                <QuoteList
                    dataSource={this.state.dataSource}
                    navigator={this.props.navigator}/>
            </View>
        )
    }
}

const styles= StyleSheet.create({

})
