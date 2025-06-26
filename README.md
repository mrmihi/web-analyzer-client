# Web Analyzer Client

A web application that allows users to analyze websites by entering a URL. The application fetches data from a backend API and displays analysis results including HTML version, headings, links, and whether a login form is present.

## Features

- Analyze any website by entering its URL
- View detailed analysis results including:
  - HTML version detection
  - Page title
  - Heading counts (H1-H6)
  - Internal and external link counts
  - Inaccessible link detection
  - Login form detection
- Responsive design that works on desktop and mobile devices
- User-friendly error handling with toast notifications

## Technologies Used

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Containerization**: Docker

## Installation

### Prerequisites

- Node.js 20 or higher
- npm or pnpm

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mrmihi/web-analyzer-client.git
   cd web-analyzer-client
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with pnpm
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   VITE_API_BASE_URL=http://localhost:8080/api/v1/
   ```
   Adjust the URL to match your backend API endpoint.


4. Start the development server:
   ```bash
   npm run dev
   # or with pnpm
   pnpm dev
   ```
   
5. Using Docker:
   ```bash
    docker compose up
   ```
   
6. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a valid URL in the input field (e.g., https://example.com)
2. Click the "Analyze" button
3. View the analysis results in the popup dialog
4. Close the dialog to analyze another website

## API Integration

The application communicates with a backend API to analyze websites. The API endpoint is configured through the `VITE_API_BASE_URL` environment variable.

### API Response Format

```typescript
interface AnalysisResponse {
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
```

## Deployment

### Using Docker Compose

1. Adjust the `VITE_API_BASE_URL` in the `docker-compose.yml` file if needed.

2. Start the service:
   ```bash
   docker-compose up -d
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

