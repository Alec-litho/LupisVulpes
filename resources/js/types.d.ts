

interface Art {
    id: string
    year: string
    race: string
    characters: string
    show: string
    artType: string
    fandom: string
    sourceLink: string
    isAnimationClip: boolean
    isPlushie: boolean
    isCommission: boolean
    colorsIds: string[]
}

interface ArtFilters {
    year: string | null
    race: string | null
    characters: string | null
    show: string | null
    artType: string | null
    fandom: string | null
    sourceLink: string | null
    isAnimationClip: boolean | null
    isPlushie: boolean | null
    isCommission: boolean | null
}