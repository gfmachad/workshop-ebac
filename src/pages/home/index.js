import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      users: [],
    };
  }

  componentDidMount() {
    const users = [
      {
        id: 1,
        login: 'gfmachad',
        name: 'Guilherme Machado',
      },
      {
        id: 2,
        login: 'vfmachado',
        name: 'Vinicius Machado',
      },
    ];
    this.setState({
      users: users,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="app">
        <div className="app-body">
          <p>Select user to check Github profile:</p>
          <ul>
            {isLoading ? (
              <RenderLoader />
            ) : (
              users.map((item) => (
                <RenderUserLine
                  key={item.id}
                  login={item.login}
                  name={item.name}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function RenderLoader() {
  return <li>Loading...</li>;
}

function RenderUserLine({ login, name }) {
  return (
    <li>
      <Link to={`/users/${login}`}>
        {name} - {login}
      </Link>
    </li>
  );
}
export default Home;
