export type Project = {
    title: string;
    type: 'APP' | 'WEB';
    contentDescription: { [key: string]: string }[];
    contentType: 'video' | 'gallery';
    content: string[]; 
    image: string;
}