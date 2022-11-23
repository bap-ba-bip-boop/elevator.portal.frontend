import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";
import { GetErrorReportById } from "../../Services/reportService";
import { useQuery } from "@tanstack/react-query";
import AddTechToErrRepInput from "../../Components/AddTechToErrRepInput";

const UpdateErrorReport = () => {
  const [comments, setComments] = useState([]);
  const [isDone, setisDone] = useState(null);
  const [ErrorReport, setErrorReport] = useState(null);

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
        return response;
      }),
  });

 

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occured</div>;

  return (
    <>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Status</label>
          <div className="col-sm-10">
            <select onClick={(e) => setisDone(e.target.value)}>
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


      <PostComment reportId={ReportId}/>
      
      <h2>Comments: </h2>
      {comments?.map((comment) => (
        <CommentItem {...comment} key={comment.id}/>
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

    fetch("https://localhost:7174/api/ErrorReport/CreateComment", requestOptions).then((response) => {
      console.log(response);
      debugger
    });
  };

  return (
    <form onSubmit={HandleSubmit} >
        <div className="CommentSubject">
          <div className="CommentSubjectLabel">
            <label>Subject</label>
          </div>
          <input onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Comment</label>
          <div className="col-sm-10">
            <textarea onChange={(e) => setComment(e.target.value)} />
          </div>
        </div>
        <button type="submit">Send Comment</button>
      </form>
  )
}

const CommentItem = ({commentSubject, commentText}) => {

  return (
    <div className="CommentSection">
          <div className="CommentSectionSubject" >
            <h2>{commentSubject}</h2>
          </div>
          <p className="CommentSectionText" >
            {commentText}
          </p>
        </div>
  )
}

export default UpdateErrorReport;
