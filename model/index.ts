export type ResourceType = 'book' | 'reader' | 'audio_play';
export type LangType = 'pl' | 'eng';

export interface Book {
    id: string,
    indexUrl: string,
    gallery: string[],
    title: string,
    description: string,
    isLock: boolean,
    rating: number, 
    reviewCount: number,
    type: ResourceType
}

export interface Reader {
    id: string,
    indexUrl: string,
    gallery: string[],
    title: string,
    description: string,
    rating: number, 
    reviewCount: number,
    type: ResourceType
}

export interface AudioPlay {
    id: string,
    indexUrl: string,
    gallery: string[],
    title: string,
    description: string,
    rating: number, 
    reviewCount: number,
    type: ResourceType,
    versions: Version[]
}

interface Version {
    type: LangType,
    name: string,
    ageGroup: string,
    narrator: string,
    duration: number,
    audioFile: string
}