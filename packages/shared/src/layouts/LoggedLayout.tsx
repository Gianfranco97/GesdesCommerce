import React from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import {
  Icon,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components'
import { useRouter } from 'next/router'
import BasicLayout from './BasicLayout'
import Colors from '../constants/Colors'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
}

export default function LoggedLayout(props: IProps) {
  const router = useRouter()
  const isWebApp = Platform.OS === 'web'
  const { children } = props

  const onLogout = () => {
    if (isWebApp) {
      localStorage.clear()
      router.push('/')
    }
  }

  const openCart = () => {
    if (isWebApp) {
      router.push('/carrito')
    }
  }

  const goToHome = () => {
    if (isWebApp) {
      router.push('/products')
    }
  }

  const [menuVisible, setMenuVisible] = React.useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const renderOverflowMenuAction = () => (
    <View style={styles.rightElementsConatiner}>
      <TouchableOpacity onPress={openCart}>
        <Icon name="shopping-cart-outline" style={styles.cartIcon} />
      </TouchableOpacity>

      <OverflowMenu
        anchor={() => (
          <TopNavigationAction
            icon={<Icon name="more-vertical" />}
            onPress={toggleMenu}
          />
        )}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={<Icon name="person-outline" />}
          title="Cuenta"
        />
        <MenuItem
          accessoryLeft={<Icon name="log-out" />}
          title="Logout"
          onPress={onLogout}
        />
      </OverflowMenu>
    </View>
  )

  const renderTitle = () => (
    <TouchableOpacity style={styles.titleContainer} onPress={goToHome}>
      <Icon
        style={styles.logo}
        fill={Colors.CeladonBlue}
        name="shopping-bag-outline"
      />
      <Text style={styles.titleText}>GedesCommerce</Text>
    </TouchableOpacity>
  )

  return (
    <BasicLayout>
      <>
        <TopNavigation
          title={renderTitle}
          accessoryRight={renderOverflowMenuAction}
        />

        {children}
      </>
    </BasicLayout>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
  },
  titleText: {
    fontSize: 20,
  },
  logo: {
    marginHorizontal: 16,
    width: 28,
    height: 28,
  },
  cartIcon: {
    marginHorizontal: 10,
    width: 24,
    height: 24,
    tintColor: Colors.CeladonBlue,
  },
  rightElementsConatiner: {
    flexDirection: 'row',
  },
})
