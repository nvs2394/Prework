import React, { Component,PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Navigator
} from 'react-native';
import Quote from '../components/Quote';
import {bind} from '../utils/utils';

export default class QuoteList extends Component{

    constructor(props,context){
        super(props, context);
        bind(this)('_renderRow', '_rowOnPress')
    }

    static propTypes={
        dataSource: PropTypes.object.isRequired        
    }

    _renderRow(rowData, sectionId, rowId, highlightRow){
        const _rowHighlightOnPress = () => {
            this._rowOnPress(rowData);
            highlightRow(sectionId, rowId)
        };

        return(
            <TouchableHighlight onPress={_rowHighlightOnPress}>
                <View>
                    <Quote quote={rowData}/>
                </View>
            </TouchableHighlight>
        )
    }

    _rowOnPress(quote){
        this.props.navigator.push({
            name:"quote-detail",
            quote:quote,
            title: 'My Initial Scene'
        })
    }

    render(){
        return (
            <ListView
                dataSource  = {this.props.dataSource}
                renderRow = {this._renderRow}
            />
        )
    }
}

const styles= StyleSheet.create({

})
