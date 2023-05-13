import React from "react";
import "../styles/Signup.css"

function Signup(){

    //useState
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [passwordConfirm,setPasswordConfirm] = React.useState("");
    const [check,setCheck] = React.useState(false)


    //onChange
    function handleEmail(event){
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
        console.log(event.target.value)
    }
    function handlePasswordConfirm(event){
        setPasswordConfirm(event.target.value)
        console.log(event.target.value)
    }
    function handleCheck(event){
        setCheck(event.target.checked) // checked dedigimiz icin output booelon bir deger olur.
        console.log(event.target.checked)
    }

    function handleSubmit(event){
        if(password === passwordConfirm){
            alert("succesfully regeisterd")
        }
        else{
            alert("Passwords are not matching")
        }
        event.preventDefault()

    }

    return(
        <>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type="email"
                placeholder="email@email.com"
                className="form--input"
                value={email}
                onChange={handleEmail}
                name="email"
                />

                <input
                type="password"
                placeholder="Password"
                className="form--input"
                value={password}
                onChange={handlePassword}
                name="password"
                />

                <input
                type="password"
                placeholder="Password"
                className="form--input"
                value={passwordConfirm}
                onChange={handlePasswordConfirm}
                name="password"
                />

                <input
                type="checkbox"
                className="form--input"
                checked={check}
                onChange={handleCheck}
                value="newSettler"
                name="newSettler"
                />
                <label>I want to join newsettler </label>

                <button type="submit">Submit</button>



            </form>
        </div>

        </>
    )
}

export default Signup;