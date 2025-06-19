import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react'; // Example icon

interface InteractiveDisciplineCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // e.g., <GraduationCap className="h-8 w-8 text-primary" />
  imageUrl?: string; // Optional background image for the card
  link: string; // Link for navigation
  stats?: { label: string; value: string | number }[];
}

const InteractiveDisciplineCard: React.FC<InteractiveDisciplineCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  link,
  stats,
}) => {
  console.log("Rendering InteractiveDisciplineCard:", title);

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="h-full"
    >
      <a href={link} className="block h-full no-underline">
        <Card className="h-full overflow-hidden flex flex-col group">
          {imageUrl && (
            <div className="relative h-40 w-full overflow-hidden">
              <img src={imageUrl} alt={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}
          <CardHeader className={imageUrl ? "relative -mt-12 z-10 p-4 pt-0" : "p-4"}>
            {icon && !imageUrl && <div className="mb-3 text-primary">{icon}</div>}
            <CardTitle className={`text-xl font-semibold ${imageUrl ? 'text-white' : ''}`}>{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <CardDescription className="line-clamp-3 text-sm">{description}</CardDescription>
            {stats && stats.length > 0 && (
              <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                {stats.map(stat => (
                  <div key={stat.label} className="flex justify-between">
                    <span>{stat.label}:</span>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <div className="p-4 pt-0 text-primary flex items-center text-sm font-medium group-hover:underline">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </Card>
      </a>
    </motion.div>
  );
};

export default InteractiveDisciplineCard;