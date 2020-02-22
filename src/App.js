import React, { Comment, Component } from 'react'
import Nav from './components/layouts/Nav'
import Users from './components/users/Users'
import Search from './components/search/Search'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(users => this.setState({users: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { users, searchField } = this.state
    const filteredUsers = users.filter(user =>
      user.login.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <Nav />
        <div className="container">
          <Search handleChange={this.handleChange} />
          <Users users={filteredUsers} />
        </div>
      </div>
    )
  }
}

export default App;
