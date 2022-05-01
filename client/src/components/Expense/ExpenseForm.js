import React, {useState} from 'react';
import { Form , Row, Col, FormControl, Button } from 'react-bootstrap';
// import {CloudinaryContext} from 'cloudinary-react';


const ExpenseForm = (props)=>{
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredType, setEnteredType] = useState('Expense');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');

    const titleChangeHandler = (event)=> {
        setEnteredTitle(event.target.value);
    }

    const descriptionChangeHandler = (event)=>{
        setEnteredDescription(event.target.value);

    }
 
    const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const uploadImage =() => {
        const data = new FormData();
        data.append('file', image)
        data.append('upload_preset', 'tutorial')
        data.append("cloud_name", 'breellz')
        fetch("https://api.cloudinary.com/v1_1/dgpwctfjt/image/upload",{
            method: 'post',
            body: data
        }).then((resp) => resp.json()).then(data => {
            setUrl(data.url)
        })
    }
    const submitHandler =(event) => {
        event.preventDefault();  

        const expenseData = {
            description: enteredDescription,   
            amount: enteredAmount, 
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredDescription('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <Row className="align-items-center">
            <Col sm={2} className="my-1">
                <label>Date</label>
                <Form.Control  type="date" value={enteredDate} min="2021-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
            </Col>
    
            <Col sm={2} className="my-1">
                <label>Income/Expense</label>
                <Form.Select value={enteredType} onChange={(e) => setEnteredType(e.target.value)} required>
                <option value="">Select Type</option>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
                </Form.Select>
            </Col>    

            <Col sm={2} className="my-1">
                <label>Title</label>
                <Form.Control type="Title" value={enteredTitle} onChange={titleChangeHandler}/>
            </Col>

            <Col sm={2} className="my-1">
                <label>Amount</label>
                <Form.Control type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </Col>

            <Col sm={2} className="my-1">
                <label>Description</label>
                <Form.Control type="text" value={enteredDescription} onChange={descriptionChangeHandler}/>
            </Col>
            <Col sm={2} className="my-1">
                <label>Upload</label>
                <Form.Control type="file" onChange={(e)=> setImage(e.target.files[0])}/>
            </Col>

            <Col xs="auto" className='my-1'>
                <Button type="submit" onClick={uploadImage}>Add</Button>
            </Col>
            </Row>
    </form>
    );
};

export default ExpenseForm;