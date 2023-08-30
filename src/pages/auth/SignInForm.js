import React, { useState} from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignInForm() {
  
    const [SignInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const [username, password] = SignInData;

    const history = useHistory;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.push('dj-rest-auth/login/', SignInData);
            history.push('/')
        } catch (err) {
        }
    };
    const handleChange = (event) => {
        setSignInData({
            ...SignInData,
            [event.target.name]: event.target.value,
        });
    };


    return (
        <Row className={styles.Row}>
            <Col className="my-auto p-0 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign in</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Username"
                            name="username"
                            className={styles.Input}
                            value={username}
                            onChange={handleChange}
                             />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Pasword</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password"
                            name="password"
                            className={styles.Input}
                            value={password}
                            onChange={handleChange}
                             />
                        </Form.Group>
                        <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign In
            </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signup">
                        Don't have an account? <span>Sign up now!</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"}
                />
            </Col>
        </Row>
    );
}

export default SignInForm;