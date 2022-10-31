import React from 'react'



export const SelectedElevatorView = (props) => {

        

        var data = {
        ElevatorId : "1",
        Status : "Functioning",
        Technichan : "John",
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
        
        const listItems = data.CommentContent.map((comment) => 
            <div className='CommentSection'>
                <h4 className='CommentUser'>{comment.Name}</h4>
                <p className='CommentContent'>{comment.Content}</p>
            </div>
        );
   

  return (

    

    <div>

        <h1 className='elevatorIdSection'>ElevatorId: {data.ElevatorId}</h1>

        <div className='statusSection'>
            <h3>Status: </h3>
            <h4>{data.Status}</h4>
        </div>

        <div className="technichanSection"> 
            <h3>Technichan: </h3>
            <h4>{data.Technichan}</h4>
        </div>

        <h3>Comments: </h3>
        {listItems}
        

        <script>
            {console.log()}
        </script>

    </div>  

    
  )
}
