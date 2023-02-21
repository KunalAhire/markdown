import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import InputEditor from './components/InputEditor';
import Preview from './components/Preview';
import { useState } from 'react';

function App() {

  const [data, setdata] = useState("# Hello World \n ## This is a sub-heading...");

  return (
    <div className="App">
      <InputEditor data={setdata} text={data}/>
      <Preview data={data} />
    </div>
  );
}

export default App;