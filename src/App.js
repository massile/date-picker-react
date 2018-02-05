import React from 'react';
import DatePicker from './components/Datepicker';

const App = () => (
    <div>
      <DatePicker value="2017/03/12" format="YYYY/MM/DD" name="start" />
      {/* <DatePicker value="2010-03-12" name="start" /> */}
    </div>
);

export default App;
