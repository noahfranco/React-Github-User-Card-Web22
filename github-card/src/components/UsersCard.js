import React from "react"; 
import styled from "styled-components"; 

const Color = styled.div`
background: lightgray; 
`

const UsersCard = (props) => {
    console.log("this is porps from UsersCard", props)
    return(
        <>
        <Color> 
           <img src={ props.data.avatar_url } />
           <h3> UserName: { props.data.name } </h3>
           <h3> Bio: { props.data.bio } </h3>
           <h3> Followers: { props.data.followers } </h3>
           <h3> Following: { props.data.following } </h3> 
        </Color>   
        </>
    )
}

export default UsersCard; 