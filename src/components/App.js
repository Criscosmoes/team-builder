import React, {useState} from 'react' 
import Form from './Form'; 
import './App.css'; 
import MemberList from './../MemberList';

const App = () => {


    const [list, setList] = useState([]); 

    const [initalValues, setInitialValues] = useState({
        name: '', email: '', role: ''
    })


    const onInputChange = (e) => {

        const {value, name} = e.target; 

        setInitialValues({
            ...initalValues, 
            [name]: value
        })

    }

    const onFormSubmit = (e) => {

        e.preventDefault(); 

        if(!initalValues.name || !initalValues.email || !initalValues.role) return; 


        setList([...list, initalValues]); 

        setInitialValues({
            name: '', 
            email: '', 
            role: ''
        })



    }





    return (
        <div className="container">
            <Form onInputChange={onInputChange} onFormSubmit={onFormSubmit} reset={initalValues} /> 
            <MemberList list={list} />
        </div> 
    )
}


export default App; 