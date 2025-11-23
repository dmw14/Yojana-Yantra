import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const seniorCitizenSchemes = [
  {
    id: 1,
    title: "Pradhan Mantri Vaya Vandana Yojana",
    description: "Pension scheme for senior citizens providing assured return of 8% per annum for 10 years.",
    eligibility: "Senior citizens aged 60 years and above",
    benefits: "Guaranteed pension up to ₹9,250 per month for 10 years",
    status: "Active",
    deadline: "31st March 2024"
  },
  {
    id: 2,
    title: "Indira Gandhi National Old Age Pension Scheme",
    description: "Monthly pension scheme for elderly people living below poverty line.",
    eligibility: "BPL individuals aged 60 years and above",
    benefits: "₹200 per month (60-79 years), ₹500 per month (80+ years)",
    status: "Active",
    deadline: "Continuous enrollment"
  },
  {
    id: 3,
    title: "Senior Citizen Savings Scheme (SCSS)",
    description: "Investment scheme offering regular income through interest payments to senior citizens.",
    eligibility: "Individuals aged 60 years and above",
    benefits: "Interest rate of 8.2% per annum, quarterly payouts",
    status: "Active",
    deadline: "Ongoing"
  }
];

const SeniorCitizenSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="secondary" 
            className="mb-6 bg-white text-purple-600 hover:bg-purple-50"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Senior Citizens</h1>
              <p className="text-purple-100 text-lg">Pension schemes & elderly care programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {seniorCitizenSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-purple-500 hover:bg-purple-600">
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

export default SeniorCitizenSchemes;