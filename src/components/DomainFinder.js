import React from 'react';

import DomainForm from './DomainForm';
import DomainList from './DomainList';

/**
 * Component used to search for and find domains
 */
const DomainFinder = () => {
    const [loading, setLoading] = React.useState(false);    
    const [domainList, setCurrentDomainList] = React.useState([]);

    const handleSubmit = ({domain}) => {

        setLoading(true);
        fetch(`https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=${domain}`)
            .then(response => response.json())
            .then(({domains}) => {
                setLoading(false);            
                setCurrentDomainList(domains);
        });

    }


    const component = loading ? <p>Loading</p> : (
        <>
            <DomainForm handleSubmit={handleSubmit}/>
            <DomainList domainList={domainList}></DomainList>
        </>
    );

    return (
        <> {component} </>
    );
}

export default DomainFinder;
