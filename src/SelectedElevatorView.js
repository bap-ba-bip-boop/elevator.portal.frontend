import React from 'react'



export const SelectedElevatorView = (props) => {

        

        var data = {
        ElevatorId : "1",
        Status : "Functioning",
        Technichan : "John",
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
        ]

        }

        

        
        const listComments = data.CommentContent.map((comment) => 
            <div className='CommentSection'>
                <h4 className='CommentUser'>{comment.Name}</h4>
                <p className='CommentContent'>{comment.Content}</p>
            </div>
        );
   
        const listInformation = data.Information.map((info) => 
            <div className='InformationSection'>
                <p className='CommentContent'>Building: {info.Building}</p>
                
                <p className='CommentContent'>City: {info.City}</p>
                
                <p className='CommentContent'>Max weight: {info.MaxWeight}</p>
                
                <p className='CommentContent'>Type: {}</p>
            </div>
        );

  return (

    

    <div>

        <h1 className='elevatorIdSection'>ElevatorId: {data.ElevatorId}</h1>

        <div className='statusSection'>
            <h3>Status: </h3>
            <h4>{data.Status}</h4>
        </div>

        <div className="descriptionSection"> 
            <h3>Description: </h3>
            <p>{data.Description}</p>
        </div>

        <div className="technichanSection"> 
            <h3>Technichan: </h3>
            <h4>{data.Technichan}</h4>
        </div>

        <h3>Comments: </h3>
        {listComments}
        

        <script>
            {console.log()}
        </script>

    </div>  

    
  )
}
