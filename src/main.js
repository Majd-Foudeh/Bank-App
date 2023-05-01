import React, { useState } from 'react'
const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 2,
            customerName: "Majd foudeh",
            accountNumber: "193338",
            accountType: "Student accounts"
        },
        {
            id: 2,
            customerName: "mohammed",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        }
    ]


}

const data = [];

function Main() {
    const [customername, setcustomername] = useState("");
    const [accountnumber, setaccountnumber] = useState("");
    const [accounttype, setaccounttype] = useState("");
    const [users, setusers] = useState(data);
    const [counter, setcounter] = useState(0)

    const handlecounter = (event) => { setcounter(counter + 1) }

    const handlechangename = (event) => {
        const name = event.target.value;
        setcustomername(name);
    }

    const handleaccountnumber = (event) => {
        const accountnumber = event.target.value;
        setaccountnumber(accountnumber);
    }
    const handleaccounttype = (event) => {
        const accounttype = event.target.value;
        setaccounttype(accounttype);
    }

    const handleRemove = (id) => {
        const updateUsers = users.filter((person) => person.counter !== id);
        setcounter(counter - 1);
        setusers(updateUsers);
        // console.log(updateUsers);
    };

    const handlesubmit = (event) => {
        event.preventDefault()
        console.log("submited");
        if (!customername) return;
        const newUser = {
            counter,
            customername,
            accountnumber,
            accounttype,
        };
        const updateUsers = [...users, newUser];
        setusers(updateUsers);
        setcustomername("");
        // return (
        //     <>
        //         <div className="card" style={{ width: "18rem" }}>
        //             <div className="card-header">Featured</div>
        //             <ul className="list-group list-group-flush">
        //                 <li className="list-group-item">{customername}</li>
        //                 <li className="list-group-item">{accountnumber}</li>
        //                 <li className="list-group-item">{accounttype}</li>
        //             </ul>
        //         </div>
        //     </>
        // )
    }
    return (
        <>
            <form className="container " onSubmit={handlesubmit}>
                <div className="mb-3 ">
                    <label htmlFor="customername" className="form-label">
                        Your Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="customername"
                        aria-describedby="emailHelp"
                        value={customername}
                        onChange={handlechangename}
                    />
                    {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="accountnumber" className="form-label">
                        accountNumber
                    </label>
                    <input type="text" className="form-control" id="accountnumber" value={accountnumber} onChange={handleaccountnumber} />
                </div>
                <div class="mb-3">
                    <label class="form-label text-black">Account Type</label>
                    <select class="form-select " name="Major" required value={accounttype} onChange={handleaccounttype}>

                        <option>Choose...</option>
                        <option>Savings</option>
                        <option>Student accounts</option>
                        {/* <option>Third choice</option>
                        <option>Fourth choice</option> */}
                    </select>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="accounttype" className="form-label">
                        accountType
                    </label>
                    <input type="text" className="form-control" id="accounttype" />
                </div> */}
                <div className="text-center">
                    <button type="submit " className="btn btn-primary " onClick={handlecounter}>
                        Submit
                    </button>
                </div>
            </form>

            {users.map((user) => {
                return (
                    <div className="card" style={{ width: "18rem" }}>

                        <div className="card-body">
                            <h5 className="card-title">Customer</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">ID: {user.counter}</li>
                            <li className="list-group-item">Name: {user.customername}</li>
                            <li className="list-group-item">account number: {user.accountnumber} </li>
                            <li className="list-group-item">account type: {user.accounttype} </li>
                        </ul>
                        <div className="card-body">
                            <button type="submit" classname="btn btn-danger" onClick={() => handleRemove(user.counter)}>
                                Delete
                            </button>
                        </div>
                    </div>

                );
            })}
        </>
    )

}

export default Main
