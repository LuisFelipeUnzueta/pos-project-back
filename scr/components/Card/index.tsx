import { View, Image } from "native-base";
import { TouchableOpacity } from "react-native";


interface Props {

    album: string,
    img: string,
    setSelectedAlbum: (album: string) => void,
}

export default function Card ({img , album, setSelectedAlbum} : Props) {
    return (
        <View>
            <TouchableOpacity onPress={() => setSelectedAlbum(album)}>
                <Image m={2} size="x1" alt="Alternate text" source={{uri: img}} />
            </TouchableOpacity>
        </View>

    )
}