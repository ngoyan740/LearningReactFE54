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
import BTRenderDSPhim from './Components/RenderWithMap/BTRenderDSPhim';
import DemoProps from './Components/Props/DemoProps';
import ProducListRCC from './Components/Props/ProducListRCC';
import ProductList from './Components/Props/PropWithEvent/ProductList';
import PropsWithEvent from './Components/Props/PropWithEvent/PropsWithEvent';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponents /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BTRenderDSPhim /> */}
      {/* <DemoProps/> */}
      {/* <ProducListRCC /> */}
      <PropsWithEvent />
    </div>
  );
}

export default App;
