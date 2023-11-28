import { Button as NativeButton} from 'native-base';

interface Props {
    content: String;
    variation: String;
    handleClick: () => void;
}

export default function Button ({content, variation, handleClick} : Props) {
    return(
        <NativeButton bg={`${variation}.100`} mt={3} onPress={handleClick}>
            {content}
        </NativeButton>

    )
}