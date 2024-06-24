import React, { createContext, useEffect, useState } from 'react';
import { getUserRights } from '../services/ccms/userManagement/user/user_endpoints'; // Ensure this is the correct path

export const UserRightsContext = createContext([]);

export const UserRightsProvider = ({ children }) => {
  const [userRights, setUserRights] = useState([]);

  useEffect(() => {
    const fetchUserRights = async () => {
      try {
        const userID = localStorage.getItem('userID');
        const rights = await getUserRights(userID);
        setUserRights(rights.results.map(right => right.name));
      } catch (error) {
        console.error('Error fetching user rights:', error);
      }
    };

    fetchUserRights();
  }, []);

  return (
    <UserRightsContext.Provider value={userRights}>
      {children}
    </UserRightsContext.Provider>
  );
};
