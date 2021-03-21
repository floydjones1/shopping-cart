export interface Picsum {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type Size = "small" | "medium" | "large" | "x-large"