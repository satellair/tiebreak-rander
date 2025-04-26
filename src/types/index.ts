export interface songData {
  cueId: string;
  genre: number;
  name: string;
  artist: string;
  chartType: "DX" | "STD";
  level: string | number;
  constant: number;
  difficulty: "master" | "remaster";
}
