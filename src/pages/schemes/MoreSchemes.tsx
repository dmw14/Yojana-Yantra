import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const moreSchemes = [
  {
    id: 1,
    title: "Pradhan Mantri Ujjwala Yojana",
    description: "LPG connection scheme to provide clean cooking fuel to women from BPL households.",
    eligibility: "Women aged 18 years and above from BPL families",
    benefits: "Free LPG connection with financial assistance of ₹1,600",
    status: "Active",
    deadline: "Ongoing"
  },
  {
    id: 2,
    title: "Atal Pension Yojana",
    description: "Pension scheme for unorganized sector workers guaranteeing fixed pension after 60 years of age.",
    eligibility: "Indian citizens aged 18-40 years",
    benefits: "Fixed pension of ₹1,000 to ₹5,000 per month after 60",
    status: "Active",
    deadline: "Continuous enrollment"
  },
  {
    id: 3,
    title: "Swachh Bharat Mission",
    description: "Cleanliness campaign to make India open defecation free and improve solid waste management.",
    eligibility: "All rural and urban households without toilet facilities",
    benefits: "Financial assistance for toilet construction",
    status: "Active",
    deadline: "Ongoing"
  }
];

const MoreSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="secondary" 
            className="mb-6 bg-white text-gray-800 hover:bg-gray-100"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <MoreHorizontal className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">More Schemes</h1>
              <p className="text-gray-100 text-lg">Explore additional schemes & categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {moreSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-gray-500 hover:bg-gray-600">
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

export default MoreSchemes;