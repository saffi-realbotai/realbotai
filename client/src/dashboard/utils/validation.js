// validation.js - Validates input fields for the RealBotAI dashboard

// Function to validate email format
export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  
  // Function to validate password strength
  export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };
  
  // Function to validate required fields
  export const validateRequiredField = (fieldValue) => {
    return fieldValue.trim() !== '';
  };
  