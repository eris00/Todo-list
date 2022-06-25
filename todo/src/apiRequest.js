

const apiRequest = async (url = '', option = null) => {
    try {
        const response = await fetch(url, option);
        if(!response.ok) throw Error('response error');

    } catch(err) {
        console.log(err);
    }
}

export default apiRequest