import React from 'react';
import { Paper } from 'material-ui';
import Productions from '../components/Productions';
import Output from '../components/Output';

class Content extends React.Component {
  constructor (props) {
    super(props);
    this.style = {
      // boxSizing: 'border-box',
      // padding: '20px',
      margin: '5px auto',
      display: 'inline-block',
      width: '100%',
      verticalAlign: 'top',
      maxWidth: '600px',
      minWidth: '500px'
    };
  }
  render () {
    return (
    <section id='Content' style={this.style}>
      <Paper style={{padding: '20px'}}>
        <Productions />
        <Output />
      </Paper>
    </section>
    );
  }
}

export default Content;
