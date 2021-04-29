import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/userService';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    const {
      params: { userLogin },
    } = this.props.match;

    const userService = new UserService();

    const profileData = userService
      .getUserProfile(userLogin)
      .then((profileData) =>
        this.setState({ profile: profileData, isLoading: false })
      );
  }

  render() {
    const { profile, isLoading } = this.state;
    return (
      <div className="app">
        <div className="app-body">
          <h1>User Profile</h1>
          <p>
            {isLoading ? 'loading...' : <RenderProfile profile={profile} />}
          </p>

          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </div>
    );
  }
}

function RenderProfile({ profile }) {
  return (
    <>
      <img src={profile.avatar_url} alt="Avatar" />
      <p>{profile.name}</p>
      <p>{profile.bio}</p>
    </>
  );
}
export default Profile;
