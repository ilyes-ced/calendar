import { useRef } from "react"
import {login} from "../../adapters/auth"
import { useAppSelector } from '../../hook'
import { } from '../../contexts/userData'
import { Navigate } from "react-router-dom";



function App() {

    const user = useAppSelector((state) => state.user_data)


    const email = useRef(null)
    const password = useRef(null)

    const submit_login = () => {
        login(email.current.value, password.current.value)
    }   



    if (user.is_authed) return <Navigate to="/" replace />
    return (
        <div className="grid align__item">
            <div className="register">
                <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#6d4aff"/><stop offset="100%" stop-color="#4f27eb"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>
                <h2>Sign In</h2>

                <form className="form">

                    <div className="form__field">
                        <input ref={email} type="email" placeholder="info@mailaddress.com" />
                    </div>
                    <div className="form__field">
                        <input ref={password} type="password" placeholder="••••••••••••" />
                    </div>
                    <div className="form__field">
                        <input type="submit" value="Sign In" onClick={submit_login} />
                    </div>

                </form>
                <p>Dont't have an accout? <a href="/register">Sign up</a></p>

            </div>
        </div>
    )
}

export default App
