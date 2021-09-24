import { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Covid19Tracker from "./screens/Covid19Tracker";
import SideBarMain from "./screens/SideBarMain";
import TableChart from "./screens/TableChart";
import CaseContext from "./api/CaseSwitch";

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
          <Container>
            <Row>
              <Col lg={7}>
                <Covid19Tracker />
              </Col>
              <Col lg={5}>
                <TableChart />
              </Col>
            </Row>
          </Container>
        </CaseContext.Provider>
      </div>
    </div>
  );
}

export default App;
