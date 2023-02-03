import { useState } from 'react';
import '../App.css';
import PassFail from './PassFail';

function InspectForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    console.log(inputs)
  }

  return (
    <form onSubmit={handleSubmit} className="form-group">
      
      {/* Lift + Operator Info: */}
      <div className="col-2">
        <div className="input-group">
          <label className='info' htmlFor='name'>Name:</label>
          <input required className='input'
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className='info' htmlFor='date'>Date:</label>
          <input required className='input'
            type="date" 
            name="date" 
            value={inputs.date || ""} 
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="col-2">
        <dvi className="input-group">
          <label className='info' htmlFor='lift'>Lift:</label>
          <input required className='input'
            type="text" 
            name="lift" 
            value={inputs.lift || ""} 
            onChange={handleChange}
          />
        </dvi>

        <div className="input-group">
          <label className='info' htmlFor='hours'>Hours:</label>
          <input required className='input'
            type="numbers" 
            name="hours" 
            value={inputs.hours|| ""} 
            onChange={handleChange}
          />
          
        </div>
      </div>
        {/* Maintenance Status: */}
      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='tires'>Tires:</label>
          <select required className='input'
            type="select" 
            name="tires" 
            value={inputs.tires|| PassFail} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='horn'>Horn:</label>
          <select required className='input'
            type="text" 
            name="horn" 
            value={inputs.horn|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='battery'>Battery:</label>
          <select required className='input'
            type="text" 
            name="battery" 
            value={inputs.battery|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='controls'>Controls:</label>
          <select required className='input'
            type="text" 
            name="controls" 
            value={inputs.controls|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='brakes'>Brakes/Brake Fluid:</label>
          <select required className='input'
            type="text" 
            name="brakes" 
            value={inputs.brakes|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='steering'>Steering:</label>
          <select required className='input'
            type="text" 
            name="steering" 
            value={inputs.steering|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='hydraulic'>Hydraulics:</label>
          <select required className='input'
            type="text" 
            name="hydraulic" 
            value={inputs.hydraulic|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='hydraulic'>Overhead Guard:</label>
          <select required className='input'
            type="text" 
            name="overhead" 
            value={inputs.overhead|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='charger'>Charger:</label>
          <select required className='input'
            type="text" 
            name="charger" 
            value={inputs.charger|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='fallarrest'>Seat Belt / Fall Arrest:</label>
          <select required className='input'
            type="text" 
            name="fallarrest" 
            value={inputs.fallarrest|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='loadplate'>Is load plate displayed / free from damage?:</label>
          <select required className='input'
            type="text" 
            name="loadplate" 
            value={inputs.loadplate|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='manual'>Is the operators manual present?:</label>
          <select required className='input'
            type="text" 
            name="manual" 
            value={inputs.manual|| ""} 
            onChange={handleChange}
          >
            <option value="" disabled></option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      <div className="col">
          <div className="input-group">
            <label className='info' htmlFor='clean'>Is the forklift clean, free of trash, excess oil and grease?:</label>
            <select required className='input'
              type="text" 
              name="clean" 
              value={inputs.clean|| ""} 
              onChange={handleChange}
            >
              <option value="" disabled></option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </div>
      </div>

      <div className="col">
          <div className="input-group">
            <label className='info' htmlFor='clean'>If any deficiencies are present, describe below:</label>
            <input  className='input'
            type="text" 
            name="deficiencies" 
            value={inputs.deficiencies || ""} 
            onChange={handleChange}
          />
          </div>
      </div>
  
    <button className='button' type='submit'>SUBMIT</button>
</form>
  )
}

export default InspectForm