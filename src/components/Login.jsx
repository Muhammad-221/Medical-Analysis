import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import "../Login.bootstrap.css";

function FormLogin() {

    const [validated, setValidated] = useState(false);
    const [formLogin, setFormLogin] = useState({userName: "", password: ""})
    const changeUserName = (event) => setFormLogin({...formLogin, userName: event.target.value});
    const changePassword = (event) => setFormLogin({...formLogin, password: event.target.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        console.log(formLogin);
        setValidated(true);
    };

    return (
        <div className="w-1/2 mx-auto">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01" className='mb-4'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="username"
                        value={formLogin.userName}
                        onChange={changeUserName}
                        className="focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please enter username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom02" className='mb-4'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="password"
                        value={formLogin.password}
                        onChange={changePassword}
                        className="focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please enter password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant='dark'>Login</Button>
            </Form>
        </div>
    );
}

export default FormLogin;