import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class Cal extends Component{

   constructor(){
      super()
      this.state = {
        selectedIndex: 0,
        billAmount:0,
        result:0,
        tipAmount:0
      };
    }

    handleIndexChange = (index) => {
      this.setState({
        ...this.state,
        selectedIndex: index,
      });
      this.handleBillAmountChange(this.state.billAmount,index)
    }

    handleBillAmountChange(bill,index){
        this.setState({
            billAmount : bill
        })

        if(!index && index!=0){
            index = this.state.selectedIndex;
        }

        bill = parseFloat(bill);
        var percent = this.segmentValues()[index];
        percent = parseFloat(percent)/100;
        
        var result = bill+(bill*percent);
        
        this.setState({
            result:result,
            tipAmount:bill*percent
        })

    }

    segmentValues(){
        return ['10%', '15%','50%'];
    }

    render(){
        return(
           <View>
                <View>
                    <Text>Tip calculator</Text>
                </View>
                <View>
                    <Text>Bill amount</Text>
                    <TextInput 
                        onChangeText={(billAmount)=>this.handleBillAmountChange(billAmount)}
                    />
                </View>
                <View>
                    <Text>Tip amount 0</Text>
                </View>
                <View>
                    <SegmentedControlTab
                    values={this.segmentValues()}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    />
                </View>
                <View>
                    <Text>Bill amount: {this.state.billAmount} </Text>
                    <Text>Tip amount: {this.state.tipAmount}</Text>
                    <Text>Percent: {this.segmentValues()[this.state.selectedIndex]}</Text>
                </View>
                <View>
                    <Text>Result: {this.state.result}</Text>
                </View>
           </View>
        );
    }

}

module.exports =Cal;