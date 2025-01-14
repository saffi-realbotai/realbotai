// permissions.js - Handles user permissions and access levels

import { ROLES } from './constants';

// Function to check if the user has the necessary permissions
export const hasPermission = (role, action) => {
  const permissions = {
    [ROLES.ADMIN]: ['VIEW', 'EDIT', 'DELETE'],
    [ROLES.AGENT]: ['VIEW', 'EDIT'],
    [ROLES.VIEWER]: ['VIEW'],
  };

  return permissions[role] && permissions[role].includes(action);
};

// Function to get the access level of a user based on their role
export const getAccessLevel = (role) => {
  switch (role) {
    case ROLES.ADMIN:
      return 'Full Access';
    case ROLES.AGENT:
      return 'Limited Access';
    case ROLES.VIEWER:
      return 'View-Only Access';
    default:
      return 'No Access';
  }
};
