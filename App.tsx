import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import Theme from './scr/screen/Theme';
import UserContext from './scr/context/user';
import Wrapper from './scr/screen/Wrapper';
import { useState } from 'react';


export default function App() {

  const [user, setUser] = useState(null);

  return (
    <NativeBaseProvider theme={Theme}>
      <UserContext.Provider value={{user: user, setUser}}>
        <StatusBar style="auto" />
        <Wrapper />
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
