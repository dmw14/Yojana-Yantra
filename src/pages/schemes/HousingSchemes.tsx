import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const housingSchemes = [
  {
    id: 1,
    title: "Pradhan Mantri Awas Yojana (Urban)",
    description: "Credit linked subsidy scheme for affordable housing for economically weaker sections and low income groups in urban areas.",
    eligibility: "Annual income up to ₹6 lakh for EWS, up to ₹12 lakh for LIG",
    benefits: "Interest subsidy up to ₹2.67 lakh",
    status: "Active",
    deadline: "31st March 2024"
  },
  {
    id: 2,
    title: "Pradhan Mantri Awas Yojana (Rural)",
    description: "Providing assistance to rural households for construction of pucca houses with basic amenities.",
    eligibility: "Rural households without pucca house",
    benefits: "₹1.20 lakh in plain areas, ₹1.30 lakh in hilly areas",
    status: "Active",
    deadline: "Continuous"
  },
  {
    id: 3,
    title: "Affordable Rental Housing Complexes",
    description: "Converting existing government funded vacant houses into Affordable Rental Housing Complexes.",
    eligibility: "Urban migrants and industrial workers",
    benefits: "Subsidized rental housing",
    status: "Active",
    deadline: "Ongoing"
  }
];

const HousingSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6 text-white border-white hover:bg-white hover:text-orange-600"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Home className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Housing Schemes</h1>
              <p className="text-orange-100 text-lg">Affordable housing & home ownership programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {housingSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-orange-500 hover:bg-orange-600">
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

export default HousingSchemes;