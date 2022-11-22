import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllTechnicians } from "../../Services/technicianApiService.jsx";
import { GetErrorReportById } from "../../Services/reportService";
import { useQuery } from "@tanstack/react-query";
import AddTechToErrRepInput from "../../Components/AddTechToErrRepInput";

const UpdateErrorReport = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");
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

  var dataToSend = {
    commentSubject: subject,
    commentText: comment,
    errorReportId: ReportId
  };

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  };

  const PostComment = (e) => {
    e.preventDefault();
    console.log("hello");

    fetch("https://grupp5elevatorapidev.azurewebsites.net/api/ErrorReport/CreateComment", requestOptions).then((response) => {
      console.log(response);
      setComments(null);
    });
  };

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
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Assigned Technician</label>
          <div className="col-sm-10">
            <AddTechToErrRepInput ErrorReport={report} Technicans={technicians} />
          </div>
        </div>

        <br></br>
        <button type="submit">Save</button>
      </form>


      <form>

      </form>
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
        </div>

      <form onSubmit={PostComment} >
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

      <h2>Comments: </h2>
      {comments?.map((comment) => (
        <div className="CommentSection" key={comment.id}>
          <div className="CommentSectionSubject">
            <h2 key={comment.id}>{comment.commentSubject}</h2>
          </div>
          <p className="CommentSectionText" key={comment.id}>
            {comment.commentText}
          </p>
        </div>
      ))}
    </>
  );
};

export default UpdateErrorReport;
