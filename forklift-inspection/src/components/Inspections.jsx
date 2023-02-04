import { useEffect, useState } from "react";
import { Link }  from "react-router-dom"

export default function Inspections() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState("")

  const API_URL = "https://forklift-inspection-backend.vercel.app"
  // const API_URL = "http://localhost:5000/inspections"

  const fetchData = async () => {
    document.title = "Inspections"

    const rawResposne = await fetch(API_URL + "/inspections/")
    const response = await rawResposne.json()

    // console.log(response)

    if(response.count !== 0){
      setData(response.data)
    }else{
      setMessage(response.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])

  const removeData = async (id) => {
    const rawResposne = await fetch(API_URL + "/inspections/" + id, {
      method: 'DELETE'
    })

    const response = await rawResposne.json()

    alert(response.message)
  }

  const tableRows = data.map((el, index) => {
    return (
      <tr className= "tr" key={index}>
        <td className="td">{el.name}</td>
        <td className="td">{el.date}</td>
        <td className="td">{el.lift}</td>
        <td className="td">{el.hours}</td>
        <td>
          <Link to={`/inspect-form?id=${el._id}`} className="button-like">Edit</Link>
          <button className="button-like" onClick={() => {
            if(window.confirm("Are you sure you want to remove?")){
              removeData(el._id)
            }
          }}>Remove</button>
        </td>
      </tr>
    )
  })

  return (
    <div>
      
     
    <div>
        <Link to="/inspect-form" id="start-button">INSPECT</Link>
    </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Lift</th>
            <th>Hours</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
}
