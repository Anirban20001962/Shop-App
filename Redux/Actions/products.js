export const ADD_ORDERS = 'ADD_ORDERS';
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const addCartHandler = (item) => {
	return { type: ADD_CART, cartItem: item };
};

export const removeCartHandler = (id, noOfItems) => {
	return { type: REMOVE_CART, id, noOfItems };
};

export const addOrders = (order, date, price) => {
	return { type: ADD_ORDERS, order, date, price };
};
