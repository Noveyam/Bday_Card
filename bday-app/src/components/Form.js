import React from "react";

function Form() {
    return (
        <>
        <form>
            <input type="text" placeholder="Enter Your Name"></input>
            <h3>Are You Coming?</h3>
            <button>YES</button>
            <button>NO</button>
            <h3>Number of Guests</h3>
            <button>+</button>
            <input
            type="number"
            placeholder="1"
            min="1"
            ></input>
            <button>-</button>
            <button>SUMBIT</button>
        </form>
        </>
    );
};

export default Form;