import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { api, SchemeMatch } from "@/lib/api";
import { SchemeCard } from "@/components/SchemeCard";

interface EligibilityFormData {
  age: string;
  income: string;
  state: string;
  occupation: string;
}

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", 
  "Puducherry", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Other"
];

const OCCUPATIONS = [
  "Student", "Farmer", "Government Employee", "Self-Employed", "Business Owner", "Homemaker", "Retired", "Unemployed", "Trader", "Other"
];

const EligibilityForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<SchemeMatch[] | null>(null);

  const form = useForm<EligibilityFormData>({
    defaultValues: {
      age: "",
      income: "",
      state: "",
      occupation: "",
    },
  });

  const onSubmit = async (data: EligibilityFormData) => {
    setLoading(true);
    setError(null);
    try {
      const eligibilityData = {
        age: parseInt(data.age, 10),
        income: parseFloat(data.income),
        state: data.state,
        occupation: data.occupation,
      };
      
      const matches = await api.checkEligibility(eligibilityData);
      setResults(matches);
    } catch (err: any) {
      setError(err.message || "Failed to check eligibility. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setResults(null);
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button 
            variant="ghost" 
            onClick={resetForm}
            className="mb-6 text-blue-900 hover:text-blue-700 hover:bg-blue-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Check Again
          </Button>

          <Alert className="mb-8 border-orange-200 bg-orange-50">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-800 font-semibold">Disclaimer</AlertTitle>
            <AlertDescription className="text-orange-700">
              Results are indicative, not guaranteed eligibility. Please verify official criteria before applying.
            </AlertDescription>
          </Alert>

          <h2 className="text-3xl font-bold text-blue-900 mb-6">Your Eligible Schemes</h2>
          
          {results.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center py-12">
                <h3 className="text-xl font-medium text-gray-700">No highly matching schemes found.</h3>
                <p className="text-gray-500 mt-2">Try adjusting your profile details or browse categories directly.</p>
                <Button className="mt-6 bg-blue-900" onClick={() => navigate('/')}>
                  Browse Categories
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((match) => (
                <SchemeCard 
                  key={match.id} 
                  scheme={match} 
                  matchScore={match.match_score} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6 text-blue-900 hover:text-blue-700 hover:bg-blue-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <Card className="shadow-lg border-0">
            <CardHeader className="bg-blue-900 text-white rounded-t-xl pb-8">
              <CardTitle className="text-2xl mt-2 text-white">Eligibility Check</CardTitle>
              <CardDescription className="text-blue-100 text-base">
                Fill in your basic details to find schemes matched specifically to your profile.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 bg-white rounded-b-xl">
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="age"
                      rules={{ 
                        required: "Age is required",
                        pattern: { value: /^[0-9]+$/, message: "Please enter a valid age" },
                        min: { value: 1, message: "Age must be at least 1" },
                        max: { value: 120, message: "Age must be realistic" }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Age</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 35" className="bg-gray-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="income"
                      rules={{ 
                        required: "Income is required",
                        pattern: { value: /^[0-9]+$/, message: "Please enter a valid numeric income" }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Annual Income (₹)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 250000" className="bg-gray-50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="state"
                    rules={{ required: "State is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">State of Residence</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Select your state" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[300px]">
                            {STATES.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="occupation"
                    rules={{ required: "Occupation is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Occupation Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Select your occupation" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {OCCUPATIONS.map((occupation) => (
                              <SelectItem key={occupation} value={occupation}>
                                {occupation}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing Matches...
                      </>
                    ) : (
                      "Find My Eligible Schemes"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
