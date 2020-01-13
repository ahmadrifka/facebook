import React from 'react';
import{Container, Row, Col, ButtonToolbar, Button} from 'react-bootstrap';
import picture from '../../uploads/bussiness.jpg';
import SignUp from '../modal/sign-up';

function Content (){
    const [modalShow, setModalShow] = React.useState(false);
    console.log(modalShow)
        return(
            <div>
                <Container>
                    <Row className="row">
                        <Col className="col1">
                        <img src={picture} className="pic" alt=""></img>
                        </Col>
                        <Col className="col2">
                        <h1 className="titleBreak">BREAK <br></br> BOUNDARIES. </h1>
                        <h2 className="paragraph">We are creative makers. We think, create, and build stories for your brand. Let's make something together!</h2>
                        <ButtonToolbar>
                            <Button variant="" className="joinBtn" onClick={() => setModalShow(true)}>
                                Join Us Now !
                            </Button>

                            <SignUp
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </ButtonToolbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default Content;