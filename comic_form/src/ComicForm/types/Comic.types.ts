export interface Comic{
    id: string;
    title: string;
    issue: string;
    character: string;
    series: string;
    publisher: string;
    imprint: string;
    releaseDate: string;
    year: number;
    cover: 'A' | 'B' | 'C' | '';
    coverArtist: string;
    artist: string;
    writer: string; 
    quantity: number; 
    coverImage: string; 
}

export interface ComicFileData{
    coverImage: File[];
}
export interface ComicFormData{
    id: string;
    title: string;
    issue: string;
    character: string;
    series: string;
    publisher: string;
    imprint: string;
    releaseDate: string;
    year: number;
    cover: 'A' | 'B' | 'C' | '';
    coverArtist: string;
    artist: string;
    writer: string; 
    quantity: number; 
}

export enum Publisher{
    DC = "DC",
    MARVEL = "Marvel",
    DARKHORSE = "Dark Horse",
    AVATAR = "Avatar", 
    BACKSTREE = "Backstree Comics",
    CHARLTON = "Charlton Comics Group",
    DYNAMITE = "Dynamite Comics",
    EC = "EC",
    FIRSTPUBLISHING = "First Publishing",
    IDW = "IDW", 
    LIQUIDCOMICS = "Liquid Comics",
    MAXIMUMPRESS = "Maximum Press",
    SGQ = "SQG",
    SLAVELABOR = "Slave Labor",
    TOPPS = "TOPPS Comics",
    YOE = "YOE", 
    ZENESCOPE = "Zenescope"

}

// const enum Imprint{
//     VERTIGO = "VERTIGO",
//     BLACKLABEL = "Black Label",
//     YOUNGANIMAL = "Young Animal",
//     SANDMAN = "Sandman Universe",
//     HILLHOUSE = "Hill House",
//     DCHORROR = "DC Horror",
//     NONE = ''
// } 