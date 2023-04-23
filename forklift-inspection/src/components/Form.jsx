import {
  React,
  useState,
  useEffect,
} from 'react';
import {
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { RadioGroup } from '@headlessui/react';
import classes from '../styles/Form.module.scss';

// TODO: Migrate this to a 'utils' component

function PassFailRadioGroup({ name, id }) {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className={classes.passFailRadioGroupContainer}>
      <RadioGroup onChange={(value) => setSelectedValue(value)}>
        <div className={classes.radioGroupContainer}>
          <RadioGroup.Option
            value="fail"
            className={`${classes.radioOption} ${selectedValue === 'fail' ? classes.radioOptionSelected : ''}`}
            id={`${id}-fail`}
            name={name}
          >
            FAIL
          </RadioGroup.Option>
          <RadioGroup.Option
            value="pass"
            className={`${classes.radioOption} ${selectedValue === 'pass' ? classes.radioOptionSelected : ''}`}
            id={`${id}-pass`}
            name={name}
          >
            PASS
          </RadioGroup.Option>
        </div>
      </RadioGroup>
    </div>
  );
}

function InputWithLabel({ name, value, onChange = '', autoComplete = '', type = 'text' }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={name} />
      <input
        required
        type={type}
        name={name}
        id={name}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
        className={classes.inputWithLabel}
      />
    </div>
  );
}

function passFailFor(value) {
  if (value) {
    return 'pass';
  }

  return 'fail';
}

