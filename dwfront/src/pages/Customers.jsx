import React from "react";

/**
 * React component for Customers page
 */
const element = (
    <div>
        <p className='default'>
            Pay bills:
        </p>
        <p className='default'>
            See upcoming appointments:
        </p>
        <p className='default'>
            Contact your doctor:
        </p>
        <p className='default'>
            Test result:
        </p>
        <p className='default'>
            Schedule an Appointment:
        </p>

    </div>
);

/**
 * Gets the Customers page
 * @returns react component for Customers page
 */
function Customers() {
    return element
}
export default Customers;