import React, { useState } from 'react';
import './index.css';
import styled from 'styled-components';
import FormComponent from './form.jsx';
import './index.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInputChange = (value) => {
    setTodoInput(value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };
  const deleteByValue = value => {
    setTodos(oldValues => {
      return oldValues.filter(todoValue => todoValue !== value)
    })
  }

  const toDo = todos.map((yapılacaklar, index) => (
     <li key={index}
      onClick={() => deleteByValue(yapılacaklar)}>
     {yapılacaklar}
     </li>));

  return (
    <>
      <div className='mainDiv'>
      <Wrapper>
        <Title>
          <div>To Do List</div>
          <FormComponent todoInput={todoInput} onChange={handleInputChange} onAddTodo={handleAddTodo} />
          <ul>
            {toDo}
          </ul>
        </Title>
      </Wrapper>
      </div>
    </>
  );
}

export default App;
