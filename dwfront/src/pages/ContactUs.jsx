import React from "react";

/**
 * React component for contact us page
 */
const element = (
    <div>
        <h1 className='default'>
            Enter Your Business Contact Tittle Name
        </h1>

        <p className='default'>
            Enter your email address for your current patient to contact your business.
        </p>

        <p className='default'>
            Enter the phone number for the customers who need help with directions:
        </p>

        <p className='default'>
            Important Phone Numbers
        </p>

        <p className='class1'>
           Enter your main number:
        </p>
        <p className='class1'>
            Enter your billing number:
        </p>
        <p className='class1'>

            Enter your Appointment Scheduling number:
        </p>
        <p className='class1'>
            Enter your New patient registration number:

        </p>

    </div>
);

/**
 * Gets the Contact Us page
 * @returns react component for contacts page
 */
function ContactUs() {
    return element
}
export default ContactUs;