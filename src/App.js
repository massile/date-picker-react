import React, { Component } from 'react';
import jss from 'jss';
import jssNested from 'jss-nested';
import DatePicker from './components/Datepicker';

jss.use(jssNested())

class App extends Component {
  state = {
    dateValue: "2017/03/12"
  };
  
  render() {
    return (
      <div>
        <DatePicker
          onChange={newDate => this.setState({ dateValue: newDate })}
          value={this.state.dateValue}
          format="YYYY/MM/DD"
          name="start"
        />
      </div>
    );
  }
} 

export default App;
