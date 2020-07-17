import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
export default class Home extends Component {
  render() {
    let params = this.props.route.params.data;
    return (
      <View>
        <FlatList
          contentContainerStyle={{padding: 10}}
          data={params.data}
          renderItem={({item}) => {
            return (
              <View style={styles.ContainerView}>
                <Text>Id:{item.id}</Text>
                <Text>Name:{item.employee_name}</Text>
                <Text>Age:{item.employee_age}</Text>
                <Text>Salary:{item.employee_salary}</Text>
                <Image
                  style={styles.ImageView}
                  source={{
                    uri: 'http://lorempixel.com/400/200/sports/1/Dummy-Text',
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerView: {
    height: width / 4,
    backgroundColor: '#72baed',
    width: '95%',
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  ImageView: {
    height: 50,
    width: 50,
    borderRadius: 40,
    alignSelf: 'center',
    position: 'absolute',
    left: 15,
    bottom: 20,
  },
});
