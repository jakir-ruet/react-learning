import './App.css';
import MyProps from '../container/props/MyProps';
import MyMapping from '../container/mapping/MyMapping';
import MappingById from '../container/mappingById/MappingById';
import NestedMap from '../container/nestedmap/NestedMap';
import ClassComponent from '../container/classcomponent/ClassComponent';
import StateLifeCycle from '../container/classcomponent/statelifecycle/StateLifeCycle';
import StateHandler from '../container/statehandler/StateHandler';

function App() {
  return (
    <div className="app">
      <MyProps />
      <MyMapping />
      <MappingById />
      <NestedMap />
      <ClassComponent />
      <StateLifeCycle />
      <StateHandler />
    </div>
  );
}

export default App;
