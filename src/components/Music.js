
import React from 'react'
import axios from 'axios'
import { getRecentTopTracks, getReccsForTracks, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../actions/spotify'
import { genRandomString } from '../actions/util'
import s from '../styles/app.style'
import { withRouter } from 'react-router-dom'

class Music extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isSignedIn: false,
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
	
	login() {
		let scope = 'user-read-private user-top-read';
		this.props.history.push(`https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(CLIENT_ID)}
							&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${encodeURIComponent(genRandomString(16))}`);
	}
	
	render() {
		return (
			<div>
				{this.state.isSignedIn ? 
					<div>
					</div>
					:
					<div>
						<h3>Sign in with Spotify for personalized music info</h3>
						<button onClick={this.login}>hii</button>
					</div>
				}
			</div>
			
		);
	}
}

export default withRouter(Music);

