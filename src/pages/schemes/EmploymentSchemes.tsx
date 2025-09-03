import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, ArrowLeft, Calendar, MapPin, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const employmentSchemes = [
  {
    id: 1,
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    description: "Skill development scheme to enable large number of Indian youth to take up industry-relevant skill training.",
    eligibility: "Youth aged 18-35 years, unemployed or school/college dropouts",
    benefits: "Free skill training and certification, monetary reward up to ₹8,000",
    status: "Active",
    deadline: "Ongoing"
  },
  {
    id: 2,
    title: "Atmanirbhar Bharat Rojgar Yojana",
    description: "Employment incentive scheme to encourage employers to hire new employees and restore jobs lost during COVID-19.",
    eligibility: "New employees with salary up to ₹15,000 per month",
    benefits: "24% of monthly wages paid by government for 2 years",
    status: "Active",
    deadline: "31st March 2025"
  },
  {
    id: 3,
    title: "Start-up India Initiative",
    description: "Government initiative to promote entrepreneurship and support startup ecosystem in India.",
    eligibility: "Registered startups incorporated after 1st April 2016",
    benefits: "Tax exemptions, funding support, incubation facilities",
    status: "Active",
    deadline: "Ongoing"
  }
];

const EmploymentSchemes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6 text-white border-white hover:bg-white hover:text-blue-600"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Employment & Skill Development</h1>
              <p className="text-blue-100 text-lg">Job training, skill development & employment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:gap-8">
          {employmentSchemes.map((scheme) => (
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
                    <User className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Eligibility</h4>
                      <p className="text-sm text-gray-600">{scheme.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Benefits</h4>
                      <p className="text-sm text-gray-600">{scheme.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Deadline</h4>
                      <p className="text-sm text-gray-600">{scheme.deadline}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-blue-500 hover:bg-blue-600">
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

export default EmploymentSchemes;