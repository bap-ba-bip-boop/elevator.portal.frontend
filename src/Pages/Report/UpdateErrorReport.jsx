import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTechnicians } from "../../Services/employeeServices";
import { GetErrorReportById } from "../../Services/reportService";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../../Components/Header";
import { gridDensityHeaderGroupingMaxDepthSelector } from "@mui/x-data-grid";

const UpdateErrorReport = () => {
  const [rows, setRows] = useState([]);
  const [comment, setComment] = useState("");
  const [subject, setSubject] = useState("");
  const [assignedTechnician, setAssignedTechnician] = useState(null);
  const [isDone, setisDone] = useState(null);

  const { ReportId } = useParams();



  const { isLoading, error, data: technicians } = useQuery({ queryKey: ["employee"], queryFn: getTechnicians });
  const { data: report } = useQuery({
    queryKey: ["errorreport", ReportId],
    queryFn: () =>
      GetErrorReportById(ReportId).then((response) => {
        console.log(response);
        setRows([...response.rows]);
      }),
  });

  
    var dataToSend = {
      "reportSubject" : subject,
      "reportComment" : comment,
      "errorReportId" : ReportId
    };


    const requestOptions = {
      method: "POST",
        mode: "cors",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataToSend)
      };


      const PostComment = (e) => {

        e.preventDefault();
        console.log('hello')

        
      fetch('https://localhost:7174/api/errorreportrow', requestOptions)
      .then(response => 
      {
        console.log(response);
        setRows(null);
      })
   
    };





  const OnSave = () => {
    var dataToUpdate = {
      "isDone" : isDone,
      "assignedTechnician" : assignedTechnician
    };

    fetch(`https://grupp5elevatorapidev.azurewebsites.net/api/errorreport/${ReportId}`),
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Accept" : "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToUpdate)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            let comment = dataToUpdate;
            console.log(comment);
            comment.push(data);
          }),
      };
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occured</div>;

  return (
    <>
      <form onSubmit={OnSave}>
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
            <select>
              <option onClick={(e) => setAssignedTechnician(e.target.value)}>--Select technician--</option>
              {technicians?.map((technician) => (
                <option key={technician.id} >
                  {technician.employeeName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <br></br>
        <button type="submit">
          Save
        </button>
      </form>

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
        <button  type="submit">
          Send Comment
        </button>
      </form>

      <h2>Comments: </h2>
      {rows?.map((row) => (
        <div className="CommentSection" key={row.id}>
          <div className="CommentSectionSubject">
            <h2 key={row.id}>{row.reportSubject}</h2>
          </div>
          <p className="CommentSectionText" key={row.id}>{row.reportComment}</p>
        </div>
      ))}
    </>
  );
      };
export default UpdateErrorReport;
