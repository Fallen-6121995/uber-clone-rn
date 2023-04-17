import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLocation:"chd",
    destination:null,
    travelTimeInformation:null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        setCurrentLocation:(state,action) => {
            state.currentLocation = action.payload
        },
        setdestination:(state,action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation:(state,action) => {
            state.travelTimeInformation = action.payload
        }
    }
});

export const {setCurrentLocation,setdestination,setTravelTimeInformation} = navSlice.actions;
export default navSlice.reducer;
