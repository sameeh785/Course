import React, {useState} from 'react';

export default function AddUserForm(props) {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [city, setCity] = useState("");

    function onChangeData(evt) {

        switch (evt.target.name) {

            case "name":
                setName(evt.target.value);
                break;

            case "city":
                setCity(evt.target.value);
                break;

            case "email":
                setEmail(evt.target.value);
                break;

        }


    }

    return <form onSubmit={(evt) => {

        evt.preventDefault();

        props.onDataAdded({
            name,
            city,
            email
        });


    }}>

        <div>
            <input name="name" onChange={onChangeData} />
        </div>

        <div>
            <input name="email" onChange={onChangeData} />
        </div>

        <div>
            <input name="city" onChange={onChangeData} />
        </div>


        <button>Save User</button>

    </form>


}