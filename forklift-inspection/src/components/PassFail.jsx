import {
  useState,
  React,
} from 'react';

function PassFail() {
  const [myTest, setMyTest] = useState('Pass');

  const handleChange = (event) => {
    setMyTest(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <select value={myTest} onChange={handleChange}>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        <option value="NA">N/A</option>
      </select>
    </form>
  );
}

export default PassFail;
