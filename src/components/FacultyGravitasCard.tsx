import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase, ExternalLink } from 'lucide-react'; // Example icons

interface FacultyGravitasCardProps {
  name: string;
  title: string;
  department: string;
  imageUrl?: string;
  email?: string;
  office?: string;
  profileLink: string; // Link to full faculty profile page
  researchAreas: string[];
  shortBio?: string;
}

const FacultyGravitasCard: React.FC<FacultyGravitasCardProps> = ({
  name,
  title,
  department,
  imageUrl,
  email,
  office,
  profileLink,
  researchAreas,
  shortBio,
}) => {
  console.log("Rendering FacultyGravitasCard for:", name);
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <a href={profileLink} className="block">
            <div className="relative h-48 w-full md:w-48 overflow-hidden">
                 <img
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={imageUrl || `/placeholder.svg?text=${initials}`}
                    alt={name}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent infinite loop if placeholder also fails
                        target.src = `/placeholder.svg?text=${initials}`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

          </a>
        </div>
        <div className="p-4 md:p-6 flex-grow">
          <CardHeader className="p-0 mb-2">
            <a href={profileLink} className="hover:underline">
              <CardTitle className="text-xl font-bold text-primary">{name}</CardTitle>
            </a>
            <CardDescription className="text-sm text-muted-foreground">{title}</CardDescription>
            <Badge variant="outline" className="mt-1 text-xs">{department}</Badge>
          </CardHeader>
          <CardContent className="p-0 text-sm">
            {shortBio && <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">{shortBio}</p>}
            <div className="space-y-1 text-xs text-muted-foreground mb-3">
              {email && <a href={`mailto:${email}`} className="flex items-center hover:text-primary"><Mail className="mr-2 h-3 w-3" /> {email}</a>}
              {office && <p className="flex items-center"><Briefcase className="mr-2 h-3 w-3" /> {office}</p>}
            </div>
            {researchAreas && researchAreas.length > 0 && (
              <div className="mb-3">
                <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Research Areas:</h4>
                <div className="flex flex-wrap gap-1">
                  {researchAreas.slice(0, 3).map(area => <Badge key={area} variant="secondary" className="text-xs">{area}</Badge>)}
                </div>
              </div>
            )}
             <a
              href={profileLink}
              className="inline-flex items-center text-xs font-medium text-primary hover:underline group-hover:text-primary-dark"
            >
              View Full Profile <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default FacultyGravitasCard;