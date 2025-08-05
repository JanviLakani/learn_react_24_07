import React, { useEffect, useState } from "react";

import { Button, Card, Row, Col, Spinner } from "react-bootstrap";

function Products(props) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

const searchData = data.filter((v) => {
  console.log("search:", search, "title:", v.title);
  return v.title.toLowerCase().includes(search.toLowerCase());
});

  console.log("Filtered Data:", searchData);

  const sortData =[...searchData].sort((a,b) => {
    if (sort === "atoz") {
      return a.title.localeCompare(b.title)
    } else if(sort === "ztoa") {
      return b.title.localeCompare(a.title)
    } return 0;
  })

  const productData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const resdata = await response.json();

      console.log("resdata", resdata);

      setData(resdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="search your fav item"
        onChange={(event) => { setSearch(event.target.value)

          console.log("Search value:", event.target.value);

        }}
        
      />

      <select
        name="sort"
        id="sort"
        onChange={(event) => setSort(event.target.value)}
      >
        <option value="0">--Select--</option>
        <option value="atoz">A-Z</option>
        <option value="ztoa">Z-A</option>

      </select>
      <Row>
        {sortData.length > 0 ? (
          sortData.map((v) => (
            <Col md={4} key={v.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={v.image} />
                <Card.Body>
                  <Card.Title>{v.title.substring(0, 20) + "..."}</Card.Title>
                  <Card.Text>
                    {v.description.substring(0, 30) + "..."}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
    </>
  );
}

export default Products;
