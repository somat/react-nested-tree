import React, {Component} from 'react'
import PropTypes from 'prop-types'

export function LoopTree(props) {
    let items = [];
    for (let i = 0; i < props.data.length; i++) {
      items.push(props.children(props.data[i]));
    }
    return <div>{items}</div>;
}

class NestedTree extends Component {
  render() {
    return(
      <LoopTree data={this.props.data}>
        {(item) => {
          return (
            <ul key={item.data._id} className="treeview">
              <li key={item.data._id} className="treeItem">{item.data.name}</li>
              {
                item.children.length > 0 &&
                  <NestedTree data={item.children} />
              }
            </ul>
          )
        }}
      </LoopTree>
    )
  }
}

NestedTree.propTypes = {
  data: PropTypes.array.isRequired
}

export default NestedTree
