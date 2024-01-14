import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';




export default function form({todoInput, onChange, onAddTodo}) {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    }
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Hedef"
          aria-describedby="inputGroup-sizing-default"
          value={todoInput}
          onChange={handleInputChange}
        />
        <Button onClick={onAddTodo}>Ekle</Button>
      </InputGroup>
    </>
  )
}
