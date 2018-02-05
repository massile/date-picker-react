import React, { Component } from 'react';
import DatePicker from './Datepicker';

class App extends Component {
  render() {
    return (
      <DatePicker value="2017/03/12" format="YYYY/MM/DD" name="start" />
    );
  }
}

export default App;
