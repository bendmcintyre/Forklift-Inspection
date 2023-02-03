import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import '../App.css';
// import PassFail from './PassFail';

function InspectForm() {
  const [data, setData] = useState({});
  let location = useLocation(); // got this from https://reactrouter.com/en/main/hooks/use-location

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate() // got this from https://reactrouter.com/en/main/hooks/use-navigate

  const API_URL = 'https://forklift-inspection-backend.vercel.app'

  let passAndFail = [ // this is for the dropdown select
    {label: "", value: ""},
    {label: "Pass", value: true},
    {label: "Fail", value: false}
  ]

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL + "/inspections", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    }).then(response => response.json())
      .then(data => {
        if(data.data != null) {
          alert(data.message)
          navigate('/inspections')
        }
      })
  }

  const fetchData = async () => {
    let id = location.search.split('=').reverse()[0]
    const rawResponse = await fetch(API_URL + `/inspections/${id}`)
    const response = await rawResponse.json()

    if(typeof response.message !== 'object'){ // if string, it means that the response is either no record or with record
      console.log(response.data)
      document.title = `Inspections | ${response.data.name}`
      setData(response.data)
    }
  }

  const fixDateFormat = (date) => {
    let d = new Date(date)
    let month = d.getMonth() + 1
    month = (month < 10) ? `0${month}` : month
    let day = (d.getDate() < 10) ? `0${d.getDate()}` : d.getDate()
    
    return [d.getFullYear(), month, day].join('-')
  }

  useEffect(() => {
    fetchData()  
  }, [])

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
            value={data.name ? data.name : ''}
          />
        </div>

        <div className="input-group">
          <label className='info' htmlFor='date'>Date:</label>
          <input required className='input'
            type="date" 
            name="date" 
            onChange={handleChange}
            value={data.date ? fixDateFormat(data.date) : ''}
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
            value={data.lift ? data.lift : ''}
          />
        </div>

        <div className="input-group">
          <label className='info' htmlFor='hours'>Hours:</label>
          <input required className='input'
            type="number" 
            name="hours" 
            onChange={handleChange}
            value={data.hours ? data.hours : ''}
          />
          
        </div>
      </div>
      
      {/* Maintenance Status: */}
      <div className="col-3">
        <div className="input-group">
          <label className='info' htmlFor='tires'>Tires:</label>
          <select required 
            className='input' 
            name="tires" 
            // defaultValue={(data.tires) ? data.tires : ''}
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.tires && data.tires === option.value) ? data.tires : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='horn'>Horn:</label>
          <select required className='input' 
            name="horn" 
            // value={inputs.horn|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.horn && data.horn === option.value) ? data.horn : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='battery'>Battery:</label>
          <select required className='input' 
            name="battery" 
            // value={inputs.battery|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.battery && data.battery === option.value) ? data.battery : ''}>{option.label}</option>
              )
            })}
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
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.controls && data.controls === option.value) ? data.controls : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='brakes'>Brakes/Brake Fluid:</label>
          <select required className='input' 
            name="brakes" 
            // value={inputs.brakes|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.brakes && data.brakes === option.value) ? data.brakes : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='steering'>Steering:</label>
          <select required className='input' 
            name="steering" 
            // value={inputs.steering|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.steering && data.steering === option.value) ? data.steering : ''}>{option.label}</option>
              )
            })}
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
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.hydraulics && data.hydraulics === option.value) ? data.hydraulics : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='overhead_guard'>Overhead Guard:</label>
          <select required className='input' 
            name="overhead_guard" 
            // value={inputs.overhead_guard || ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.overhead_guard && data.overhead_guard === option.value) ? data.overhead_guard : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='charger'>Charger:</label>
          <select required className='input' 
            name="charger" 
            // value={inputs.charger|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.charger && data.charger === option.value) ? data.charger : ''}>{option.label}</option>
              )
            })}
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
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.fall_arrest && data.fall_arrest === option.value) ? data.fall_arrest : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>

        <div className="input-group">
          <label className='info' htmlFor='is_load_plate_displayed'>Is load plate displayed / free from damage?:</label>
          <select required className='input' 
            name="is_load_plate_displayed" 
            // value={inputs.is_load_plate_displayed|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.is_load_plate_displayed && data.is_load_plate_displayed === option.value) ? data.is_load_plate_displayed : ''}>{option.label}</option>
              )
            })}
          </select>
        </div>
        
        <div className="input-group">
          <label className='info' htmlFor='is_operators_manual_present'>Is the operators manual present?:</label>
          <select required className='input' 
            name="is_operators_manual_present" 
            // value={inputs.is_operators_manual_present|| ""} 
            onChange={handleChange}
          >
            {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.is_operators_manual_present && data.is_operators_manual_present === option.value) ? data.is_operators_manual_present : ''}>{option.label}</option>
              )
            })}
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
              {passAndFail.map((option, index) => {
              return(
                <option key={index} value={option.value} selected={(data.is_forklift_clean && data.is_forklift_clean === option.value) ? data.is_forklift_clean : ''}>{option.label}</option>
              )
            })}
            </select>
          </div>
      </div>

      <div className="col">
          <div className="input-group">
            <label className='info' htmlFor='deficiencies_present'>If any deficiencies are present, describe below:</label>
            <input className='input'
            type="text" 
            name="deficiencies_present" 
            value={data.deficiencies_present ? data.deficiencies_present : '' } 
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