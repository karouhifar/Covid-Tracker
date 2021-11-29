import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Covid19Tracker from "./screens/Covid19Tracker";
import SideBarMain from "./screens/SideBarMain";
import TableChart from "./screens/TableChart";
import CaseContext from "./api/CaseSwitch";
import About from "./screens/About";
import Contact from "./screens/Contact";
function App() {
  const [switchCase, setSwitchCase] = useState("cases");
  return (
    <div className="App">
      <div className="bk-img">
        <CaseContext.Provider
          value={{
            switchCase,
            setSwitchCase,
          }}
        >
          <SideBarMain />
          <Switch>
            <Route exact path="/">
              <Container>
                <Row>
                  <Col md={12} xl={7}>
                    <Covid19Tracker />
                  </Col>
                  <Col md={12} xl={5}>
                    <TableChart />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CaseContext.Provider>
      </div>
    </div>
  );
}

export default App;
