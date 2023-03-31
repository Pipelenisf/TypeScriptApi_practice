import { appCard } from "./components/card/interface";

export const getApiCharacters = async(): Promise<Array<appCard>> => {
    const response = await fetch("https://api.disneyapi.dev/characters")
    const attributes = await response.json();
    console.log(attributes.data)
    return attributes.data
}