// TOODO: Move state management to reducer and dispatch/consume events
function InspectForm() {
  const location = useLocation(); // got this from https://reactrouter.com/en/main/hooks/use-location

  const [isLoading, setIsLoading] = useState(true); // remote data not yet fetched
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); // got this from https://reactrouter.com/en/main/hooks/use-navigate

  const API_URL = 'https://forklift-inspection-backend.vercel.app';

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasIdProperty = Object.prototype.hasOwnProperty.call(inputs, '_id');

    let route = '';
    let method = '';
    if (hasIdProperty) {
      route = `/inspections/${inputs._id}`;
      method = 'PUT';
    } else {
      route = '/inspections';
      method = 'POST';
    }

    fetch(API_URL + route, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    }).then((response) => response.json())
      .then((data) => {
        if (data.data != null) {
          alert(data.message);
          navigate('/inspections');
        }
      });
  };

  const handleAPIResponse = (response) => {
    setIsLoading(false);
    setInputs(response.data);
  };

  const fetchData = async () => {
    const id = location.search.split('=').reverse()[0];
    const rawResponse = await fetch(`${API_URL}/inspections/${id}`);
    const response = await rawResponse.json();

    if (typeof response.message !== 'object') { // if string, it means that the response is either no record or with record
      console.log(response.data);
      document.title = `Inspections | ${response.data.name}`;
      handleAPIResponse(response);
    }
  };

  const fixDateFormat = (date) => {
    const d = new Date(date);
    let month = d.getMonth() + 1;
    month = (month < 10) ? `0${month}` : month;
    const day = (d.getDate() < 10) ? `0${d.getDate()}` : d.getDate();

    return [d.getFullYear(), month, day].join('-');
  };

  // TODO: Determine the 'proper' way to handle loading data without violating
  //       the associated ESLint Rule
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Make an actual Loader component lol
  return isLoading ? (
    <div>
      Spinner...
    </div>
  ) : (
    <div className="container mx-auto">
      <form id="inspection" onSubmit={handleSubmit} action="#" method="POST">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">

            <div className="col-span-12 sm:col-span-6">
              <label className={classes.inputWithLabelText} htmlFor="name">Name</label>
              <InputWithLabel
                name="name"
                onChange={handleChange}
                value={inputs.name ? inputs.name : ''}
                autoComplete="given-name"
              />
              <label className={classes.inputWithLabelText} htmlFor="date">Date</label>
              <InputWithLabel
                name="date"
                type="date"
                onChange={handleChange}
                value={inputs.date ? fixDateFormat(inputs.date) : ''}
              />
              <label className={classes.inputWithLabelText} htmlFor="lift">Lift</label>
              <InputWithLabel
                type="text"
                name="lift"
                onChange={handleChange}
                value={inputs.lift ? inputs.lift : ''}
              />
              <label className={classes.inputWithLabelText} htmlFor="hours">Hours</label>
              <InputWithLabel
                type="number"
                name="hours"
                onChange={handleChange}
                value={inputs.hours ? inputs.hours : ''}
              />
            </div>

            <label className={classes.formLabel} htmlFor="tires">Tires</label>
            <PassFailRadioGroup className={classes.formContainer} name="tires" id="tires" defaultValue={passFailFor(inputs.tires)} />

            <label className={classes.formLabel} htmlFor="horn">Horn</label>
            <PassFailRadioGroup name="horn" id="horn" defaultValue={passFailFor(inputs.horn)} />

            <label className={classes.formLabel} htmlFor="battery">Battery</label>
            <PassFailRadioGroup name="battery" id="battery" defaultValue={passFailFor(inputs.battery)} />

            <label className={classes.formLabel} htmlFor="controls">Controls</label>
            <PassFailRadioGroup name="controls" id="controls" defaultValue={passFailFor(inputs.controls)} />

            <label className={classes.formLabel} htmlFor="brakes">Brakes</label>
            <PassFailRadioGroup name="brakes" id="brakes" defaultValue={passFailFor(inputs.brakes)} />

            <label className={classes.formLabel} htmlFor="steering">Steering</label>
            <PassFailRadioGroup name="steering" id="steering" defaultValue={passFailFor(inputs.steering)} />

            <label className={classes.formLabel} htmlFor="hydraulics">Hydraulics</label>
            <PassFailRadioGroup name="hydraulics" id="hydraulics" defaultValue={passFailFor(inputs.hydraulics)} />

            <label className={classes.formLabel} htmlFor="overhead_guard">Overhead Guard</label>
            <PassFailRadioGroup name="overhead_guard" id="overhead_guard" defaultValue={passFailFor(inputs.overhead_guard)} />

            <label className={classes.formLabel} htmlFor="charger">Charger</label>
            <PassFailRadioGroup name="charger" id="charger" defaultValue={passFailFor(inputs.charger)} />

            <label className={classes.formLabel} htmlFor="fall_arrest">Fall Arrest</label>
            <PassFailRadioGroup name="fall_arrest" id="fall_arrest" defaultValue={passFailFor(inputs.fall_arrest)} />

            <label className={classes.formLabel} htmlFor="is_load_plate_displayed">Is Load Plate Displayed</label>
            <PassFailRadioGroup name="is_load_plate_displayed" id="is_load_plate_displayed" defaultValue={passFailFor(inputs.is_load_plate_displayed)} />

            <label className={classes.formLabel} htmlFor="is_operators_manual_present">Is Operators Manual Present</label>
            <PassFailRadioGroup name="is_operators_manual_present" id="is_operators_manual_present" defaultValue={passFailFor(inputs.is_operators_manual_present)} />

            <label className={classes.formLabel} htmlFor="is_forklift_clean">Is Forklift Clean</label>
            <PassFailRadioGroup name="is_forklift_clean" id="is_forklift_clean" defaultValue={passFailFor(inputs.is_forklift_clean)} />

            <div className={classes.inputWithLabelContainer}>
              <label htmlFor="is_forklift_clean">Deficiencies Present</label>
              <InputWithLabel
                type="text"
                name="deficiencies_present"
                onChange={handleChange}
                value={inputs.deficiencies_present ? inputs.deficiencies_present : ''}
                className={classes.inputWithLabel}
              />
            </div>

            <div className={classes.inspectionFormButtonContainer}>
              <Link
                to="/inspections"
                className={`${classes.inspectionFormButton} ${classes.inspectionFormBackButton}`}
              >
                BACK
              </Link>
              <button
                type="submit"
                className={`${classes.inspectionFormButton} ${classes.inspectionFormSubmitButton}`}
              >
                SUBMIT
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default InspectForm;
