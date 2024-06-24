export const MenuList = [
    // Dashboard
    {   
        title: 'Dashboard',
        iconStyle: <i className="fas fa-home" />,
        to: '/app/dashboard',
        rights: ['ProcurementSystemAccess'],
    },
    // Requests
    {
        title: 'Requests',
        iconStyle: <i className="fas fa-tasks" />,
        to: '/app/requests',
        rights: ['ProcurementSystemAccess'],
    },
    
    // Approvals
    {
        title: 'Approvals',
        iconStyle: <i className="fas fa-check" />,
        to: '/app/approvals',
        rights: ['ProcurementSystemAccess'],
    },
    // Suppliers
    {
        title: 'Suppliers',
        iconStyle: <i className="fas fa-truck" />,
        to: '/app/suppliers',
        rights: ['ProcurementSystemAccess'],
    },
    // Subscriptions
    {
        title: 'Subscriptions',
        iconStyle: <i className="fas fa-certificate" />,
        to: '/app/subscriptions',
        rights: ['ProcurementSystemAccess'],
    },
    // Profile 
    {   
        title: 'Profile',
        iconStyle: <i className="fas fa-user" />,
        to: '/app/profile',
        rights: ['ProcurementSystemAccess'],
    },
    // Settings
    {   
        title: 'Settings',
        iconStyle: <i className="fas fa-cog" />,
        to: '/app/settings',
        rights: ['ProcurementSystemAccess'],
    },
];
