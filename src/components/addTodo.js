import React, { useState } from 'react'


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Title and description cannot blank');
        } else {
          addTodo(title, desc);
          setTitle('');
          setDesc('');
        }
    }
  return (
    <div className="container">
        <h4>Add A TODO</h4>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            className="form-control"
            id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo descriptio 
          </label>
          <input
            type="text"
            className="form-control"
            id="desc" value={desc} onChange={(e) => {setDesc(e.target.value)}}
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
