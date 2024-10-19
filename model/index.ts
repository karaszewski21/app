export type ProductType = 'book' | 'reader' | 'audio_play';
export type ResourceType = 'quiz' | 'audiobook' | 'english' | 'printouts';
export type LangType = 'pl' | 'eng';

export interface Book {
    id: string,
    ageGroupId: number,
    indexType?: string,
    indexUrl: string,
    gallery: string[],
    title: string,
    description: string,
    isLock: boolean,
    rating: number, 
    reviewCount: number,
    type: ProductType,
    resource: Resource[]
}

export interface Reader {
    id: string,
    ageGroupId: number,
    indexType?: string,
    indexUrl: string,
    gallery: string[],
    title: string,
    description: string,
    rating: number, 
    reviewCount: number,
    type: ProductType,
    resource: Resource[]
}

export interface AudioPlay {
    id: string,
    ageGroupId: number,
    indexUrl: string,
    gallery: string[],
    title: string,
    description: string,
    rating: number, 
    reviewCount: number,
    type: ProductType,
    resource: Resource[]
    versions: Version[]
}

export interface AgeGroup {
    id: number,
    title: string,
    imageUrl: string
}

export interface Resource {
    type: string,
    ids: string[],
}

export interface Version {
    type: LangType,
    name: string,
    narrator: string,
    duration: number,
    imageUrl: string,
    audioFile: string
}