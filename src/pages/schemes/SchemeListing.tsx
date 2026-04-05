import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, Scheme } from "@/lib/api";
import { SchemeCard } from "@/components/SchemeCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function SchemeListing() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;
    
    setLoading(true);
    setError(null);
    
    api.getSchemesByCategory(category)
      .then(data => {
        setSchemes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

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

        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 capitalize">
          {displayCategory} Schemes
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
             <Loader2 className="w-8 h-8 animate-spin text-blue-900" />
          </div>
        ) : error ? (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : schemes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No schemes found</h3>
            <p className="text-gray-500">There are currently no active schemes in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
