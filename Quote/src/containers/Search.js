import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    TextInput,
    View
} from 'react-native';
import {bind} from '../utils/utils';

class Search extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                    onChangeText={this._searchInputOnChange}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    searchInput: {
        height: 44,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC'
    }
});


export default Search;