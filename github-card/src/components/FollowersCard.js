import React from "react"; 

const FollowersCard = (props) => {
    console.log("props on Followers component", props )
    return(
        <>
        <img src={ props.data.avatar_url } />
        <h3> UserName: { props.data.login } </h3> 
        </> 
    )
}

export default FollowersCard; 
