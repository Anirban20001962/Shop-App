import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import Orders from '../screens/Order';
import Cart from '../screens/Cart';
import Color from '../constants/colors';
import Icon from '../component/Icon';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const headerStyle = {
	headerStyle: {
		backgroundColor: Color.primary,
	},
	headerTintColor: 'white',
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
};

const MyDrawer = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContentOptions={{
					activeTintColor: Color.primary,
					activeBackgroundColor: '#eff5f5',
					labelStyle: {
						fontFamily: 'open-sans-bold',
					},
				}}
			>
				<Drawer.Screen
					name="Products"
					component={Navigation}
					options={{
						drawerIcon: (props) => (
							<Icon
								title="cart"
								iconName="cart-sharp"
								color={props.color}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="Orders"
					component={NavOrder}
					options={{
						drawerIcon: (props) => (
							<Icon
								title="order"
								iconName="pencil-sharp"
								color={props.color}
							/>
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

const NavOrder = () => {
	return (
		<Stack.Navigator screenOptions={headerStyle}>
			<Stack.Screen name="Orders" component={Orders} />
		</Stack.Navigator>
	);
};

const Navigation = () => {
	return (
		<Stack.Navigator screenOptions={headerStyle}>
			<Stack.Screen
				name="Products"
				component={Products}
				options={{ title: 'All Products' }}
			/>
			<Stack.Screen name="Details" component={ProductDetails} />
			<Stack.Screen
				name="Cart"
				component={Cart}
				options={{ title: 'Your Cart' }}
			/>
		</Stack.Navigator>
	);
};

export default MyDrawer;
