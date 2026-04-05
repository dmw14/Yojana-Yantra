import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import type { Scheme } from "@/lib/api";

interface SchemeCardProps {
  scheme: Scheme;
  matchScore?: number;
}

export function SchemeCard({ scheme, matchScore }: SchemeCardProps) {
  const navigate = useNavigate();

  // Mapping backend category to frontend category for routing if needed.
  // The backend already returns category like "housing", "education", etc.
  
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4 space-y-0">
          <CardTitle className="text-xl text-blue-900 leading-tight">
            {scheme.name}
          </CardTitle>
          {matchScore !== undefined && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 whitespace-nowrap">
              Match: {Math.round(matchScore * 100)}%
            </Badge>
          )}
        </div>
        <CardDescription className="mt-2">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 uppercase text-xs">
            {scheme.category}
          </Badge>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">
          {scheme.details}
        </p>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-blue-900 hover:bg-blue-800 text-white"
          onClick={() => navigate(`/schemes/${encodeURIComponent(scheme.category)}/${scheme.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
