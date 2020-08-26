import React, { useState, useContext } from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { AuthContext } from '../Context/AuthContext';
import { Paper } from '@material-ui/core';

const Login = props => {
    const [user, setUser] = useState({ username: "", password: "", name: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const [checkInfo, setCheckInfo] = useState(true)

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            // console.log(data);
            const { isAuthenticated, user, message } = data;
            setMessage(message);
            if (isAuthenticated) {
                setCheckInfo(true)
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/listSubject');
            }else{
                setCheckInfo(false)
            }
        });
    }



    return (
        <div>
            <form onSubmit={onSubmit} style={{ padding: "3% 5%", width: "50%", margin: "0 auto" }}>
                <Paper elevation={6} style={{ margin: "10px", padding: "10px" }}>
                    <div>
                        <div className="text-center">
                            <img style={{ width: "100px", height: "auto" }} src="http://localhost:5000/up/image/12976695_1726672837602082_5692324023661199345_o.jpg" />
                            <h5 style={{ color: "#2a2a72" }}>Bộ môn Vật lý tin học</h5>
                            <h3>Đăng nhập</h3>
                        </div>

                        <label ><h6 style={{ fontWeight: "bold" }}><i className="fa fa-user" />&nbsp;MSSV/MGV:</h6> </label>
                        <input type="text"
                            style={{ marginBottom: "1em" }}
                            name="username"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Username"
                            required />
                        <label ><h6 style={{ fontWeight: "bold" }}><i className="fa fa-key" />&nbsp;Mật khẩu:</h6> </label>
                        <input type="password"
                            style={{ marginBottom: "1em" }}
                            name="password"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Password"
                            required />
                        <button style={{ width: "50%", margin: "0 25%" }} className="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập </button>
                        {!checkInfo?<div style={{textAlign:"center",fontStyle:"italic",color:"red",fontSize:"1.2em"}}> *Mật khẩu sai, vui lòng nhập lại</div>:''}
                    </div>
                </Paper>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )
}

export default Login;

