import React from 'react';
import Navigation from './Navigation/Navigation';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStore, combineReducers } from 'redux';
import productReducer from './Redux/Reducers/product';
import { Provider } from 'react-redux';

const reducer = combineReducers({ product: productReducer });
const store = createStore(reducer);

export default function App() {
	let [fontsLoad] = useFonts({
		'open-sans-bold': require('./fonts/OpenSans-Bold.ttf'),
		'open-sans': require('./fonts/OpenSans-Regular.ttf'),
	});
	if (!fontsLoad) {
		return <AppLoading />;
	}
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}
