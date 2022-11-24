import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";
import { GetErrorReportById } from "../../Services/reportService";
import { useQuery } from "@tanstack/react-query";
import AddTechToErrRepInput from "../../Components/AddTechToErrRepInput";
import Textfield from "@mui/material/TextField"
import { Button, Card, Checkbox } from "@mui/material";

const UpdateErrorReport = () => {
  const [comments, setComments] = useState([]);
  const [isDone, setisDone] = useState(false);
  const [ErrorReport, setErrorReport] = useState(null);
  const [rows, setRows] = useState(null);
  const { ReportId } = useParams();

  const { data: technicians } = useQuery({ queryKey: ["employee"], queryFn: GetAllTechnicians });

  const {
    isLoading,
    error,
    data: report,
  } = useQuery({
    queryKey: ["errorreport", ReportId],
    queryFn: () =>
      GetErrorReportById(ReportId).then((response) => {
        console.log("response: ", response);
        setComments([...response.comments]);
        setRows([...response.rows])
        return response;
      }),
  });


  var dataToSend = {
    isDone : isDone
  }

  var requestOptionsPUT = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataToSend)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://localhost:7174/api/ErrorReportRow/${rows.id}`, requestOptionsPUT)
    .then(response => 
      {
      console.log(response);
      response.json();

      }
    )
  }

  

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occured</div>;

  return (
    <>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Status</label>
          <div className="col-sm-10">
            <select>
              <option value={false}>Out Of Order</option>
              <option value={true}>Functioning</option>
            </select>
          </div>
        </div>
        {/* <div className="form-group row">
          <label className="col-sm-2 col-form-label">Assigned Technician</label>
          <div className="col-sm-10">
            <AddTechToErrRepInput ErrorReport={report} Technicans={technicians} />
          </div>
        </div> */}

        <br></br>
        <button type="submit">Save</button>
      </form>

      <h2>rows: </h2>

      <form onSubmit={onHandleSubmit}>
      {
        rows?.map((row) => (
          <>
            <div>
              <div>
                <label>
                  Subject: 
                  <h2 key={row.id}>{row.reportSubject}</h2>
                </label>
            </div>

              <label>
                Comment:
                <h2 key={row.id}>{row.reportComment}</h2>
              </label>
            </div>
          
            <div>
              <label>
                Is done?
                <Checkbox type="radio" onChange={(e) => setisDone(e.target.value)} value={true} {...rows.isDone === true ? "checked" : ""}/>
              </label>
            </div> 
          <br/>
          </>
        ))
      }
        <Button variant="outlined" type="submit">Update</Button>
      </form>

      <br/>



      <PostComment reportId={ReportId}/>
      
      <h2>Comments: </h2>
      
      {comments?.map((comment) => (
        <div>
          <CommentItem {...comment} key={comment.id}/>
          <br/>
        </div>
      ))}
      
    </>
  );
};

const PostComment = ({reportId}) => {



  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");

  var dataToSend = {
    commentSubject: subject,
    commentText: comment,
    errorReportId: reportId,
    employeeId : 'c14e56f7-4b72-4953-9e3d-8571f2075176'
  };

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataToSend),
  };


  const HandleSubmit = (e) => {
    e.preventDefault();
    debugger
    console.log("hello");

    fetch("https://grupp5elevatorapidev.azurewebsites.net/api/errorreport/createcomment", requestOptions).then((response) => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={HandleSubmit} >
        <div className="CommentSubject">
          <div className="CommentSubjectLabel">
          </div>
          <Textfield variant="outlined" label="Subject" onChange={(e) => setSubject(e.target.value)} />
        </div>
        <br/>
        <div className="form-group row">
          <div className="col-sm-10">
            <Textfield variant="outlined" label="Comment" onChange={(e) => setComment(e.target.value)} />
          </div>
        </div>
        <br/>
        <Button variant="outlined" type="submit">Send Comment</Button>
      </form>
  )
}

const CommentItem = ({commentSubject, commentText}) => {

  return (
    <Card variant="outlined">
          <div className="CommentSectionSubject" >
            <h2>{commentSubject}</h2>
          </div>
          <p className="CommentSectionText" >
            {commentText}
          </p>
    </Card>
  )
}

export default UpdateErrorReport;
