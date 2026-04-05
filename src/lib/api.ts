const API_BASE_URL = "http://127.0.0.1:8000";

export interface Scheme {
  id: number;
  name: string;
  url: string;
  details: string;
  benefits: string;
  eligibility: string;
  application_process: string;
  documents_required: string;
  category: string;
}

export interface EligibilityData {
  age: number;
  income: number;
  state: string;
  occupation: string;
}

export interface SchemeMatch extends Scheme {
  match_score: number;
}

export const api = {
  async getCategories(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  },

  async getAllSchemes(): Promise<Scheme[]> {
    const response = await fetch(`${API_BASE_URL}/schemes`);
    if (!response.ok) throw new Error("Failed to fetch schemes");
    return response.json();
  },

  async getSchemesByCategory(category: string): Promise<Scheme[]> {
    const response = await fetch(`${API_BASE_URL}/categories/${category}`);
    if (!response.ok) {
      if (response.status === 404) return [];
      throw new Error(`Failed to fetch schemes for category: ${category}`);
    }
    return response.json();
  },

  async getSchemeById(id: number | string): Promise<Scheme> {
    const response = await fetch(`${API_BASE_URL}/schemes/${id}`);
    if (!response.ok) {
      if (response.status === 404) throw new Error("Scheme not found");
      throw new Error(`Failed to fetch scheme ${id}`);
    }
    return response.json();
  },

  async searchSchemes(query: string): Promise<Scheme[]> {
    const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Failed to search schemes");
    return response.json();
  },

  async checkEligibility(data: EligibilityData): Promise<SchemeMatch[]> {
    const response = await fetch(`${API_BASE_URL}/eligibility`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to check eligibility");
    return response.json();
  }
};
