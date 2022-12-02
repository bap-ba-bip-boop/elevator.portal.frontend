import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";
import { GetErrorReportById } from "../../Services/reportService";
import { useQuery } from "@tanstack/react-query";
import AddTechToErrRepInput from "../../Components/AddTechToErrRepInput";
import Textfield from "@mui/material/TextField"
import { Box, Button, Card, Checkbox, Paper, TextareaAutosize } from "@mui/material";

const UpdateErrorReport = () => {
  const [comments, setComments] = useState([]);
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
        setRows([...response.rows]);
        return response;
        
      }),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occured</div>;

  return (
    <Box p={5} justifyContent='space-around' alignContent='center' sx={{display : 'flex'}}>
        <Box p={1} m={1} sx={{flexDirection : 'column' }}>
          <form>
            <div>
              <label>Status</label>
              <div>
                <select>
                  <option value={false}>Out Of Order</option>
                  <option value={true}>Functioning</option>
                </select>
              </div>
            </div>

        {
        /* <div>
          <label>Assigned Technician</label>
          <div>
            <AddTechToErrRepInput ErrorReport={report} Technicans={technicians} />
          </div>
        </div> */
        }

        <br/>
        
        <button type="submit">Save</button>

      </form>

      <h2>rows: </h2>

      <PostRow ReportId={ReportId}/>

      { 
        rows?.map((row) => (
         <PartTaskItem row={row} key={row.id}/>
        ))
      }
      

      </Box>

      <Box p={1} m={1} sx={{ flexDirection : 'column'}}>

      <PostComment reportId={ReportId}/>
      
      <h2>Comments: </h2>
      
        {
          comments?.map((comment) => (

            <CommentItem {...comment} key={comment.id}/>

          ))
        }

      </Box>

    </Box>
  );
};

const PartTaskItem = ({row}) => {

  const [checkBoxisDone, setcheckBoxisDone] = useState(row.isDone);

  const ClickCheckBox = (row) => {
    console.log(row)

    const isDone = (checkBoxisDone === null || checkBoxisDone === false) ? true : false;

    const dataToSend = {
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

    fetch(`https://grupp5elevatorapidev.azurewebsites.net/api/errorreportrow/${row.id}`, requestOptionsPUT)
    .then(
      (response) => 
      {
      console.log(response);
      setcheckBoxisDone(isDone);
      }
    )
  } 

  return (
    <>
    <div key={row.id}>
      <div>
        <h2>
          Subject: 
        </h2>
          <p key={row.id}>{row.reportSubject}</p>
        
    </div>
    <div>
      <h2>
        Comment:
      </h2>
        <p key={row.id}>{row.reportComment}</p>
      </div>
    </div>

    {row.breakdownTask && <p key={row.breakdownTask.id}>{row.breakdownTask.reason}</p>}
  
    <div>
      <label>
        Is done?
        <Checkbox onClick={() => ClickCheckBox(row)} key={row.id} checked={checkBoxisDone === true}  />
      </label>
    </div> 
  <br/>
  </>
  )
}

const PostRow = ({ReportId}) => {
  const [comment, setComment] = useState(null);
  const [subject, setSubject] = useState(null);

  var dataToSend = {
    breakdownTask : null,
    reportComment : comment,
    reportSubject : subject,
    reportId : ReportId,
    isDone : false
  }

  const requestOptionsPOST = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataToSend),
  };

  const OnHandleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://grupp5elevatorapidev.azurewebsites.net/api/errorreportrow`, requestOptions)
    .then((response) => 
    {
      console.log(response);
    })
  } 

  return (
    <Box>
    <form onSubmit={OnHandleSubmit}>
      <div>
        <div>
          <Textfield variant="outlined" label="Subject" onChange={(e) => setSubject(e.target.value)}/>
        </div>
    <br/>
        <div>
          <TextareaAutosize style={{width : 230, height : 100}} placeholder="Comment" onChange={(e) => setComment(e.target.value)}/>
        </div>

        <Button variant="outlined" type="submit">Add row</Button>

      </div>
    </form>
    </Box>
  )

}


const PostComment = ({reportId}) => {



  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");

  var dataToSend = {
    commentSubject: subject,
    commentText: comment,
    errorReportId: reportId,
    employeeId : 'c14e56f7-4b72-4953-9e3d-8571f2075176' //Borde ändras när inloggningen har lagts till.
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
    <Box>
      <form onSubmit={HandleSubmit} >
        <div className="CommentSubject">
          <div className="CommentSubjectLabel">
          </div>
          <Textfield variant="outlined" label="Subject" onChange={(e) => setSubject(e.target.value)} />
        </div>
        <br/>
        <div className="form-group row">
          <div className="col-sm-10">
            <TextareaAutosize placeholder="Comment" variant="outlined" style={{width: 230, height : 100}} label="Comment" onChange={(e) => setComment(e.target.value)} />
          </div>
        </div>
        <br/>
        <Button variant="outlined" type="submit">Send Comment</Button>
      </form>
    </Box>
  )
}



const CommentItem = ({commentSubject, commentText}) => {

  return (
    <Paper sx={{padding : '10px 20px'}}>
          <Box>
            <h3 sx={{margin : 0, textAlign : 'left'}}>{commentSubject}</h3>
          </Box>
          <Box>
            <p sx={{textAlign : 'left'}}>{commentText}</p>
          </Box>
    </Paper>
  )
}

export default UpdateErrorReport;
