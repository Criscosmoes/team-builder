import React from 'react'; 
import styled from 'styled-components'; 


const StyledForm = styled.div`

form {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
    height: 30vh; 
}


.inputs {
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 30%; 
}

label {
    margin-bottom: 10%; 
}


button {
    width: 20%; 
    padding: 2%; 
    background: lightblue; 
}

`


const Form = ({onInputChange, onFormSubmit, reset}) => {


    return (
        <StyledForm>
            <form onSubmit={onFormSubmit}>
                <div className="inputs">
                    <label>Name</label>
                    <input type="text" name="name" onChange={onInputChange} value={reset.name}/> 
                </div>

                <div className="inputs">
                    <label>Email</label>
                    <input type="email" name="email" onChange={onInputChange} value={reset.email} /> 
                </div>

                <div className="inputs">
                    <label>Role</label>
                    <select name="role" onChange={onInputChange} value={reset.role} >
                        <option value="">---select role---</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </div>
                <div className="inputs">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </StyledForm>
    )
}


export default Form; 