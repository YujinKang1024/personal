import { Nav } from "react-bootstrap";

export default function DetailNav({ setTabContents }) {
  return (
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0" onClick={() => setTabContents(0)}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1" onClick={() => setTabContents(1)}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={() => setTabContents(2)} >버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}