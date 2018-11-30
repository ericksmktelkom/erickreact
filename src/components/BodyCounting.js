import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class BodyCounting extends React.Component {
    state = {
    counter: 0,
    backgroundColor:'#fff'
    }

    componentDidMount(){
        setInterval(this.handleChangeBacgroundColor, 2000)
    }

    handleChangeBacgroundColor = () => {
        this.setState({
            backgroundColor: this.getRandomColor()
        })
    }

    handlePressbuttonPLUS = () => {
        //alert('Button Plus')
        const currentCounter = this.state.counter;
        this.setState({
            counter: currentCounter + 1
        })
    }
    handlePressbuttonMINUS = () => {
        //alert('Button Plus')
        const currentCounter = this.state.counter;
        this.setState({
            counter: currentCounter - 1
        })
    }

    getRandomColor(){
        var letters = '0123456789ABCDE';
        var color ='#';
        for (var i = 0; i<6; i++){
            color += letters [Math.floor(Math.random() * 16)]
        }
        return color;
    }



    handlePressbuttonRESET = () => {
            //alert('Button Plus')
            
            this.setState({
                counter: 0
            })
        }

        render() {
            return (
                <View style={[
                    styles.container,
                    {backgroundColor: this.state.backgroundColor}]}>
                    <Text style={styles.number} >
                        {/* pemanggilanstate counter */}
                        {this.state.counter}
                    </Text>
                    {/* koding untuk button */}
                    <Button
                        title=" + PLUS"
                        color='red'
                        onPress={this.handlePressbuttonPLUS}
                    />


                    <Button
                        title=" - MINUS"
                        color='coral'
                        onPress={this.handlePressbuttonMINUS}
                    />
                    <Button
                        title=" RESET"
                        color='gold'
                        onPress={this.handlePressbuttonRESET}
                    />



                </View>
            )
        }

    }



    const styles = StyleSheet.create({
        container: {
            flex: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        // ukuran angka besar
        number: {
            fontSize: 200,
            margin: 20,
            color: 'blue'
        }
    })