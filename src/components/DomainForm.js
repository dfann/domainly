import React from 'react'

/**
 * Component that gets user input to search for a domain
 * @param {function} handleSubmit - Function to handle submitted values from the form
 */
const DomainForm = ({handleSubmit}) => {
    const [domain, setDomain] = React.useState("");

    const handleChange = ({target}) => {
        const {name, value} = target;
        switch (name) {
            case 'domain':
                setDomain(value);
                return;
        }
    }

    return (
        <>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    let message = "";

                    if (message === "") {
                        handleSubmit({domain})
                        setDomain("");

                    } else {
                        alert(message);
                    }

                }
            }>
                <label>Domain To LookUp:</label>
                <input name="domain"
                    value={domain}
                    onChange={handleChange}
                    type="input"
                    placeholder="Domain"/>
                <input name="submit" type="submit" value="submit"
                    disabled={
                        domain.length === 0
                    }/>
            </form>
        </>
    )
}

export default DomainForm;
