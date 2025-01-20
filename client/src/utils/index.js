import {randomPrompts} from "../prebuilts/index"
import FileSaver from "file-saver"

export const getRandomPrompt = (prevPrompt)=>{
    const randomIndex = Math.floor(Math.random() * randomPrompts.length)
    const randomGenPrompt = randomPrompts[randomIndex]
    if(randomGenPrompt === prevPrompt){
        getRandomPrompt(randomGenPrompt)
    }else{
        return randomGenPrompt
    }
}

 export const downloadImage = async(title,photo)=>{
    FileSaver.saveAs(photo,`ImagenAI-download-${title}.jpg`)
}
