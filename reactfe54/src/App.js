import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './Components/DataBinding/DataBinding';
import DataBindingClassComponents from './Components/DataBinding/DataBindingClassComponents';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import DemoState from './Components/DemoState/DemoState';
import BaiTapChonXe from './Components/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponents /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
