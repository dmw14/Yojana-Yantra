import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const educationSchemes = [
  {
    id: 1,
    title: "PM YASASVI Scholarship",
    description: "Pre-matric and post-matric scholarship scheme for OBC, EBC and DNT categories to support their education.",
    eligibility: "Students from OBC/EBC/DNT categories, family income up to ₹2.5 lakh",
    benefits: "₹75,000 to ₹1,25,000 per year",
    status: "Active",
    deadline: "31st October 2024"
  },
  {
    id: 2,
    title: "National Scholarship Portal",
    description: "Centralized portal for various scholarship schemes by central and state governments for students.",
    eligibility: "Merit-based and means-based criteria as per scheme",
    benefits: "Varies by scheme (₹10,000 - ₹2,00,000)",
    status: "Active",
    deadline: "Varies by scheme"
  },
  {
    id: 3,
    title: "Beti Bachao Beti Padhao",
    description: "Government initiative to improve child sex ratio and promote education of girl children.",
    eligibility: "Girl children and women",
    benefits: "Educational support and awareness programs",
    status: "Active",
    deadline: "Ongoing"
  }
];

const EducationSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6 text-white border-white hover:bg-white hover:text-green-600"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Book className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Education Schemes</h1>
              <p className="text-green-100 text-lg">Scholarships, loans & educational support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {educationSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-green-500 hover:bg-green-600">
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

export default EducationSchemes;