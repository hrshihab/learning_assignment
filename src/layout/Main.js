import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import TopSideNav from "../Pages/Shared/TopSideNav/TopSideNav";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
     
      <Container>
      <Row className="d-none d-lg-block">
        <TopSideNav ></TopSideNav>
        </Row>
        <Row>
        
          <Col lg="1">
            <LeftSideNav></LeftSideNav>
            
          </Col>
          <Col lg='7'>
           <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
