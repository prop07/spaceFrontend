import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_API_URL;
if (!apiUrl) {
  throw new Error("API URL is not defined. Check your environment variables.");
}

// Async thunk for fetching data
export const fetchData = createAsyncThunk("space/fetchData", async () => {
  const response = await fetch(`${apiUrl}/space`);
  if (!response.ok) {
    const error = await response.json(); // Parse the response body for an error message
    throw new Error(error.message || "Failed to fetch data");
  }
  return await response.json();
});

const spaceSlice = createSlice({
  name: "space",
  initialState: {
    data: null,
    loading: false,
    error: null,
    message: "",
  },
  reducers: {
    resetSpaceState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = "Fetching data...";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.message = "Data fetched successfully!";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.message = "Failed to fetch data.";
      });
  },
});

export const { resetSpaceState } = spaceSlice.actions;
export default spaceSlice.reducer;
