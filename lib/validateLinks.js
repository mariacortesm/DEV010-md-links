const axios = require('axios');

const validateLinks = (links) => {
    const promiseLinks = links.map(link => {
    return axios.get(links.href) 
    .then(response => ({
        ...link,
        status:response.status,
        ok: response.status >= 200 && response.status < 400 ? 'Ok' : 'Fail',
    }))
    .catch(error => ({
        ...link,
        status: error.response ? error.response.status : 'Error',
        ok: 'Fail',
    }))
})
    return Promise.all(promiseLinks);
}

module.exports = validateLinks;
// Revisar el Promise all;