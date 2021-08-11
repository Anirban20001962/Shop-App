import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const HeaderUpdatedButton = (props) => {
	return <HeaderButton IconComponent={Ionicons} iconSize={25} {...props} />;
};

export default HeaderUpdatedButton;
