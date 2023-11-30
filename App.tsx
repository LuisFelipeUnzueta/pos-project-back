import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import Theme from './scr/screen/Theme';
import UserContext from './scr/context/user';
import Wrapper from './scr/screen/Wrapper';
import { useState } from 'react';
import Home from './scr/screen/Home';


export default function App() {

  const [user, setUser] = useState(null);

  return (
    <NativeBaseProvider theme={Theme}>
      <UserContext.Provider value={{user: user, setUser(user) {},}}>
        <StatusBar style="auto" />
        <Home />
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
