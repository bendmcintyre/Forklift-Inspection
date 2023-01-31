import { Table, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function DailyChecklist() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");

    const API_URL = "https://forklift-inspection-backend.vercel.app/";
    useEffect(() => {
        const getData = async () => {
            document.title = "Daily Checklist"
            const rawResponse = await fetch("https://forklift-inspection-backend.vercel.app/daily_checklist")
            const response = rawResponse.json()

            if(response.length !== 0){
                console.log(response)
                // setData(response)
            }else{
                setMessage("No record found")
            }
        } 

        getData()
    })

    return (
        <Container>
            <div className="mb-4 d-flex justify-content-end"> {/* got this from bootstrap docs */}
                <Link to="/inspect" className="btn btn-primary">Add new inspection</Link> {/* get and attach the classnames of bootstrap button*/}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default DailyChecklist