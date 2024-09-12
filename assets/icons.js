import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <AntDesign name="home" size={26} {...props} />,
    books: (props)=> <Feather name="book-open" size={26} {...props} />,
    fave: (props)=> <AntDesign name="heart" size={26} {...props} />,
    fun: (props)=> <AntDesign name="weibo-circle" size={26} {...props} />,
    profile: (props)=> <AntDesign name="profile" size={26} {...props} />,
}