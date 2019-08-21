
import React from 'react'
import { getRecentTopTracks, getReccsForTracks } from '../actions/spotify'

class Music extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			userTracks: '',
			userRecc: ''
		};
	}

	componentDidMount = () => {

	}

	async populateTracks() {
    const { data } = await getRecentTopTracks();
    this.setState({ userTracks: data });
	}
	
	async populateRecc() {
		const { data } = await getReccsForTracks();
		this.setState({ userRecc: data });
	}

	render() {
    return (
			<div>

			</div>
		
		);
	}
}

export default Music

