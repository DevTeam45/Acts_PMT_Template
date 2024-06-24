import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRights } from '../services/ccms/userManagement/user/user_endpoints';

const ProtectedRoute = ({ element: Component, userID, requiredRights, ...rest }) => {
    const [hasAccess, setHasAccess] = useState(null);

    useEffect(() => {
        const checkUserRights = async () => {
            try {
                const userRights = await getUserRights(userID);
                const rightsNames = userRights.results.map(right => right.name); // Extract rights names
                const hasRequiredRights = requiredRights.every(right => rightsNames.includes(right));
                setHasAccess(hasRequiredRights);
            } catch (error) {
                console.error("Error checking user rights:", error);
                setHasAccess(false);
            }
        };

        checkUserRights();
    }, [userID, requiredRights]);

    if (hasAccess === null) {
        // Inline CSS for popup
        const popupStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
        };

        const popupContentStyle = {
            background: 'white',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center'
        };

        return (
            <div style={popupStyle}>
                <div style={popupContentStyle}>
                    <p>Please wait while validating your profile...</p>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return hasAccess ? <Component {...rest} /> : <Navigate to="/error-403" />;
};

export default ProtectedRoute;
