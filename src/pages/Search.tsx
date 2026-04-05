import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { api, Scheme } from "@/lib/api";
import { SchemeCard } from "@/components/SchemeCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Search as SearchIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();
  
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSchemes([]);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    api.searchSchemes(query)
      .then(data => {
        setSchemes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 text-blue-900 hover:text-blue-700 hover:bg-blue-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-900 rounded-lg text-white">
            <SearchIcon className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Search Results for "{query}"
          </h1>
        </div>

        {!query.trim() ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700">Enter a search term</h3>
            <p className="text-gray-500 mt-2">Search for government schemes using keywords above.</p>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center h-64">
             <Loader2 className="w-8 h-8 animate-spin text-blue-900" />
          </div>
        ) : error ? (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : schemes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2">No matching schemes found</h3>
            <p className="text-gray-600">Try adjusting your keywords or browse by category.</p>
            <Button className="mt-6 bg-blue-900 hover:bg-blue-800" onClick={() => navigate('/')}>
              Browse Categories
            </Button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6 font-medium">Found {schemes.length} result(s)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schemes.map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
