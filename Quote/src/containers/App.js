import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Quotes from './Quotes';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import SplashScreen from 'react-native-splash-screen';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import QuoteDetail from '../components/QuoteDetail';
import Search from '../containers/Search';

const RouteMapper = (route, navigator) => {
    if (route.name === 'quotes') {
        return (
            <ScrollableTabView
                    style={{marginTop: 20, }}
                    renderTabBar={() => <DefaultTabBar />}
            >
                    <Quotes navigator={navigator} tabLabel='Quotes'/>
                    <Search tabLabel='Search'/>
            </ScrollableTabView>
        );
    }else if(route.name ==='quote-detail'){
        return (
           <QuoteDetail quote={route.quote} navigator={navigator}/>
        );
    }
};

export default class App extends Component{
    //Hide Splash Screen
    componentDidMount() {
        SplashScreen.hide();
    }

    render(){
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'quotes' }}
                renderScene={RouteMapper}
            />
        )
    }
}


