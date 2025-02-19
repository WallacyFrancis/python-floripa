export interface PyNewsCardInterface {
  title: string;
  version: string;
  description: string;
  releaseDate: string;
  logoUrl: string;
  releaseNotes: string;
  bugFixes?: string[];
  updates?: string[];
} 