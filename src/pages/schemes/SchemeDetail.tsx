import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, Scheme } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Loader2, ExternalLink } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function SchemeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scheme, setScheme] = useState<Scheme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    setError(null);
    
    api.getSchemeById(id)
      .then(data => {
        setScheme(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-900" />
      </div>
    );
  }

  if (error || !scheme) {
    return (
      <div className="min-h-screen p-8 bg-gray-50">
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error || "Scheme not found"}</AlertDescription>
        </Alert>
        <div className="text-center mt-4">
          <Button onClick={() => navigate(-1)} variant="outline">Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-900 hover:text-blue-700 hover:bg-blue-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-blue-900 text-white px-8 py-10">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-4 uppercase">
              {scheme.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{scheme.name}</h1>
          </div>

          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">Overview</h2>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{scheme.details}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">Benefits</h2>
              <div className="bg-blue-50 p-6 rounded-lg text-gray-700 whitespace-pre-wrap leading-relaxed">
                {scheme.benefits}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">Eligibility</h2>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{scheme.eligibility}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">Documents Required</h2>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{scheme.documents_required}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">Application Process</h2>
              <div className="bg-orange-50 p-6 rounded-lg text-gray-700 whitespace-pre-wrap leading-relaxed">
                {scheme.application_process}
              </div>
            </section>
            
            {scheme.url && (
              <section className="pt-6 border-t">
                <Button 
                  asChild
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white gap-2"
                  size="lg"
                >
                  <a href={scheme.url} target="_blank" rel="noopener noreferrer">
                    Apply Now (Official Website)
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
