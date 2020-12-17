import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "./actions/global.actions";

const App = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.global.value);
  console.log('test: ',test )
  const handleChange = (value) => {
    updateValue(dispatch);
  };

  return (
    <div className="App">
      <button onClick={(e) => handleChange(e.target.value)}>Test</button>
      {!!test?.length && (
        <ul>
          {test.map(({ title }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
