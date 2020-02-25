import React, { Component } from 'react'
import Nav from './components/layouts/Nav'
import Users from './components/users/Users'
import Search from './components/search/Search'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      searchField: '',
      loading: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users')

    this.setState({ users: res.data, loading: false })
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
          <Users users={filteredUsers} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App;
