import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import Carousel from '@/components/Carousel';
import AnimatedBuildingShowcase from '@/components/AnimatedBuildingShowcase';
import InteractiveDisciplineCard from '@/components/InteractiveDisciplineCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Lightbulb, Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const homepageCarouselSlides = [
  {
    id: 1,
    type: 'image' as 'image',
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Replace with actual university campus image
    alt: 'InnovateU Campus Aerial View',
    title: 'Welcome to InnovateU',
    description: 'Pioneering the Future of Technology and Innovation.',
  },
  {
    id: 2,
    type: 'video' as 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with actual university promotional video
    title: 'Experience Innovation in Motion',
    description: 'See how our students and faculty are changing the world.',
  },
  {
    id: 3,
    type: 'image' as 'image',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Replace with image of students collaborating
    alt: 'Students collaborating in a modern lab',
    title: 'Collaborate and Create',
    description: 'Join a vibrant community of thinkers and builders.',
  },
];

const featuredDisciplines = [
  {
    title: 'Artificial Intelligence & Robotics',
    description: 'Explore the cutting edge of AI, machine learning, and autonomous systems. Our program empowers students to create intelligent solutions for complex global challenges.',
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    imageUrl: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // AI/Robotics related
    link: '/academics/ai-robotics',
    stats: [{ label: 'Research Labs', value: '12+' }, { label: 'Faculty Experts', value: '40+' }],
  },
  {
    title: 'Quantum Information Science',
    description: 'Delve into the revolutionary field of quantum computing and communication. Uncover new paradigms for computation, cryptography, and fundamental physics.',
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    imageUrl: 'https://images.unsplash.com/photo-1635070049013-d37519db7afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Quantum related
    link: '/academics/quantum-science',
    stats: [{ label: 'Active Projects', value: '25+' }, { label: 'Patents Filed', value: '15+' }],
  },
  {
    title: 'Sustainable Engineering & Design',
    description: 'Engineer solutions for a sustainable future. Focus on renewable energy, green infrastructure, and circular economy principles to address environmental challenges.',
    icon: <Newspaper className="h-10 w-10 text-primary" />,
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Sustainability related
    link: '/academics/sustainable-engineering',
    stats: [{ label: 'Impact Score', value: 'A+' }, { label: 'Global Partners', value: '30+' }],
  },
];

const newsItems = [
  { id: 1, title: 'InnovateU Researchers Develop Breakthrough in Battery Technology', date: 'Oct 26, 2023', summary: 'A team from our Material Science department has published findings on a new battery chemistry...', link: '/news/battery-tech' },
  { id: 2, title: 'Annual Tech Summit Announced: "Innovate Next"', date: 'Oct 20, 2023', summary: 'Join us for three days of insightful talks, workshops, and networking opportunities...', link: '/events/tech-summit-2024' },
  { id: 3, title: 'Student Startup "AetherFlow" Secures Seed Funding', date: 'Oct 15, 2023', summary: 'AetherFlow, an AI-driven logistics platform developed by InnovateU alumni, has successfully closed its seed round.', link: '/innovation/aetherflow-funding' },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavigationMenu />
      <main className="flex-grow">
        <section className="relative">
          <Carousel slides={homepageCarouselSlides} options={{ loop: true }} autoplayDelay={6000} showArrows={true} />
        </section>

        <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Discover Our World-Class Campus</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the environment where innovation thrives. Our state-of-the-art facilities and inspiring architecture foster creativity and collaboration.
              </p>
            </div>
            <AnimatedBuildingShowcase
              mediaUrl="https://videos.pexels.com/video-files/2889099/2889099-hd_1920_1080_25fps.mp4" // Replace with high-quality campus video/image
              mediaType="video"
              altText="InnovateU Main Engineering Building Timelapse"
              title="The Epicenter of Innovation"
              description="Our main campus building, a hub of research and learning."
              aspectRatio={16 / 9}
            />
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Flagship Programs & Research</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our leading departments and groundbreaking research areas that are shaping the future.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDisciplines.map((discipline) => (
                <InteractiveDisciplineCard key={discipline.title} {...discipline} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/academics">
                  Explore All Academics <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Latest News & Events</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest happenings, breakthroughs, and upcoming events at InnovateU.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map(item => (
                <Card key={item.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="link" asChild className="p-0 h-auto">
                        <Link to={item.link}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                    <Link to="/news-and-events">
                        View All News & Events
                    </Link>
                </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Ready to Innovate?</h2>
             <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Discover your potential, join a community of pioneers, and start your journey to change the world.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                    <Link to="/admissions">Apply to InnovateU</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">Request Information</Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;