import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ArrowLeft, User, MapPin, Wheat } from "lucide-react";
import { useNavigate } from "react-router-dom";

const agricultureSchemes = [
  {
    id: 1,
    title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    description: "Income support scheme providing direct cash transfer of ₹6,000 per year to small and marginal farmers.",
    eligibility: "Small and marginal farmers with landholding up to 2 hectares",
    benefits: "₹6,000 per year in three equal installments",
    status: "Active",
    deadline: "Continuous enrollment"
  },
  {
    id: 2,
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance scheme providing financial support to farmers in case of crop failure due to natural calamities.",
    eligibility: "All farmers growing notified crops in notified areas",
    benefits: "Insurance coverage up to sum insured amount",
    status: "Active",
    deadline: "Before sowing season"
  },
  {
    id: 3,
    title: "Kisan Credit Card (KCC)",
    description: "Credit scheme to provide timely and adequate credit to farmers for agriculture and allied activities.",
    eligibility: "All farmers including tenant farmers, oral lessees, and sharecroppers",
    benefits: "Credit limit based on crop area and scale of finance",
    status: "Active",
    deadline: "Ongoing"
  }
];

const AgricultureSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="secondary" 
            className="mb-6 bg-white text-green-600 hover:bg-green-50"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Wheat className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Agriculture & Farmers</h1>
              <p className="text-green-100 text-lg">Farming support, subsidies & rural development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {agricultureSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-xl text-gray-800">{scheme.title}</CardTitle>
                  <Badge variant={scheme.status === 'Active' ? 'default' : 'secondary'}>
                    {scheme.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{scheme.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <User className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CalendarIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgricultureSchemes;