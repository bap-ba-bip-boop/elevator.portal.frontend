import React, {Component} from "react";

export class UpdateErrorReport extends Component {
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
  
    /* 
        const listComments = data.CommentContent.map((comment) => 
            <div className='CommentSection'>
                <h4 className='CommentUser'>{comment.Name}</h4>
                <p className='CommentContent'>{comment.Content}</p>
            </div>
        );
    */

    render() {
        const { status, assignedTechnician, comments } = this.state
     return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Status</label>
                <select value={status} onChange={this.handleStatusChange}>
                    <option value="outoforder">Out of order</option>
                    <option value="undercontruction">Under Contruction</option>
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

            {/* 
            <div>
                <h3>Comments: </h3>
                {listComments}
            </div>
         */}
            <button type="submit">Submit</button>
        </form>
      
    )
  }
}

export default UpdateErrorReport