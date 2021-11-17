import React from 'react';

// state variables

const Name = ({ state, setState }) => {
  return (
    <div>
      <div>My name is {state.name}</div>
      <div>
        <button
          onClick={() => {
            setState({ ...state, name: 'Tony' });
          }}
        >
          Change Name
        </button>
      </div>
    </div>
  );
};

const Age = ({ state, setState }) => {
  return (
    <div>
      <div>My age is {state.age}</div>

      <div>
        <button
          onClick={() => {
            setState({ ...state, age: 21 });
          }}
        >
          Change Age
        </button>
      </div>
    </div>
  );
};

const Gender = ({ state, setState }) => {
  return (
    <div>
      <div>My gender is {state.gender}</div>
      <div
        onClick={() => {
          setState({ ...state, gender: 'other' });
        }}
      >
        <button>Change Gender</button>
      </div>
    </div>
  );
};
const Btns = ({ setState }) => {
  return (
    <div>
      <hr />
      <button
        onClick={() => {
          setState((fv) => {
            return { ...fv, name: 'Sanjay' };
          });
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setState((fv) => {
            return { ...fv, age: 22 };
          });
        }}
      >
        Change age
      </button>
      <button
        onClick={() => {
          setState((fv) => {
            return { ...fv, gender: 'Female' };
          });
        }}
      >
        Change Gender
      </button>
    </div>
  );
};
function App1() {
  const [state, setState] = React.useState({
    name: 'Jack',
    age: 34,
    gender: 'Male',
  });
  const [name, setName] = React.useState('');
  console.log(state);
  return (
    <div>
      <h1>My App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>name is "{name}"</div>
      <Name state={state} setState={setState} />
      <Age state={state} setState={setState} />
      <Gender state={state} setState={setState} />
      <Btns setState={setState} />
    </div>
  );
}
export default App1;
