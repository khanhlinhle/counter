import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Children from './components/Children';


function App() {

  let count = useSelector(state => state.count);
  const [bgColor, setBgColor] = useState("white")
  const [number, setNumber] = useState(0);
  let dispatch = useDispatch();

  const handleChange = (e) => {
    setBgColor(e.target.value);
  }

  const handleNumber = (e) => {
    setNumber(parseInt(e.target.value));
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={3}>
            <h3>Counting box: {count}</h3>
            <Button variant="outline-success" onClick={() => dispatch({ type: "Increment", payload: number })}>Increment</Button>
            {
              count <= 0 ?
                <Button variant="outline-danger" onClick={() => dispatch({ type: "Decrement", payload: number })} disabled>Decrement</Button>
                :
                <Button variant="outline-danger" onClick={() => dispatch({ type: "Decrement", payload: number })}>Decrement</Button>
            }
            <Button variant="outline-secondary" onClick={() => dispatch({ type: "Reset" })}>Reset</Button>
            <Form inline>
              <FormControl type="number" placeholder="Input your number" onChange={handleNumber}></FormControl>
              <FormControl type="text" placeholder="Input your color" onChange={handleChange}></FormControl>
            </Form>
          </Col>

          <Col xs={9}>
            {
              Array(count).fill("box").map(box => {
                return (
                  <Children bgColor={bgColor} count={count} />
                )
              })
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
