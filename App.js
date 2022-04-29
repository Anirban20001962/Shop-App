import React from 'react';
import Navigation from './Navigation/Navigation';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { combineReducers } from 'redux';
import { productReducer } from './Redux/product';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({ product: productReducer });
const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}),
});

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
