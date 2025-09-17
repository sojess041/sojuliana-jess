export type SoundResult = {
    id: number;
    name: string;
    username: string;
    license: string;
    tags: string[];
    previewUrl: string;
  };
  
  export type FreesoundAPIResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: SoundResult[];
  };