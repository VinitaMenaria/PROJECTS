//signup 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";
import { jwtDecode } from 'jwt-decode';


// Register User
export const Register = createAsyncThunk('/user/register', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:3000/api/register', data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        // Return rejectWithValue to handle rejection properly
        return rejectWithValue(error.response?.data ? error.response.data : error.message);
    }
});

// Login User
export const userLogin = createAsyncThunk('/user/login', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:3000/api/login', data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        // Handle error properly and return rejectWithValue
        return rejectWithValue(error.response?.data ? error.response.data : error.message);
    }
});

const initialState = {
    loading: false,
    error: null,
    token: null,
    name: null,
    role: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        Logout: (state) => {
           state.token = null,
              state.role = null,
              state.name = null,
              localStorage.removeItem('token'),
              localStorage.removeItem('role'),
              localStorage.removeItem('name')
              localStorage.removeItem('cart')
        }
     },
    extraReducers: (builder) => {
        // Register cases
        builder.addCase(Register.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(Register.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
            toast.success('Account created Successfully');
        })
        .addCase(Register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Error from API response
            // toast.error(action.payload); // Show error in toast
        });

        // Login cases
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;

            const { token } = action.payload;
            const { name, role } = jwtDecode(token); // Decode token for user info

            // Update state with token, role, and name
            state.token = token;
            state.name = name;
            state.role = role;

            // Store token and user info in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("name", name);

            toast.success("Login Successful");
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; // Error from API response
            toast.error(action.payload); // Show error in toast
        });
    }
});

export const {Logout}=userSlice.actions;
export default userSlice.reducer;
