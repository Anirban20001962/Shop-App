import Product from '../../data/dummy-data';
import { ADD_ORDERS, ADD_CART, REMOVE_CART } from '../Actions/products';

const initialState = {
	products: Product,
	orders: [],
	cart: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDERS:
			return {
				...state,
				orders: [
					...state.orders,
					{
						...action.order,
						date: action.date,
						price: action.price,
					},
				],
				cart: [],
			};
		case ADD_CART:
			const newItem = action.cartItem;
			const items = [...state.cart];
			const result = items.findIndex((el) => newItem.id === el.id);
			if (result >= 0) {
				items[result].noOfItems++;
				const price = items[result].price;
				items[result].price = price * items[result].noOfItems;
				return { ...state, cart: items };
			}
			return {
				...state,
				cart: [
					...state.cart,
					{
						id: newItem.id,
						title: newItem.title,
						price: newItem.price,
						noOfItems: 1,
					},
				],
			};
		case REMOVE_CART:
			const cartItems = [...state.cart];
			if (action.noOfItems > 1) {
				let index = cartItems.findIndex((el) => el.id === action.id);
				cartItems[index].noOfItems--;
				const result1 = [...state.products].find(
					(el) => el.id === action.id
				);
				cartItems[index].price = cartItems[index].price - result1.price;
				return { ...state, cart: cartItems };
			}
			let temp = cartItems.filter((el) => el.id !== action.id);
			return { ...state, cart: temp };
		default:
			return state;
	}
};

export default productReducer;
