import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ToDoList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import todos from './todoItems';

function getColorVariant(dueDate) {
    const today = new Date();
    const newDueDate = new Date(dueDate);
    const timedifference = newDueDate - today;
    const daysLeft = Math.ceil(timedifference / (1000 * 60 * 60 * 24));
    if (daysLeft > 7) return 'primary';
    if (daysLeft <= 7 && daysLeft > 4) return 'success';
    if (daysLeft <= 4 && daysLeft > 2) return 'warning';
    return 'danger';
  }

function ToDoList() {
  return (
    <Container>
        <Row>
        <Col className = "containheader"> <h3> Assignment 2: Rushikesh Suryawanshi's ToDo List</h3></Col>
        </Row>
      <Row>
        <Col sm={4}>
        
            <div className="TodoAppForm">
                <Form className="formCustom">
                    <Form.Group className="mb-3">
                        <Form.Label>ToDo Item</Form.Label>
                        <Form.Control type="text" placeholder="Add todo item" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" placeholder="mm/dd/yyyy" />
                    </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" >
                        Add Todo
                    </Button>
                </div>
                </Form>
            </div>
        
        </Col>
        <Col sm={8}>
        
        <Tab.Container id="TodoAppTab">
            <Row>
                <Col sm={4}>
                <ListGroup>
                    {todos.map((item, index) => (
                    <ListGroup.Item action href={`#link${index}`}  variant={getColorVariant(item.dueDate)} className="listgroupItems">
                        {item.title}
                    </ListGroup.Item>
                    ))}
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    {todos.map((item, index) => (
                    <Tab.Pane eventKey={`#link${index}`}>
                        <div contentEditable>{item.description}</div>
                        <input type="date" defaultValue={item.dueDate} />
                    </Tab.Pane>
                    ))}
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;