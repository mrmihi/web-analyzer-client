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
    const formattedURL = new URL(url);
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1/';
    const response = await fetch(`${apiBaseUrl}analyze/?url=${formattedURL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      try {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          throw new Error(errorData.error);
        }
      } catch (error){
        console.error('Error analyzing website:', error);
        throw error;
      }

      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error analyzing website:', error);
    throw error;
  }
}
