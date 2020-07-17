import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: '',
      UserText: '',
      Password: '',
      InvalidUsrORpass: '',
    };
  }
  DataFetch = async () => {
    const username = 'Febin';
    const password = 1234;
    if (this.state.UserText == username && this.state.Password == password) {
      await axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
          this.setState({InvalidUsrORpass: ''});
          if ((response.status = 'success')) {
            this.props.navigation.navigate('Home', {data: response.data});
          }
        })
        .catch((error) => alert(error));
    } else this.setState({InvalidUsrORpass: 'Invalid Username Or password'});
  };

  render() {
    return (
      <View style={styles.MainView}>
        <View style={styles.InnerView}>
          <TextInput
            style={styles.UserNameTxt}
            placeholder="Username"
            onChangeText={(Username) => this.setState({UserText: Username})}
            value={this.state.UserText}
          />
          <TextInput
            style={styles.PasswordTxt}
            placeholder="Password"
            onChangeText={(password) => this.setState({Password: password})}
            value={this.state.Password}
          />
          <Text style={styles.Validatetext}>{this.state.InvalidUsrORpass}</Text>
          <TouchableOpacity onPress={() => this.DataFetch()}>
            <View style={styles.LoginButton}>
              <Text>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {flex: 1, justifyContent: 'center', backgroundColor: 'white'},
  InnerView: {
    flex: 1 / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UserNameTxt: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: 'blue',
  },
  PasswordTxt: {
    height: 40,
    borderBottomColor: 'blue',
    width: '70%',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 12,
  },
  LoginButton: {
    height: 40,
    width: 150,
    backgroundColor: '#37b8bf',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 18,
  },
  Validatetext: {color: 'red'},
});
