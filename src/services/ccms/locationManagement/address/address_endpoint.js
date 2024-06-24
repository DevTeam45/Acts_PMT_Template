
import { getApiLocations } from '../../APIServiceSetup';

const api_locations = await getApiLocations();

// Component for "/api/Address/List"
export const AddressList = async () => {
    try {
        const response = await api_locations.get('/api/Address/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Address/{id}"
export const AddressById = async (id) => {
    try {
        const response = await api_locations.get(`/api/Address/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Address/Insert"
export const InsertAddress = async (address) => {
    try {
        const response = await api_locations.post('/api/Address/Insert', address);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Address/Update"
export const UpdateAddress = async (address) => {
    try {
        const response = await api_locations.post('/api/Address/Update', address);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Address"
export const GetAllAddresses = async () => {
    try {
        const response = await api_locations.get('/api/Address');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Address/ByCity/{city}"
export const GetAddressesByCity = async (city) => {
    try {
        const response = await api_locations.get(`/api/Address/ByCity/${city}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Address/ChangeSuburb/{addressId}/{newSuburb}"
export const ChangeAddressSuburb = async (addressId, newSuburb) => {
    try {
        const response = await api_locations.post(`/api/Address/ChangeSuburb/${addressId}/${newSuburb}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const addressList = await AddressList();
// const addressById = await AddressById(123);
// const insertedAddress = await InsertAddress({ /* address data */ });
// const updatedAddress = await UpdateAddress({ /* address data */ });
// const allAddresses = await GetAllAddresses();
// const addressesByCity = await GetAddressesByCity('New York');
// const changedSuburb = await ChangeAddressSuburb(123