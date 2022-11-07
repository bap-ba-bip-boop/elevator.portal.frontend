//import '/Style/ErrorReport.css';
import '../../../Style/ErrorReport.css'
import React from "react"
import { Component } from "react"

export class ErrorReport extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: '',
            assignedTechnician: '',
            comments: ''
        }
    }

    handleStatusChange = event => {
        this.setState({
            status: event.target.value
        })
    }

    handleAssignedTechnicianChange = event => {
        this.setState({
            assignedTechnician: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.status} ${this.state.assignedTechnician} ${this.state.comments}`)
        event.preventDefault()
    }
  
    render() {
        const { status, assignedTechnician, comments } = this.state
     return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Status</label>
                <select value={status} onChange={this.handleStatusChange}>
                    <option value="outoforder">Out of order</option>
                    <option value="undercontruction">Under Construction</option>
                    <option value="functioning">Functioning</option>
                </select>
            </div>
            <div>
                <label>Assigned Technician</label>
                <select value={assignedTechnician} onChange={this.handleAssignedTechnicianChange}>
                    <option value="roger">Roger</option>
                    <option value="pontare">Pontare</option>
                    <option value="vindarnaviskar">Vindarna viskar</option>
                </select>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handleCommentsChange}/>
            </div>
            <button type="submit">Send Comment</button>
            <br>
            </br>
            <button type="submit">Submit</button>
        </form>
      
    )
  }
}

export default ErrorReport