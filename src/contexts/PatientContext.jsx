import { createContext, useContext, useReducer, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

const initialPatients = [
    { id: uuidv4(), name: 'John Smith', email: 'john.smith@email.com', phone: '+1 555-0101', dateOfBirth: '1985-03-15', gender: 'Male', address: '123 Main St, New York', createdAt: '2024-01-15' },
    { id: uuidv4(), name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 555-0102', dateOfBirth: '1990-07-22', gender: 'Female', address: '456 Oak Ave, Boston', createdAt: '2024-01-18' },
    { id: uuidv4(), name: 'Michael Brown', email: 'm.brown@email.com', phone: '+1 555-0103', dateOfBirth: '1978-11-08', gender: 'Male', address: '789 Pine Rd, Chicago', createdAt: '2024-01-20' },
    { id: uuidv4(), name: 'Emily Davis', email: 'emily.d@email.com', phone: '+1 555-0104', dateOfBirth: '1995-02-14', gender: 'Female', address: '321 Elm St, Miami', createdAt: '2024-01-22' },
    { id: uuidv4(), name: 'Robert Wilson', email: 'r.wilson@email.com', phone: '+1 555-0105', dateOfBirth: '1982-09-30', gender: 'Male', address: '654 Cedar Ln, Seattle', createdAt: '2024-01-25' },
];

const PatientsContext = createContext();

const initialState = {
    patients: [],
    ui: {
        openAdd: false,
        openDelete: false,
        openUpdate: false
    },
    selectedPatient: null,
    search: ""
};
const patientsReducer = (state, action) => {
    switch(action.type){
        case "setPatients":
            return {...state, patients: action.payload};

        case "addPatient" :
            return {
                ...state,
                patients: [...state.patients, {
                    ...action.payload,
                    id: uuidv4(),
                    createdAt: new Date().toISOString().split("T")[0],
                }],
                ui: {...state.ui, openAdd: false}
            };

        case "updatePatient" :
            return {
                ...state,
                patients: state.patients.map((p) => (
                    p.id === action.payload.id ? action.payload : p
                )),
                ui: {...state.ui, openUpdate: false}
            };
        
        case "deletePatient" :
            return {
                ...state,
                patients: state.patients.filter((p) => p.id !== action.payload.id),
                ui: {...state.ui, openDelete: false}
            };

        case "setSearch":
            return {...state, search: action.payload};

        case "toggleModal" :
            return{...state, ui: {...state.ui, [action.payload]: !state.ui[action.payload]}};

        case "setSelected":
            return { ...state, selectedPatient: action.payload };

        default:
            return state;
    }
}

export const PatientsProvider = ({children}) => {
    const [state, dispatch] = useReducer(patientsReducer, initialState);

    useEffect(() => {
        const storageUpdate = JSON.parse(localStorage.getItem("updatePatient")) || initialPatients;
        dispatch({type: "setPatients", payload: storageUpdate});
    },[]);

    useEffect(() => {
        localStorage.setItem("updatePatient", JSON.stringify(state.patients));
    },[state.patients]);

    const filteredPatients = useMemo(() => {
        return state.patients.filter(({name, email, phone}) => 
            name.toLowerCase().includes(state.search.toLowerCase()) ||
            email.toLowerCase().includes(state.search.toLowerCase()) ||
            phone.includes(state.search)
        ); 
    },[state.search, state.patients])

    const value = useMemo(() => ({
        ...state,
        filteredPatients,
        dispatch
    }), [state, filteredPatients]);

    return(
        <PatientsContext.Provider value={value}>
            {children}
        </PatientsContext.Provider>
    )
}

export const usePatients = () => {
    return useContext(PatientsContext)
}