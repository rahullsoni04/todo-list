import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function AddTask({addTask}) {
    const [tittle,setTittle] = useState("");
    const [desc,setDesc] = useState("");
    const actionOnSubmit = (e) =>{
        e.preventDefault();
        if(!tittle || !desc)
            alert("Please enter a description and title");
        else{
            addTask(tittle, desc);
            setTittle("")
            setDesc("")
        }
    }
  return (
    <div className="container my-5 center">
        <h3>Add Task</h3>
        <Form onSubmit={actionOnSubmit}>
        <Form.Group className="mb-3" controlId="tittle">
            <Form.Label>Tittle</Form.Label>
            <Form.Control value={tittle} onChange={(e)=>setTittle(e.target.value)} type="text" placeholder="Enter tittle" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control value={desc} onChange={(e)=>setDesc(e.target.value)} type="text" as="textarea" placeholder="Enter description" />
        </Form.Group>
        <Button variant="btn btn-sm btn-success" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default AddTask;