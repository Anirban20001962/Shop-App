import HeaderButton from './HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import React from 'react';

const Icon = (props) => (
	<HeaderButtons HeaderButtonComponent={HeaderButton}>
		<Item
			title={props.title}
			iconName={props.iconName}
			color={props.color}
			onPress={props.action}
		/>
	</HeaderButtons>
);

export default Icon;
