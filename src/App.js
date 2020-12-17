import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "./actions/global.actions";

const App = () => {
  const dispatch = useDispatch();
  const testDataList = useSelector((state) => state.global.value);

  const handleChange = () => {
    updateValue(dispatch);
  };

  return (
    <div className="App">
      <button onClick={() => handleChange()}>Test</button>
      {!!testDataList?.length && (
        <ul>
          {testDataList.map(({ title }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
