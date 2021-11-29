import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "../carousel/style.css";

//action
import { setSearch, setPageDefault, getAllMovie, ResetSearch } from "../../Redux/Action/HomeAction";

export default function Nav() {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearch(searchName));
    dispatch(setPageDefault(1));
    dispatch(getAllMovie());
  };

  useEffect(() => {
    dispatch(ResetSearch());
  }, [dispatch]);
  return (
    <React.Fragment>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Movie</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Form className="search">
                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(e) => setSearchName(e.target.value)}>
                  <Form.Label>Search</Form.Label>
                  <Form.Control type="email" placeholder="Search Movie title" />
                </Form.Group>
                <div className="containerButton">
                  <Button variant="outline-danger" onClick={handleSearch}>
                    Search
                  </Button>{" "}
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
}
