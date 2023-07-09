import { Image } from "react-native"
import {images} from "../Constants/index"

const categoriesData = [
    {
        id: 1,
        title: "Pizza",
        image: Image.resolveAssetSource(images?.pizza).uri
    },
    {
        id: 2,
        title: "Burger",
        image: Image.resolveAssetSource(images?.burger).uri
    },
    {
        id: 3,
        title: "Hotdog",
        image: Image.resolveAssetSource(images?.hotdog).uri
    },
    {
        id: 4,
        title: "Drink",
        image: Image.resolveAssetSource(images?.drink).uri
    },
    {
        id: 5,
        title: "Pastry",
        image: Image.resolveAssetSource(images?.pastry).uri
    },
    {
        id: 6,
        title: "Sushi",
        image: Image.resolveAssetSource(images?.sushi).uri
    },
    // {
    //     id: 7,
    //     title: "Salad",
    //     image: Image.resolveAssetSource(images?.drink).uri
    // },
    {
        id: 8,
        title: "Noodles",
        image: Image.resolveAssetSource(images?.noodle).uri
    },
    // {
    //     id: 9,
    //     title: "Rice",
    //     image: Image.resolveAssetSource(images?.drink).uri
    // },
    {
        id: 10,
        title: "Pasta",
        image: Image.resolveAssetSource(images?.pasta).uri
    },
    // {
    //     id: 11,
    //     title: "Fries",
    //     image: Image.resolveAssetSource(images?.drink).uri
    // },
    {
        id: 12,
        title: "Sandwich",
        image: Image.resolveAssetSource(images?.sandwich).uri
    },
    // {
    //     id: 13,
    //     title: "Soup",
    //     image: Image.resolveAssetSource(images?.drink).uri
    // },
    // {
    //     id: 14,
    //     title: "Dessert",
    //     image: Image.resolveAssetSource(images?.drink).uri
    // },
    {
        id: 15,
        title: "Sweets",
        image: Image.resolveAssetSource(images?.sweet).uri
    },
]

export {categoriesData};