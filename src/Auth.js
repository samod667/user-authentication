// import React, { useEffect, useState } from 'react'
// import auth from './firebase/config'

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null)

//     useEffect(() => {
//         auth().onAuthStateChanged((user) => setCurrentUser(user));
//     }, [])

//     return (
//         <AuthContext.Provider value={currentUser}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

