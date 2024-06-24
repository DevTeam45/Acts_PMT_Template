import React, { useState, useContext, Fragment, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import Select from "react-select";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../context/ThemeContext";
import demo1 from '../../../../images/demo/pic1.jpg';
import demo2 from '../../../../images/demo/pic2.jpg';
import demo3 from '../../../../images/demo/pic3.jpg';
import demo4 from '../../../../images/demo/pic4.jpg';
import demo5 from '../../../../images/demo/pic5.jpg';
import demo6 from '../../../../images/demo/pic6.jpg';

const Settings = () => {
  const [demoToggle, setDemoToggle] = useState(false);
  const {
    body,
    sideBarOption,
    layoutOption,
    backgroundOption,
    sidebarposition,
    headerPositions,
    containerPosition,
    fontFamily,
    changePrimaryColor,
    changeNavigationHader,
    sideBarStyle,
    changeSideBarStyle,
    changeSideBarPostion,
    sidebarpositions,
    changeHeaderPostion,
    headerposition,
    changeSideBarLayout,
    sidebarLayout,
    colors,
    chnageHaderColor,
    chnageSidebarColor,
    changeBackground,
    background,
    changeContainerPosition,
    containerPosition_,
    setDemoTheme
  } = useContext(ThemeContext);

  useEffect(() => {
    changeBackground({ value: "dark", label: "dark" });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h4>Theme</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={12}>
                  <p>Background</p>
                  <Select
                    defaultValue={background}
                    onChange={(e) => changeBackground(e)}
                    options={backgroundOption}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <p>Primary Color</p>
                  <div>
                    {colors.map((color, i) => (
                      <span key={i}>
                        <input
                          type="radio"
                          name="primary_color"
                          value={color}
                          className="filled-in chk-col-primary"
                          id={`primary_${color}`}
                          onClick={() => changePrimaryColor(color)}
                        />
                        <label htmlFor={`primary_${color}`} />
                      </span>
                    ))}
                  </div>
                </Col>
                <Col sm={6}>
                  <p>Navigation Header</p>
                  <div>
                    {colors.map((color, i) => (
                      <span key={i}>
                        <input
                          type="radio"
                          name="navigation_header"
                          value={color}
                          className="filled-in chk-col-primary"
                          id={`nav_header_${color}`}
                          onClick={() => changeNavigationHader(color)}
                        />
                        <label htmlFor={`nav_header_${color}`} />
                      </span>
                    ))}
                  </div>
                </Col>
                <Col sm={6}>
                  <p>Header</p>
                  <div>
                    {colors.map((color, i) => (
                      <span key={i}>
                        <input
                          type="radio"
                          name="header_bg"
                          value={color}
                          className="filled-in chk-col-primary"
                          id={`header_${color}`}
                          onClick={() => chnageHaderColor(color)}
                        />
                        <label htmlFor={`header_${color}`} />
                      </span>
                    ))}
                  </div>
                </Col>
                <Col sm={6}>
                  <p>Sidebar</p>
                  <div>
                    {colors.map((color, i) => (
                      <span key={i}>
                        <input
                          type="radio"
                          name="navigation_header"
                          value={color}
                          className="filled-in chk-col-primary"
                          id={`sidebar_${color}`}
                          onClick={() => chnageSidebarColor(color)}
                        />
                        <label htmlFor={`sidebar_${color}`} />
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mt-4">
          <Card>
            <Card.Header>
              <h4>Header</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <p>Layout</p>
                  <Select
                    defaultValue={sidebarLayout}
                    onChange={(e) => changeSideBarLayout(e)}
                    options={layoutOption}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <p>Header position</p>
                  <Select
                    defaultValue={headerposition}
                    onChange={(e) => changeHeaderPostion(e)}
                    options={headerPositions}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <p>Sidebar</p>
                  <Select
                    defaultValue={sideBarStyle}
                    onChange={(e) => changeSideBarStyle(e)}
                    options={sideBarOption}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <p>Sidebar position</p>
                  <Select
                    defaultValue={sidebarposition}
                    onChange={(e) => changeSideBarPostion(e)}
                    options={sidebarpositions}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mt-4">
          <Card>
            <Card.Header>
              <h4>Content</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <p>Container</p>
                  <Select
                    defaultValue={containerPosition_}
                    onChange={(e) => changeContainerPosition(e)}
                    options={containerPosition}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
                <Col sm={6}>
                  <p>Body Font</p>
                  <Select
                    defaultValue={fontFamily[1]}
                    onChange={(e) => body.setAttribute("data-typography", e.value)}
                    options={fontFamily}
                    styles={{
                      control: (base) => ({
                        ...base,
                        lineHeight: "40px",
                        color: "#7e7e7e",
                        paddingLeft: "15px",
                      }),
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="mt-4">
          <Card className={`dlab-demo-panel ${demoToggle ? "show" : ""}`}>
            <Card.Header>
              <h4>Select A Demo</h4>
              <Link to="#" onClick={() => setDemoToggle(!demoToggle)}>
                <span><i className="las la-times"></i></span>
              </Link>
            </Card.Header>
            <Card.Body>
              <PerfectScrollbar className="dlab-demo-content ps ps--active-y">
                <div className="dlab-wrapper">
                  <div className="overlay-bx dlab-demo-bx">
                    <Link className="overlay-wrapper rounded-lg overlay-img" to="#">
                      <img
                        src={demo1}
                        alt=""
                        className="w-100"
                        onClick={() => setDemoTheme(1, 'ltr')}
                        data-theme="1"
                      />
                    </Link>
                  </div>
                  <h5 className="text-black">Horizontal Blue</h5>
                  <hr />
                  <div className="overlay-bx dlab-demo-bx">
                    <Link className="overlay-wrapper rounded-lg" to="#">
                      <img
                        src={demo2}
                        alt=""
                        className="w-100"
                        onClick={() => setDemoTheme(2, 'ltr')}
                        data-theme="2"
                      />
                    </Link>
                  </div>
                  <h5 className="text-black">Purple Shade</h5>
                  <hr />
                  <div className="overlay-bx dlab-demo-bx">
                    <Link className="overlay-wrapper rounded-lg" to="#">
                      <img
                        src={demo3}
                        alt=""
                        className="w-100"
                        onClick={() => setDemoTheme(3, 'ltr')}
                      />
                    </Link>
                  </div>
                  <h5 className="text-black">Top Black</h5>
                  <hr />
                  <div className="overlay-bx dlab-demo-bx">
                    <Link className="overlay-wrapper rounded-lg" to="#">
                      <img
                        src={demo4}
                        alt=""
                        className="w-100"
                        onClick={() => setDemoTheme(4, 'ltr')}
                        data-theme="4"
                      />
                    </Link>
                  </div>
                  <h5 className="text-black">Green Black</h5>
                  <hr />
                  <div className="overlay-bx dlab-demo-bx">
                    <Link className="overlay-wrapper rounded-lg" to="#">
                      <img
                        src={demo5}
                        alt=""
                        className="w-100"
                        onClick={() => setDemoTheme(5, 'ltr')}
                        data-theme="5"
                      />
                    </Link>
                  </div>
                  <h5 className="text-black">Black White</h5>
                  <hr />
                  <div className="overlay-bx dlab-demo-bx">
                    <Link className="overlay-wrapper rounded-lg" to="#">
                      <img
                        src={demo6}
                        alt=""
                        className="w-100"
                        onClick={() => setDemoTheme(6, 'ltr')}
                        data-theme="6"
                      />
                    </Link>
                  </div>
                  <h5 className="text-black">Shade of Blue</h5>
                </div>
              </PerfectScrollbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
