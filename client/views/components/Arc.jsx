// ./src/components/Piechart/index.jsx
import React from 'react';
import d3 from 'd3';

class Arc extends React.Component {
  constructor() {
      super();
      this.arc = d3.svg.arc();
  }
  componentWillMount() {
      this.updateD3(this.props);
  }
  componentWillReceiveProps(newProps) {
      this.updateD3(newProps);
  }
  updateD3(newProps) {
      this.arc.innerRadius(newProps.innerRadius);
      this.arc.outerRadius(newProps.outerRadius);
  }
  render() {
    return (
        <path d={this.arc(this.props.data)}
              style={{fill: this.props.color}}></path>
    );
}
}
export default Arc;