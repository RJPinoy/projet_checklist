import axios from 'axios';

const apiInfoUrl = 'https://greenvelvet.alwaysdata.net/pfc/';
const token = 'df7c7388f5d8a331ea1f7081023238f5a46f427e';
const pingUrl = 'https://greenvelvet.alwaysdata.net/pfc/ping';
const checklistsUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklists';
const checklistUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklist';
const addUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklist/add';
const updateUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklist/update';
const deleteUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklist/delete';
const statutUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklist/statut';

export const fetchApiInfo = async () => {
    try {
        const responseGetApiInfo = await axios.get(apiInfoUrl);
      
    return responseGetApiInfo.data;
      
    } catch (error) {
        console.error(error);
    }
};

export const fetchDataFromApi = async () => {
    try {
        const responseGet = await axios.get(checklistsUrl, {
            headers: {
                'Content-Type': 'application/json',
                'token': `${token}`,
            },
        });

    return responseGet.data.response;
      
    } catch (error) {
        console.error(error);
    }
};

export const fetchChecklistFromApi = async (id) => {
    try {
        const responseGet = await axios.get(`${checklistUrl}?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'token': `${token}`,
            },
        });

    console.log(responseGet.data);
    return responseGet.data.response;
      
    } catch (error) {
        console.error(error);
    }
};
  
export const addDataToApi = async (data) => {
    try {
        const responsePost = await axios.post(addUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                'token': `${token}`,
            },
        });
        console.log(responsePost.data);

    } catch (error) {
        console.error(error);
    }
}


export const test = async () => {
    try {
        const responsePostTest = await axios.get(pingUrl);
        console.log(responsePostTest.data);

    } catch (error) {
        console.error(error);
    };
};

export const deleteDataFromApi = async (id) => {
    try {
        const responseDelete = await axios.get(`${deleteUrl}?id=${id}`, {
            headers: {
                'token': ` ${token}`,
            },
        });
        console.log(`Delete request for ID ${id} successful. Response:`, responseDelete.data);
    } catch (error) {
        console.error(`Error deleting ID ${id}. statut: ${error.response?.statut}. Message: ${error.response?.data?.message}`, error);
    };
};

export const updateDataFromApi = async (id, modifiedData) => {
    try {
        const responseUpdate = await axios.post(`${updateUrl}?id=${id}`, modifiedData, {
            headers: {
                'token': `${token}`,
            },
        });
        console.log("Update API Response:", responseUpdate.data);

    return responseUpdate.data;

    } catch (error) {
        console.error("Error updating data:", error);

        throw error;
    };
};

export const statutDataFromApi = async (id, statut) => {
    try {
        const responseStatut = await axios.get(`${statutUrl}?id=${id}&statut=${statut}`, {
            headers: {
                'token': `${token}`,
            },
        });
        console.log(responseStatut.data);
        
        
    } catch (error) {
        console.error(error);
    }
};

export default axios;