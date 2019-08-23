
import React from 'react'
import axios from 'axios'
import { getRecentTopTracks, getReccsForTracks, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../actions/spotify'
import s from '../styles/app.style'

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
		let hashParams = {};
	  let e, r = /([^&;=]+)=?([^&;]*)/g,
	    q = window.location.hash.substring(1);
	  while ( e = r.exec(q)) {
	    hashParams[e[1]] = decodeURIComponent(e[2]);
	  }
	  if(!hashParams.access_token) {
	    window.location.href = `https://accounts.spotify.com/authorize?&client_id=${CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=authorization_code&redirect_uri=http://localhost:9000/`;
	  } else {
	    this.props.setToken(hashParams.access_token);
	  }
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

export default Music

