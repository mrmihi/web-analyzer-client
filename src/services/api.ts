export interface AnalysisResponse {
  html_version: string;
  title: string;
  headings: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  internal_links: number;
  external_links: number;
  inaccessible_links: number;
  login_form: boolean;
}

export async function analyzeWebsite(url: string): Promise<AnalysisResponse> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}analyze/?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error analyzing website:', error);
    throw error;
  }
}
