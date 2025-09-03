import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const healthSchemes = [
  {
    id: 1,
    title: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
    description: "World's largest health insurance scheme providing health cover of ₹5 lakh per family per year.",
    eligibility: "Families identified based on SECC 2011 database, rural and urban poor",
    benefits: "₹5 lakh per family per year for secondary and tertiary care",
    status: "Active",
    deadline: "Continuous enrollment"
  },
  {
    id: 2,
    title: "Pradhan Mantri Surakshit Matritva Abhiyan",
    description: "Initiative to provide assured, comprehensive and quality antenatal care services to all pregnant women.",
    eligibility: "All pregnant women in their 2nd and 3rd trimester",
    benefits: "Free antenatal checkups, high risk pregnancy identification",
    status: "Active",
    deadline: "Ongoing"
  },
  {
    id: 3,
    title: "Janani Suraksha Yojana (JSY)",
    description: "Safe motherhood intervention to reduce maternal and infant mortality by promoting institutional delivery.",
    eligibility: "All pregnant women belonging to BPL families",
    benefits: "Cash assistance ₹1,400 in rural, ₹1,000 in urban areas",
    status: "Active",
    deadline: "Continuous"
  }
];

const HealthSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6 text-white border-white hover:bg-white hover:text-red-600"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Health & Medical</h1>
              <p className="text-red-100 text-lg">Healthcare schemes & medical assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {healthSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-red-500 hover:bg-red-600">
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

export default HealthSchemes;