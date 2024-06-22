import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all students
export const fetchStudents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/student`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

// Fetch a specific student by ID
export const fetchStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/student/${id}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(`Error fetching student with ID ${id}:`, error);
        throw error;
    }
};

// Fetch current student profile
export const fetchStudentProfile = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/studentcurrent`, { withCredentials: true });
        const form = {
            firstName: response.data.first_name,
            middleName: response.data.middle_name,
            lastName: response.data.last_name,
            suffix: response.data.suffix,
            dateOfBirth: response.data.date_of_birth,
            gender: response.data.gender,
            email: response.data.email_address,
            contactNumber: response.data.contact_number,
            homeAddress: response.data.home_address,
            collegeDepartment: response.data.dept_id,
            degreeProgram: response.data.program_id,
            studentType: response.data.student_type
        };
        return form;
    } catch (error) {
        console.error(`Error fetching student:`, error);
        throw error;
    }
};

// Checks if username already exists
export const usernameExists = async (username) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/exists/username/${username}`);
        return response.data.exists;
    } catch (error) {
        console.error('Error validating username', error);
    }
}

// Checks if email already exists
export const userEmailExists = async (email) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/exists/email/${email}`);
        return response.data.exists;
    } catch (error) {
        console.error('Error validating email', error);
    }
}

// Register a new user
export const registerUser = async (email, username, password, role) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, { email, username, password, role }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Login a user
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { username, password }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Fetch user profile
export const fetchUserProfile = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/profile`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

// Fetch user role
export const fetchRole = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/profile/role`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};
    
// Logout user
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

// Fetch Departments
export const fetchDepartments = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/department`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching departments:', error);
        throw error;
    }
};

// Fetch Programs of a specific Department
export const fetchPrograms = async (dept_id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/program/${dept_id}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(`Error fetching programs with Department ID ${dept_id}:`, error);
        throw error;
    }
};

// Fetch Programs of a specific Department
export const fetchProgram = async (program_id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/program/progid/${program_id}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(`Error fetching programs with Department ID ${program_id}:`, error);
        throw error;
    }
};

// Fetch applications
export const fetchApplications = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/application`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(`Error fetching applications:`, error);
        throw error;
    }
};

// Fetch Application Status using Student ID
export const fetchSessionApplicationStatus = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/application/status/session`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(`Error fetching applications:`, error);
        throw error;
    }
}

// Submit application
export const submitApplication = async (formData) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/student/exists/session`, { withCredentials: true });
        const exists = response.data.exists;
        const mode = (exists ? 'update' : 'create');
        const studentForm = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            middleName: formData.middleName,
            suffix: formData.suffix,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            contactNumber: formData.contactNumber,
            email: formData.email,
            homeAddress: formData.homeAddress
        };
        const applicationForm = {
            programID: formData.degreeProgram,
            studentType: formData.studentType
        };
        await axios.post(`${API_BASE_URL}/${mode}/student`, studentForm, { withCredentials: true });
        await axios.post(`${API_BASE_URL}/${mode}/application`, applicationForm, { withCredentials: true });
    } catch (error) {
        console.error(`Error submitting application:`, error);
        throw error;
    }
};

export const setApplicationStatus = async (studentID) => {
    try {
        await axios.post(`${API_BASE_URL}/application/status/update`, { studentID }, { withCredentials: true });
    } catch (error) {
        console.error(error);
    }
}

// Fetch Application Status using Student ID
export const fetchAdmissionDetails = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/application/details`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error(`Error fetching applications:`, error);
        throw error;
    }
}