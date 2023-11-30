import { Flex, Heading, Input } from "native-base";
import Button from "../../components/Button";
import UserContext from "../../context/user";
import { useContext } from "react";


export default function Login() {
    const userData = useContext(UserContext);

    const handleSetUser = () => {
        userData.setUser({
          name: 'Nome do Usuário',
          email: 'email@exemplo.com',
          password: 'senha123',
        });
      };

    return (
        <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
            <Heading>Tela de login</Heading>
            <Input mt={2} />
            <Input mt={2} />
            <Flex width='100%'>
                <Button content="Sign in" variation="primary" handleClick={handleSetUser} />
            </Flex>
        </Flex>
    )
}

function setUser(arg0: { nome: string; email: string; senha: string; }) {
    throw new Error("Function not implemented.");
}
