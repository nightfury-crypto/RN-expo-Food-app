import { Image } from "react-native"
import {images} from "../Constants/index"

const popularData = [
    {
        id: 1,
        title: "Pepper Farm",
        image: Image.resolveAssetSource(images?.popularpizza).uri,
        price: 318,
        rating: 4.8,
        reviews: 100,
    },
    {
        id: 2,
        title: "Burger King",
        image: Image.resolveAssetSource(images?.popularburger).uri,
        price: 80,
        rating: 4.9,
        reviews: 20,
    },
    {
        id: 3,
        title: "Achari Do Pyaza", 
        image: Image.resolveAssetSource(images?.popularpizza).uri,
        price: 318,
        rating: 4.8,
        reviews: 100,
    },
]

export {popularData};