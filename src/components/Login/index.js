import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChangeUsername(event) {
        setUsername(event.target.value);
    }

    function handleChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Username:
                <input type="text" name="username" onChange={handleChangeUsername}/>
            </label>
            </div>
            <div>
            <label>
                Mot de passe:
                <input type="password" name="password" onChange={handleChangePassword}/>
            </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}