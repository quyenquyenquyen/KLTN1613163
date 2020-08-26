import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAlert } from "react-alert";
import { Paper } from '@material-ui/core';

export default function ChangePass(props) {

    const [user, setUser] = useState([])
    const [currentPass, setCurrentPass] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const alert = useAlert();

    useEffect(() => {
        axios.get('/user/authenticated')
            .then(response => {
                setUser(response.data.user)
            })
    }, [])


    const onCurrentPassChange = (event) => {
        setCurrentPass(event.currentTarget.value)
    }

    const onPassChange = (event) => {
        setPass(event.currentTarget.value)
    }

    const onConfirmPassChange = (event) => {
        setConfirmPass(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            password: pass
        }


        if (pass.length < 6) {
            alert.error("Mật khẩu quá ngắn, độ dài mật khẩu tối đa 6 kí tự")
        } else {
            if (pass === confirmPass) {
                axios.put(`/user/reset/`, variables)
                    .then(response => {
                        if (response) {
                            alert.success('Cập nhật mật khẩu thành công')
                            setPass('')
                            setConfirmPass('')
                            setTimeout(() => {
                                props.history.push('/listSubject')
                            }, 2000);
                        }
                    })
            } else {
                alert.error('Mật khẩu không khớp')
            }
        }
    }


    return (
        <div style={{ padding: "3% 5%" }}>
            <form onSubmit={onSubmit} style={{ padding: "1% 5%", width: "50%", margin: "0 auto" }}>
                <Paper elevation={6} style={{ margin: "10px", padding: "10px" }}>
                    <div>
                        <div className="text-center">
                            <img style={{ width: "100px", height: "auto" }} src="http://localhost:5000/up/image/12976695_1726672837602082_5692324023661199345_o.jpg" />
                            <h5 style={{ color: "#2a2a72" }}>Bộ môn Vật lý tin học</h5>
                            <h3>Thay đổi mật khẩu</h3>
                        </div>

                        <label ><h6 style={{ fontWeight: "bold" }}><i className="fa fa-user" />&nbsp;Mật khẩu mới:</h6> </label>
                        <input type="password"
                            style={{ marginBottom: "1em" }}
                            name="username"
                            onChange={onPassChange}
                            className="form-control"
                            placeholder="Nhập mật khẩu mới"
                            required />
                        <label ><h6 style={{ fontWeight: "bold" }}><i className="fa fa-key" />&nbsp;Xác thực mật khẩu mới:</h6> </label>
                        <input type="password"
                            style={{ marginBottom: "1em" }}
                            name="password"
                            onChange={onConfirmPassChange}
                            className="form-control"
                            placeholder="Xác nhận mật khẩu"
                            required />
                        <button style={{ width: "50%", margin: "0 25%" }} className="btn btn-lg btn-primary btn-block" type="submit">Change </button>

                    </div>
                </Paper>
            </form>

        </div>
    )

}
