// API service for website analysis

// Define the response type based on the expected API response
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

// Function to analyze a website URL
export async function analyzeWebsite(url: string): Promise<AnalysisResponse> {
  try {
    // The issue description shows a GET request with a body, but browsers don't support this well
    // Using POST is more appropriate for sending data
    const response = await fetch('http://localhost:8080/api/v1/', {
      method: 'GET',
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
