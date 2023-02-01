import { useState } from 'react';
import ReactDOM from "react-dom/client";
import '../src/form.css';
import PassFail from '../src/components/passfail.js';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      
      {/* Lift + Operator Info: */}
      <label><p className='info'>Name:</p>
      <input className='input'
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
    
      <label><p className='info'>Date:</p>
      <input className='input'
        type="date" 
        name="date" 
        value={inputs.date || ""} 
        onChange={handleChange}
      />
      </label>
      

      <label><p className='info'>Lift:</p>
        <input className='input'
          type="text" 
          name="lift" 
          value={inputs.lift|| ""} 
          onChange={handleChange}
        />
        </label>

        <label><p className='info'>Hours:</p>
        <input className='input'
          type="numbers" 
          name="hours" 
          value={inputs.hours|| ""} 
          onChange={handleChange}
        />
        </label>

        {/* Maintenance Status: */}

        <label ><p className='test01'>Tires:</p>
        <select className='input'
          type="select" 
          name="tires" 
          value={inputs.tires|| PassFail} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>
        
        <label><p className='test01'>Horn:</p>
        <select className='input'
          type="text" 
          name="horn" 
          value={inputs.horn|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test01'>Battery:</p>
        <select className='input'
          type="text" 
          name="battery" 
          value={inputs.battery|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test01'>Controls:</p>
        <select className='input'
          type="text" 
          name="controls" 
          value={inputs.controls|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test01'>Brakes/Brake Fluid:</p>
        <select className='input'
          type="text" 
          name="brakes" 
          value={inputs.brakes|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test01'>Steering:</p>
        <select className='input'
          type="text" 
          name="steering" 
          value={inputs.steering|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Hydraulics:</p>
        <select className='input'
          type="text" 
          name="hydraulic" 
          value={inputs.hydraulic|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Overhead Guard:</p>
        <select className='input'
          type="text" 
          name="overhead" 
          value={inputs.overhead|| ""} 
          onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Charger:</p>
        <select className='input'
        type="text" 
        name="charger" 
        value={inputs.charger|| ""} 
        onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Seat Belt / Fall Arrest::</p>
        <select className='input'
        type="text" 
        name="fallarrest" 
        value={inputs.fallarrest|| ""} 
        onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Is load plate displayed/ free from damage?:</p>
        <select className='input'
        type="text" 
        name="loadplate" 
        value={inputs.loadplate|| ""} 
        onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Is operators manual present?:</p>
        <select className='input'
        type="text" 
        name="manual" 
        value={inputs.manual|| ""} 
        onChange={handleChange}
        >
       <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>

        <label><p className='test02'>Is forklift clean, free of trash, excess oil and grease??:</p>
        <select className='input'
        type="text" 
        name="clean" 
        value={inputs.clean|| ""} 
        onChange={handleChange}
        >
        <option value=""></option>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
        </select>
        </label>
    
    <input class="button" type="submit" />
</form>
  )
}
console.log()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);