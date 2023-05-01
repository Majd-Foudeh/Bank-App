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


function Main() {
    const [customername, setcustomername] = useState("");
    const [accountnumber, setaccountnumber] = useState("");
    const [accounttype, setaccounttype] = useState("");

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

    const handlesubmit = (event) => {
        event.preventfault();
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">Featured</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{customername}</li>
                        <li className="list-group-item">{accountnumber}</li>
                        <li className="list-group-item">{accounttype}</li>
                    </ul>
                </div>
            </>
        )
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
                    />
                    {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="accountnumber" className="form-label">
                        accountNumber
                    </label>
                    <input type="text" className="form-control" id="accountnumber" />
                </div>
                <div class="mb-3">
                    <label class="form-label text-black">Account Type</label>
                    <select class="form-select " name="Major" required>

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
                    <button type="submit " className="btn btn-primary " onClick={() => { }}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default Main
