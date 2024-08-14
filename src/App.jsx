import { useDispatch, useSelector } from "react-redux";
import { fetchByEndpoint } from "./store";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const words = data?.url?.split("/").splice(-3, 2);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchByEndpoint(value));
  };

  const onChnage = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <div className="container">
        <h1 className="mb-2">Swapi</h1>
        <div className="mb-3">
          <form onSubmit={onSubmit} className="input-group flex-nowrap">
            <span className="input-group-text" id="basic-addon3">
              https://swapi.dev/api/
            </span>
            <input
              type="text"
              value={value}
              onChange={onChnage}
              className="form-control w-100"
              id="basic-url"
              name="endpoint"
              aria-describedby="basic-addon3 basic-addon4"
            />
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </form>
        </div>
        {words && (
          <div className="d-flex gap-1">
            <p className="p-2 bg-secondary text-light rounded-2">{words[0]}</p>
            <p className="p-2 bg-secondary text-light rounded-2">{words[1]}</p>
          </div>
        )}
        {data && (
          <pre className="border p-2">{JSON.stringify(data, null, 2)}</pre>
        )}
        <button onClick={reset} className="btn btn-warning">
          Reset
        </button>
      </div>
    </div>
  );
}
