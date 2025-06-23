export interface AnalysisResponse {
  html_version: string;
  page_title: string;
  heading_counts: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  internal_link_count: number;
  external_link_count: number;
  inaccessible_link_count: number;
  contains_login_form: boolean;
}

export async function analyzeWebsite(url: string): Promise<AnalysisResponse> {
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ URL: url }),
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
