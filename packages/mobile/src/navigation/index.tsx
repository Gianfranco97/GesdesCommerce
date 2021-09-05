import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Products from '../screens/Products'
import SingleProduct from '../screens/SingleProduct'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  )
}

export default MyStack
