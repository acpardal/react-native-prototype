import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
 
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://imagens.publico.pt/imagens.aspx/1375175?tp=UH&db=IMAGENS&type=JPG&w=1720&h=968&act=cropResize" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
 
export default class Demo extends Component {
    render () {
        return (
            <ScrollView style={{ flex: 1 }}>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        );
    }
}