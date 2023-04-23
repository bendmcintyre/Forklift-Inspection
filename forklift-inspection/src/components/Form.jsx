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
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import {
  CheckCircleIcon as CheckCircleOutlineIcon,
  ExclamationCircleIcon as ExclamationCircleOutlineIcon,
} from '@heroicons/react/24/outline';
import { RadioGroup } from '@headlessui/react';
import '../App.css';

// TODO: Migrate this to a 'utils' component
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
function PassFailRadioGroup({ name, defaultValue }) {
  return (
    <div className="col-span-12 sm:col-span-6 text-xl sm:text-md text-gray-700 font-medium">
      <RadioGroup name={name} defaultValue={defaultValue}>
        <RadioGroup.Label className="block text-base text-gray-200">
          {capitalizeFirstLetter(name)}
        </RadioGroup.Label>
        <div className="flex gap-6">
          <RadioGroup.Option
            value="fail"
            className="flex items-center rounded-md h-20 w-full
                       px-4 py-2
                       bg-white
                       shadow-md
                       ui-not-checked:border-none
                       ui-checked:border-2
                       ui-checked:border-red-700
                       focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1
                       focus:right-offset-gray-200"
          >
            <ExclamationCircleIcon className="hidden h-14 w-14 ui-checked:block fill-red-700" />
            <ExclamationCircleOutlineIcon className="hidden h-14 w-14 ui-not-checked:block stroke-red-700" />
            Fail
          </RadioGroup.Option>
          <RadioGroup.Option
            value="pass"
            className="flex items-center rounded-md h-20 w-full
                       px-4 py-2
                       bg-white
                       shadow-md
                       ui-not-checked:border-none
                       ui-checked:border-2
                       ui-checked:border-green-700
                       focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1
                       focus:right-offset-gray-200"
          >
            <CheckCircleIcon className="hidden h-14 w-14 ui-checked:block fill-green-800" />
            <CheckCircleOutlineIcon className="hidden h-14 w-14 ui-not-checked:block stroke-green-800" />
            Pass
          </RadioGroup.Option>
        </div>
      </RadioGroup>
    </div>
  );
}
function InputWithLabel({ name, value, onChange = '', autoComplete = '', type = 'text' }) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={name} className="block text-md font-medium text-gray-200">
        {capitalizeFirstLetter(name)}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
        className="mt-1 block w-full rounded-md border-gray-300 text-slate-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
    <div className="container mx-auto">
      Spinner...
    </div>
  ) : (
    <div className="container mx-auto">
      <form id="inspection" onSubmit={handleSubmit} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <InputWithLabel
                name="name"
                onChange={handleChange}
                value={inputs.name ? inputs.name : ''}
                autoComplete="given-name"
              />
              <InputWithLabel
                name="date"
                type="date"
                onChange={handleChange}
                value={inputs.date ? fixDateFormat(inputs.date) : ''}
              />
              <InputWithLabel
                type="text"
                name="lift"
                onChange={handleChange}
                value={inputs.lift ? inputs.lift : ''}
              />
              <InputWithLabel
                type="number"
                name="hours"
                onChange={handleChange}
                value={inputs.hours ? inputs.hours : ''}
              />
              <PassFailRadioGroup name="tires" defaultValue={passFailFor(inputs.tires)} />
              <PassFailRadioGroup name="horn" defaultValue={passFailFor(inputs.horn)} />
              <PassFailRadioGroup name="battery" defaultValue={passFailFor(inputs.battery)} />
              <PassFailRadioGroup name="controls" defaultValue={passFailFor(inputs.controls)} />
              <PassFailRadioGroup name="brakes" defaultValue={passFailFor(inputs.brakes)} />
              <PassFailRadioGroup name="steering" defaultValue={passFailFor(inputs.steering)} />
              <PassFailRadioGroup name="hydraulics" defaultValue={passFailFor(inputs.hydraulics)} />
              <PassFailRadioGroup name="overhead_guard" defaultValue={passFailFor(inputs.overhead_guard)} />
              <PassFailRadioGroup name="charger" defaultValue={passFailFor(inputs.overhead_guard)} />
              <PassFailRadioGroup name="fall_arrest" defaultValue={passFailFor(inputs.overhead_guard)} />
              <PassFailRadioGroup name="is_load_plate_displayed" defaultValue={passFailFor(inputs.overhead_guard)} />
              <PassFailRadioGroup name="is_operators_manual_present" defaultValue={passFailFor(inputs.overhead_guard)} />
              <PassFailRadioGroup name="is_forklift_clean" defaultValue={passFailFor(inputs.overhead_guard)} />
              <div className="col-span-12 sm:col-span-6">
                <InputWithLabel
                  type="text"
                  name="deficiencies_present"
                  onChange={handleChange}
                  value={inputs.deficiencies_present ? inputs.deficiencies_present : ''}
                  className="col-span-12"
                />
              </div>
              <div className="col-span-12 sm:col-span-6 flex items-center justify-center gap-6">
                <Link
                  to="/inspections"
                  className="inline-flex items-center rounded-md border dark:border-slate-700 bg-gray-700 hover:bg-gray-600 px-4 py-2
                   text-sm font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:right-offset-green-700"
                >
                  BACK
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border dark:border-slate-700 bg-green-700 hover:bg-green-600 px-4 py-2
                   text-sm font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:right-offset-green-700"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default InspectForm;
