import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [txt, setTxt] = useState('');
  const [txtList, setTxtList] = useState([]);

  const del = (index) => {
    const newList = [...txtList];
    newList.splice(index, 1);
    setTxtList(newList);
  };

  const edit = (index) => {
    const newTxt = prompt("Edit", txtList[index]);
    if (newTxt !== null) {
      const newList = [...txtList];
      newList[index] = newTxt;
      setTxtList(newList);
    }
  };

  const alldel = () => {
    setTxtList([]);
  };

  const handleAdd = () => {
    if (txt.trim() !== '') {
      setTxtList([...txtList, txt]);
      setTxt('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">TO DO LIST</div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                placeholder='write anything'
                  type="text"
                  className="form-control"
                  value={txt}
                  onChange={(e) => setTxt(e.target.value)}
                />
                <div className="input-group-append">
                  <button onClick={handleAdd} className="btn btn-primary">Add</button>
                </div>
              </div>
              {txtList.map((text, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{text}</span>
                  <div>
                  <button onClick={() => del(index)} className="btn btn-danger btn-sm mr-2">Delete</button>
                    <button onClick={() => edit(index)} className="btn btn-secondary btn-sm">Edit</button>
                  </div>
                </div>
              ))}
              {txtList.length > 0 && (
                <div className="text-center">
                  <button onClick={alldel} className="btn btn-danger">Delete All</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
