import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOURS, Items} from '../../database/Database';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { currencyFormat } from '../../utils/common';

const ProductCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
      style={{
        width: '48%',
        marginVertical: 14,
      }}>
      <View
        style={{
          width: '100%',
          height: 100,
          borderRadius: 10,
          backgroundColor: COLOURS.backgroundLight,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        {data.isOff ? (
          <View
            style={{
              position: 'absolute',
              width: '20%',
              height: '24%',
              backgroundColor: COLOURS.green,
              top: 0,
              left: 0,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.white,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              {data.offPercentage}%
            </Text>
          </View>
        ) : null}
        <Image
          source={data.productImage}
          style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          color: COLOURS.black,
          fontWeight: '600',
          marginBottom: 2,
        }}>
        {data.productName}
      </Text>
      {data.category == 'accessory' ? (
        data.isAvailable ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.green,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.green,
              }}>
              Available
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.red,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.red,
              }}>
              Unavailable
            </Text>
          </View>
        )
      ) : null}
      <Text>Rp {currencyFormat(data.productPrice)}</Text>
    </TouchableOpacity>
  );
};
export default ProductCard;
