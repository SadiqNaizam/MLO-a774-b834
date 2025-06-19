import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, CalendarDays, ExternalLink } from 'lucide-react'; // Example icons

interface ResearchHighlightItemProps {
  title: string;
  authors: string[];
  publicationDate?: string; // e.g., "Oct 2023" or "2023-10-15"
  abstract: string;
  journalOrConference?: string;
  tags?: string[];
  link?: string; // Link to full paper or project page
}

const ResearchHighlightItem: React.FC<ResearchHighlightItemProps> = ({
  title,
  authors,
  publicationDate,
  abstract,
  journalOrConference,
  tags,
  link,
}) => {
  console.log("Rendering ResearchHighlightItem:", title);

  return (
    <Card className="mb-6 transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary flex items-center">
          <BookOpen className="mr-3 h-5 w-5 text-primary/80" />
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
              <ExternalLink className="inline-block ml-2 h-4 w-4 opacity-70" />
            </a>
          ) : (
            title
          )}
        </CardTitle>
        <div className="text-xs text-muted-foreground space-x-4">
            <span className="flex items-center"><Users className="mr-1.5 h-3 w-3" /> {authors.join(', ')}</span>
            {publicationDate && <span className="flex items-center"><CalendarDays className="mr-1.5 h-3 w-3" /> {publicationDate}</span>}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm line-clamp-3 mb-3">
          {abstract}
        </CardDescription>
        {journalOrConference && (
          <p className="text-xs text-muted-foreground mb-3">
            Published in/Presented at: <span className="font-medium">{journalOrConference}</span>
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResearchHighlightItem;