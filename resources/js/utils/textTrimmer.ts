


export default function textTrimmer(text:string, lettersNum:number) {
    let trimmedText = text.slice(0,lettersNum)

    return trimmedText.length===text.length? trimmedText : trimmedText.slice(0,trimmedText.length-1) + "..."
}

