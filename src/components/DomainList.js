import React from 'react';

/**
 * Component to render domains
 * @param {Array} domainList - list of domain objects
 */
const DomainList = ({domainList}) => {
    return <ol >{ domainList.map(({domain}) => <li key={domain}>{domain}</li>) }</ol>
}

export default DomainList;
