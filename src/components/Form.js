import React from "react";

function Form() {
    //firstname
    const [firstName, setFirstName] = React.useState("")
    //email
    const [email, setEmail] = React.useState("")
    //checkbox
    const [isComputer, setIsComputer] = React.useState(false)
    //radio
    const [status, setStatus] = React.useState("")
    //select
    const [favBrand,setFavBrand] = React.useState("")


    function handleFirstName(event) {   // void fonksiyon çünkü return yok
        setFirstName(event.target.value)
        console.log(event.target.value)
    }

    function handleEmail(event) {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    function handleCheckBox(event) {
        console.log(event.target.checked);
        setIsComputer(event.target.checked)

    }

    function handleRadioButton(event) {
        console.log(event.target.value)
        setStatus(event.target.value)
        console.log(status);
    }
    
    function handleSelect(event){
        console.log(event.target.value)
        setFavBrand(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName} //dinamik value
                onChange={handleFirstName} //input girildiginde ne yapcagini söyleyen bir attribute
            />
            <br></br>

            <input
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={handleEmail}
                required
            />
            <br></br>

            <input
                type="checkbox"
                checked={isComputer}
                onChange={handleCheckBox}
            />
            <br></br>

            <input
                type="radio"
                value="full-time" //stabil value
                name="fulltime"
                checked={status === "full-time"} //{status} yazdiginda birine basinca ikiside (part-time a da) basilmis gibi gözüküyordu === diyerek düzelttik
                onChange={handleRadioButton}
            />
            <label>Full Time</label>
            <br></br>

            <input
                type="radio"
                value="part-time"
                name="parttime"
                checked={status === "part-time"}
                onChange={handleRadioButton}
            />
            <label>Part Time</label>
            <br></br>

            <input
                type="radio"
                value="freelance"
                name="freelance"
                checked={status === "freelance"}
                onChange={handleRadioButton}
            />
            <label>Freelance</label>
            <br></br>

            <label>What's your favorite car?</label>
            <select
                value={favBrand}
                onChange={handleSelect}
                name="favBrand">

                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="honda">Honda</option>
                <option value="tofas">Tofas</option>
                <option value="volvo">Volvo</option>
            </select>
            <br></br>

            <button type="submit">Submit</button>


        </form>

    )
}

export default Form;