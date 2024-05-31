import { Container } from "semantic-ui-react";
import "./App.css";
import Selector from "./components/Selector";
import SelectedList from "./components/SelectedList";

function App() {
  // lesson from the class , it might be useful for data processing from database
  let data = [{ data1: 10 }, { data2: "road" }, { position: { x: 5, y: 7 } }];
  // {data.map((single_data)=>(<component_name property1=single_data.data1
  // property2 = single_data.data2
  // property2 = single_data.position />)
  // }

  return (
    <Container>
        <Selector properties="props" anotherprop={5} />
        <SelectedList/>
    </Container>
  );
}

export default App;
