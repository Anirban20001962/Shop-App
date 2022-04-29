import { createSlice } from '@reduxjs/toolkit';
import Product from '../data/dummy-data';

const initialState = {
	products: Product,
	orders: [],
	cart: [],
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addCartHandler: {
			reducer: (state, action) => {
				const newItem = action.payload;
				const items = [...state.cart];
				const result = items.findIndex((el) => newItem.id === el.id);
				if (result >= 0) {
					items[result].noOfItems++;
					const price = items[result].price;
					items[result].price = price * items[result].noOfItems;
					state.cart = items;
					return state;
				}
				state.cart.push({ ...newItem, noOfItems: 1 });
				return state;
			},
			prepare: (item) => ({ payload: item }),
		},
		removeCartHandler: {
			reducer: (state, action) => {
				const cartItems = [...state.cart];
				if (action.payload.noOfItems > 1) {
					let index = cartItems.findIndex(
						(el) => el.id === action.payload.id
					);
					cartItems[index].noOfItems--;
					const result1 = [...state.products].find(
						(el) => el.id === action.payload.id
					);
					cartItems[index].price =
						cartItems[index].price - result1.price;
					state.cart = cartItems;
					return state;
				}
				let temp = cartItems.filter(
					(el) => el.id !== action.payload.id
				);
				state.cart = temp;
				return state;
			},
			prepare: (id, noOfItems) => ({ payload: { id, noOfItems } }),
		},
		addOrders: {
			reducer: (state, action) => {
				const { order, date, price } = action.payload;
				state.orders.push({
					...order,
					date,
					price,
				});
				return state;
			},
			prepare: (order, date, price) => ({
				payload: { order, date, price },
			}),
		},
	},
});

const { reducer, actions } = productSlice;

export { reducer as productReducer, actions as productActions };
