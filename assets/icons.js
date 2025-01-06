import { AntDesign, Feather, FontAwesome5, Entypo  } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <AntDesign name="home" size={26} {...props} />,
    books: (props)=> <Entypo  name="open-book" size={26} {...props} />,
    fave: (props)=> <AntDesign name="heart" size={26} {...props} />,
    fun: (props)=> <FontAwesome5 name="scroll" size={26} {...props} />,
    profile: (props)=> <AntDesign name="profile" size={26} {...props} />,
}