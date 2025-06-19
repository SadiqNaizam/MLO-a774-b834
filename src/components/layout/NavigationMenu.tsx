import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu as ShadcnNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Assuming shadcn/ui NavigationMenu
import { cn } from "@/lib/utils";
import { GraduationCap, Rocket, Users, Info, BookOpen, Landmark } from 'lucide-react'; // Example icons

const components: { title: string; href: string; description: string; Icon: React.ElementType }[] = [
  {
    title: "AI & Machine Learning",
    href: "/academics/ai-ml",
    description: "Explore the frontiers of artificial intelligence and machine learning.",
    Icon: GraduationCap,
  },
  {
    title: "Space Exploration Tech",
    href: "/academics/space-tech",
    description: "Innovations in aerospace engineering and interplanetary exploration.",
    Icon: Rocket,
  },
  {
    title: "Quantum Computing",
    href: "/academics/quantum",
    description: "Delve into the next generation of computational power.",
    Icon: BookOpen,
  },
];

const NavigationMenu: React.FC = () => {
  console.log("Rendering NavigationMenu");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Landmark className="h-6 w-6 text-primary" /> {/* University Icon/Logo Placeholder */}
          <span className="font-bold sm:inline-block">InnovateU</span>
        </Link>
        <ShadcnNavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <GraduationCap className="mr-2 h-4 w-4" /> Academics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* This is where DynamicMegaMenuPanel could be integrated */}
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      Icon={component.Icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/innovation" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Rocket className="mr-2 h-4 w-4" /> Innovation & Impact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faculty" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Users className="mr-2 h-4 w-4" /> Faculty
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/admissions" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Info className="mr-2 h-4 w-4" /> Admissions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Add more top-level navigation items here */}
          </NavigationMenuList>
        </ShadcnNavigationMenu>
        {/* Potentially add a mobile menu toggle and other elements like login/search on the right */}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { Icon?: React.ElementType }
>(({ className, title, children, Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {Icon && <Icon className="mr-2 h-5 w-5 text-primary" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenu;