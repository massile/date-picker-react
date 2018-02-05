import React from 'react';
import jss from 'jss';
import jssNested from 'jss-nested';
import DatePicker from './components/Datepicker';

jss.use(jssNested())

const App = () => (
    <div>
      <DatePicker value="2017/03/12" format="YYYY/MM/DD" name="start" />
    </div>
);

export default App;
