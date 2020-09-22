import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    front: this.props.pokeObj.sprites.front,
    back: this.props.pokeObj.sprites.back,
    clicked: false
  }


  changeClick = () => {
   if (this.state.clicked === true) {
     this.setState({clicked: false})
   } else {
     this.setState({clicked: true})
   }
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.clicked ? this.state.back : this.state.front} alt="oh no!" onClick={this.changeClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokeObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
