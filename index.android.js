/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform,
    BackAndroid,
} from 'react-native';

import MainScreen from './js/HomePager';
import MeContent from './js/MeContent';
import ImagePage from './js/ImagePage';
import JokePager from './js/JokePager';
import JokeImagePager from './js/JokeImagePager';
import MyCollect from './js/MyCollect';
import AboutJoke from './js/sonPager/AboutJoke'
import MyWebView from './js/sonPager/MyWebView'
import ContactMe from './js/sonPager/ContactMe'

let nav;

class Health extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'main', index: 0, id: 'main' }}
                renderScene={(route, navigator) => this._renderPage(route, navigator)}
                />
        )
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => this.onBackAndroid());
        };
    }
    onBackAndroid() {
        //获取当前路有数
        let routers = this.nav.getCurrentRoutes();
        if (this.nav && routers.length > 1) {
            this.nav.pop();
            return true;
        }
        return false;
    }

    _renderPage(route, nav) {
        this.nav = nav;
        switch (route.name) {
            case 'main':
                return (<MainScreen nav={nav} />);
                break;
            case 'ImagePage':
                return (<ImagePage nav={nav} url={route.url} mytitle={route.mytitle} />);
                break;
            case 'JokePager':
                return (<JokePager nav={nav} mytitle={route.mytitle} />);
                break;
            case 'JokeImagePager':
                return (<JokeImagePager nav={nav} mytitle={route.mytitle} />);
                break;
            case 'MyCollect':
                return (<MyCollect nav={nav} mytitle={route.mytitle} />);
                break;
            case 'AboutJoke':
                return (<AboutJoke nav={nav} mytitle={route.mytitle} />);
                break;
            case 'MyWebView':
                return (<MyWebView nav={nav} mytitle={route.mytitle} myurl={route.url} />);
                break;
            case 'ContactMe':
                return (<ContactMe nav={nav} mytitle={route.mytitle} myurl={route.url} />);
                break;
        }
    }
}

AppRegistry.registerComponent('Health', () => Health);
