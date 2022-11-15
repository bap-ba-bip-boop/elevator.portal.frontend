import React from 'react'
import { useState, useEffect } from 'react'
// import { Comment } from '../../Reports/Comment'
import { QueryClient, useMutation } from 'react-query'


export const ErrorReport = ({ErrorReport}) => {

const queryClient = new QueryClient()
const {ElevatorId} = useParams();

const [status, setStatus] = useState('')
const [assignedTechnician, setAssignedTechnician] = useState('')
const [comment, setComment] = useState('')
const [partTask, setPartTask] = useState('')

const onChange = event => setValue(event.target.value);

<QueryClientProvider client={queryClient}>
  <ErrorReport />
  <ReactQueryDevtools />
</QueryClientProvider>


function ErrorReport() {
  
  const { data: assignedTechnician} = useQuery('assignedTechnician', getTechnician)
  const { data, error, isLoading} = useQuery({
    queryKey: ['errorReport'],
    queryFn: () =>
      fetch('https://localhost:7174/api/ErrorReport').then(res =>
        res.json())
  });
}

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message


const mutation = useMutation(postComment, {
  onSuccess: () => {
    queryClient.invalidateQueries('comment')
  }
})


let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(errorReportViewData, {
        method: "POST",
        header: errorReportViewData.errorReportMethodHeaders,
        body: JSON.stringify({
          status: status,
          assignedTechnician: assignedTechnician,
          comment: comment,
          partTask: partTask
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setStatus("Status Updated");
        setAssignedTechnician(assignedTechnician);
        setComment("");
        setPartTask("")
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <><><form onSubmit={handleSubmit}>
          <div class="form-group row">
              <label for="status" class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-10">
                  <select onChange={onChange}>
                      <option value={isDone}>Done</option>
                      <option value={isDone}>Not Done</option>
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label for="assignedTechnician" class="col-sm-2 col-form-label">Assigned Technician</label>
              <div class="col-sm-10">
                  <select onChange={e => setTechnician(e.target.value)}>
                    <option selected disabled value={-1}>Choose Technician</option>
                        {
                            data.map((assignedTechnician) => (
                              <li key={assignedTechnician.id}>{assignedTechnician.make}</li>
                            ))
                        }
                  </select>
              </div>
          </div>
          <div class="form-group row">
              <label for="comments" class="col-sm-2 col-form-label">Comment</label>
              <div class="col-sm-10">
                  <textarea value={comment} onChange={onChange} />
              </div>
          </div>
          <button type="submit">Send Comment</button>
          <br>
          </br>
          
      </form></>
      <div class="partTask">
            <h2>Part Tasks</h2>
            <div class="item">
                <p>Deluppgift 1</p>
                <input type="checkbox" />
            </div>
            <div class="item">
                <p>Deluppgift 2</p>
                <input type="checkbox" />
            </div>
            <div class="item">
                <p>Deluppgift 3</p>
                <input type="checkbox" />
            </div>
            <div class="item">
                <p>Deluppgift 4</p>
                <input type="checkbox" />
            </div>
            <button type="submit" >Submit</button>
        </div></>
  )
}

