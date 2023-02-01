import { Table, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function DailyChecklist() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");

    const API_URL = "https://forklift-inspection-backend.vercel.app";
    
    // Fetch all checklist records
    const getData = async () => {
        document.title = "Daily Checklist"

        const rawResponse = await fetch(API_URL + "/daily_checklist")
        const response = await rawResponse.json()

        if(response.count !== 0){    
            setData(response.data)
        }
    }

    const refreshData = () => {
        getData()
    }
    
    useEffect(() => {
        getData()
    }, [])

    // Remove a checklist record by id
    const removeData = async (id) => {
        const rawResponse = await fetch(API_URL + "/daily_checklist/" + id, {
            method: "DELETE"
        })

        const response = await rawResponse.json()
        alert(response.message)
    }

    // Display data in table rows
    const displayData = data.map(el => {
        if(data.count <= 0){
            return (
                <tr key={data.count}>
                    <td colSpan={9} className="text-center">No records found.</td>
                </tr>
            )
        }else{
            return (
                <tr key={el._id}>
                    <td><Link to={`/daily-checklist/${el._id}`}
                        className="fw-semibold text-decoration-none">{el.truck_no}</Link></td>
                    <td>{el.building_no}</td>
                    <td>{el.shift}</td>
                    <td>{el.is_internal_combustion ? '✔️' : ''}</td>
                    <td>{el.is_electric ? '✔️' : ''}</td>
                    <td>{el.hour_meter.total_hours}</td>
                    <td>{el.operated_by}</td>
                    <td>{el.supervised_by}</td>
                    <td>
                        <div className="d-flex">
                            <Link to={`/daily-checklist/${el._id}`} 
                                className="btn btn-primary btn-sm me-2">Edit</Link>
                            <Button variant="danger" 
                                size="sm" 
                                className="fw-semibold" 
                                onClick={() => removeData(el._id)}>Remove</Button>
                        </div>
                    </td>
                </tr>
            )
        }
    })

    // const noRecord = <tr key={data.count}>
    //     <td colSpan={9} className="text-center">No records found.</td>
    // </tr>

    return (
        <Container>
            <div className="mb-4 d-flex justify-content-between align-items-center"> {/* got this from bootstrap docs */}
                <h1>Daily Checklist</h1>
                <div>
                    <Button variant="outline-primary" className="me-2" onClick={refreshData}>Refresh</Button>
                    <Link to="/daily-checklist/new" className="btn btn-primary">Add new inspection</Link> {/* get and attach the classnames of bootstrap button*/}
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Truck No.</th>
                        <th>Building No.</th>
                        <th>Shift</th>
                        <th>Internal Combustion</th>
                        <th>Electric</th>
                        <th>Hour Meter</th>
                        <th>Operated By</th>
                        <th>Supervised By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.length <= 0 ? noRecord : displayData} */}
                    {displayData}
                </tbody>
            </Table>
        </Container>
    )
}

export default DailyChecklist