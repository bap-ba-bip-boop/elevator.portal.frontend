import React, {useEffect} from 'react'



export const SelectedElevatorView = (props) => {

    const fetchAPI = () => {
        fetch("")
          .then(response => {
            return response.json()
          })
          .then(data => {
            
          })
      }

      useEffect(() => {
        fetchAPI()
      }, [])

        var data = {
        ElevatorId : "1",
        Status : "Functioning",
        Technichan : "John",
        ErrorReports : [
            {
                ErrorReportId : "001",
                ErrorReportDesc : "Lights broken."
            }
        ],
        Information : [
            {
                MaxWeight : 1200,
                Building : "Alén 51A",
                City : "Stockholm",
                MidHeightElevator : true,
                LowHeightElevator : false
            }],
        CommentContent : [
            {
                DateNow : "2022",
                Name : "John Krasinski",
                Content : "Lorem"
            },
            {
                DateNow : "2022",
                Name : "John Krasinski",
                Content : "Lorem"
            },
            {
                DateNow : "2022",
                Name : "John Krasinski",
                Content : "Lorem"
            }
        ],
        HistoryLog : [
            {
               DateNow : 2022,
               Status : "Not Functioning",
               Value : 5 
            }
        ]

        }

        

        
        const listComments = data.CommentContent.map((comment) => 
            <div className='CommentSection'>
                <h4 className='CommentUser'>{comment.Name}</h4>
                <p className='CommentContent'>{comment.Content}</p>
            </div>
        );
        
        const listHistoryLog = data.HistoryLog.map((log) => 
            <table className='historyLogSection'>
                <thead className='historyLogTableHeader'>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody className='historyLogTableBody'>
                    <tr>
                        <td>{log.DateNow}</td>
                    </tr>
                    <tr>
                        <td>{log.Status}</td>
                    </tr>
                    <tr>
                        <td>{log.Value}</td>
                    </tr>
                </tbody>
            </table>
        );
   
        const listInformation = data.Information.map((info) => 
            <div className='InformationSection'>
                <p className='informationContent'>Building: {info.Building}</p>
                
                <p className='informationContent'>City: {info.City}</p>
                
                <p className='informationContent'>Max weight: {info.MaxWeight}</p>
            </div>
        );

        const listErrorReports = data.ErrorReports.map((ErrorReport) => 
            <div className='prevErrorReports'>
                <div className='errorReportName'>
                    <h4>{ErrorReport.ErrorReportId}</h4>
                    <p>{ErrorReport.ErrorReportDesc}</p>
                <div className='errorReportButton'>
                    <button>Update errorReport</button> 
                </div>
            </div>
        </div>
            
        );

  return (

    

    <div>

        <h1 className='elevatorIdSection'>ElevatorId: {data.ElevatorId}</h1>

        <div className='statusSection'>
            <h3>Status: </h3>
            <h4>{data.Status}</h4>
        </div>

        <div className="informationSection"> 
            <h3>Information: </h3>
            {listInformation}
        </div>

        <div>
            <h3>Technichan: </h3>
            <h4>{data.Technichan}</h4>
        </div>  

        <div>
            <h3>Current error reports: </h3>
            {listErrorReports}
        </div>

        <div>
            <h3>History log events: </h3>
            {listHistoryLog}
        </div>
        
        {/* Comment section ska in till update error report vyn */}
        <div>
            <h3>Comments: </h3>
            {listComments}
        </div>
        


        <script>
            {console.log()}
        </script>

    </div>  

    
  )
}
