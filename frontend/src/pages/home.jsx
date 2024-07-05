import { useState } from "react";

export default function Home(){

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));

    const logout = () => {
        localStorage.removeItem('userInfo');
        window.location.reload();
    }

    return(
        <>
            <h1>Hello Bro!</h1>
            <h2>Welcome {userInfo.firstName}</h2>
            <h3>Your Email: {userInfo.email}</h3>
            <button onClick={()=>logout()} className="bg-red-400 px-5 py-3 rounded-md">LOGOUT</button>
        </>
    )
}