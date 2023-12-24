import { useState, useEffect } from "react"
function Profile() {
    const [name, setName] = useState("test")
    const [age, setAge] = useState("20")
    const [phone, setPhone] = useState("777777")
    const [contacts, setContacts] = useState([])


    async function fetchData() {
        let result = await fetch("http://localhost:8000/contacts")
        let contacts = await result.json();
        setContacts(contacts)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="parent">
            {contacts.map((item) => {
                return (
                    <div class="profilecard">
                        <div class="profileinfo">
                            <h4>Name: {item.name}</h4>
                            <h4>Age: {item.age}</h4>
                            <h4>Phone: {item.phone}</h4>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Profile