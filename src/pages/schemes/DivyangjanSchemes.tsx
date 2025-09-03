import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accessibility, ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const divyangjanSchemes = [
  {
    id: 1,
    title: "Unique Disability Identity (UDID) Project",
    description: "Creating a National Database for Persons with Disabilities to provide a unique identity to every person with disability.",
    eligibility: "All persons with disabilities as per Rights of Persons with Disabilities Act, 2016",
    benefits: "Single identity document, access to various schemes and services",
    status: "Active",
    deadline: "Continuous registration"
  },
  {
    id: 2,
    title: "Indira Gandhi National Disability Pension Scheme",
    description: "Monthly pension scheme providing financial security to persons with severe or multiple disabilities.",
    eligibility: "Persons with severe disability (80% or above), BPL category",
    benefits: "₹300 per month (18-79 years), ₹500 per month (80+ years)",
    status: "Active",
    deadline: "Ongoing enrollment"
  },
  {
    id: 3,
    title: "Accessible India Campaign (Sugamya Bharat)",
    description: "Initiative to make India accessible for persons with disabilities in transport, built environment and ICT.",
    eligibility: "Public buildings, transport systems, and ICT infrastructure",
    benefits: "Barrier-free access, improved accessibility infrastructure",
    status: "Active",
    deadline: "Ongoing implementation"
  }
];

const DivyangjanSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6 text-white border-white hover:bg-white hover:text-indigo-600"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Accessibility className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Divyangjan (Persons with Disabilities)</h1>
              <p className="text-indigo-100 text-lg">Support schemes for persons with disabilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {divyangjanSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-indigo-500 hover:bg-indigo-600">
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

export default DivyangjanSchemes;