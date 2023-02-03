import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css';
// import PassFail from './PassFail';

function InspectForm() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(inputs))

    const API_URL = 'https://forklift-inspection-backend.vercel.app/inspections'

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    }).then(response => response.json())
      .then(data => {
        if(data.data != null) {
          alert(data.message)
          navigate('/inspect')
        }
      })
  }

  return (
    <form onSubmit={handleSubmit} 
      className="form-group">
      
      {/* Lift + Operator Info: */}
      <div className="col-2">
        <div className="input-group">
          <label className='info' htmlFor='name'>Name:</label>
          <input required className='input'
            type="text" 
            name="name" 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className='info' htmlFor='date'>Date:</label>
          <input required className='input'
            type="date" 
            name="date" 
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="col-2">
        <div className="input-group">
          <label className='info' htmlFor='lift'>Lift:</label>
          <input required className='input'
            type="text" 
            name="lift" 
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className='info' htmlFor='hours'>Hours:</label>
          <input required className='input'
            type="number" 
            name="hours" 
            onChange={handleChange}
          />
          
        </div>
      </div>
      
      {/* Maintenance Status: */}
      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='tires'>Tires:</label>
          <select required className='input' 
            name="tires" 
            // value={inputs.tires|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='horn'>Horn:</label>
          <select required className='input' 
            name="horn" 
            // value={inputs.horn|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='battery'>Battery:</label>
          <select required className='input' 
            name="battery" 
            // value={inputs.battery|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
      </div>

      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='controls'>Controls:</label>
          <select required className='input' 
            name="controls" 
            // value={inputs.controls|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='brakes'>Brakes/Brake Fluid:</label>
          <select required className='input' 
            name="brakes" 
            // value={inputs.brakes|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='steering'>Steering:</label>
          <select required className='input' 
            name="steering" 
            // value={inputs.steering|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
      </div>

      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='hydraulics'>Hydraulics:</label>
          <select required className='input' 
            name="hydraulics" 
            // value={inputs.hydraulics || ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='overhead_guard'>Overhead Guard:</label>
          <select required className='input' 
            name="overhead_guard" 
            // value={inputs.overhead_guard || ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='charger'>Charger:</label>
          <select required className='input' 
            name="charger" 
            // value={inputs.charger|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
      </div>

      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='fall_arrest'>Seat Belt / Fall Arrest:</label>
          <select required className='input' 
            name="fall_arrest" 
            // value={inputs.fall_arrest|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='is_load_plate_displayed'>Is load plate displayed / free from damage?:</label>
          <select required className='input' 
            name="is_load_plate_displayed" 
            // value={inputs.is_load_plate_displayed|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='is_operators_manual_present'>Is the operators manual present?:</label>
          <select required className='input' 
            name="is_operators_manual_present" 
            // value={inputs.is_operators_manual_present|| ""} 
            onChange={handleChange}
          >
            <option value="" readOnly></option>
            <option value={true}>Pass</option>
            <option value={false}>Fail</option>
          </select>
        </div>
      </div>

      <div className="col">
          <div className="input-group">
            <label className='info' htmlFor='is_forklift_clean'>Is the forklift clean, free of trash, excess oil and grease?:</label>
            <select required className='input' 
              name="is_forklift_clean" 
              // value={inputs.is_forklift_clean|| ""} 
              onChange={handleChange}
            >
              <option value="" readOnly></option>
              <option value={true}>Pass</option>
              <option value={false}>Fail</option>
            </select>
          </div>
      </div>

      <div className="col">
          <div className="input-group">
            <label className='info' htmlFor='deficiencies_present'>If any deficiencies are present, describe below:</label>
            <input className='input'
            type="text" 
            name="deficiencies_present" 
            // value={inputs.deficiencies_present || ""} 
            onChange={handleChange}
          />
          </div>
      </div>
  
    <div className='actions'>
      <button className='button' type='reset'>RESET</button>
      <button className='button' type='submit'>SUBMIT</button>
    </div>
</form>
  )
}

export default InspectForm