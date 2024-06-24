import React, { useContext } from 'react';
import { UserRightsContext } from './UserRightsContext'; // Ensure this is the correct path

const ProtectedComponent = ({ requiredRights, children }) => {
  const userRights = useContext(UserRightsContext);

  const hasRequiredRights = requiredRights.every(right => userRights.includes(right));

  return hasRequiredRights ? children : null;
};

export default ProtectedComponent;