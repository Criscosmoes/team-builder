import React from 'react'; 
import styled from 'styled-components'; 



const StyledMemberList = styled.div`

& {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    height: 30vh; 
}

.member {
    text-align: center; 
    width: 20%; 
}

h2 {
    margin: 3%; 
}


`


const MemberList = ({list}) => {


    const renderedList = list.map((cur,index) => {
        return (
            <div className="member" key={index}>
                <h2>{cur.name}</h2>
                <h2>{cur.email}</h2>
                <h2>{cur.role}</h2>
            </div>
        )
    })


    return (
        <StyledMemberList>
            {renderedList}
        </StyledMemberList>
    )
}


export default MemberList; 