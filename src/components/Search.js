import React from 'react'

class Search extends React.Component {
  
  state = {
    search: ""
  }
  
  
  changeHandler = (e) => {
    e.persist();
    this.setState({search: e.target.value})
    this.props.changeHandler(this.state.search)
  }
  
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onChange={this.changeHandler} value={this.state.search}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
