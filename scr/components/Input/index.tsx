import { Box, FormControl, Stack, WarningOutlineIcon } from 'native-base';

interface Props {
    variation?: String;
    defaultValue?: String;
    placeholder?: String;
    type: String;

}

export default function Input ({defaultValue, placeholder, type, variation} : Props) {
    return(
    <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
            <FormControl isRequired>
            <Stack mx="4">
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" defaultValue="12345" placeholder="password" />
                <FormControl.HelperText>
                Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
                </FormControl.ErrorMessage>
            </Stack>
            </FormControl>
        </Box>
    </Box>

    )
}
