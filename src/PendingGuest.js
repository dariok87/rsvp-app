import React from 'react';
import PropTypes from 'prop-types';
import span from './GuestName';

const PendingGuest = props => 
	<li>
		<span>
			{props.name}
		</span>
	</li>;

PendingGuest.propTypes = {
	name: PropTypes.string.isRequired
};

export default PendingGuest;