import React, { useState } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import ResearchHighlightItem from '@/components/ResearchHighlightItem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, BookOpen, Building, Search, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const publications = [
  { title: 'Advancements in Neural Network Architectures for NLP', authors: ['Dr. Eva Rostova', 'Dr. Kenji Tanaka'], publicationDate: 'Oct 2023', abstract: 'This paper presents a novel attention mechanism that significantly improves performance on various NLP benchmarks...', journalOrConference: 'Journal of Machine Learning Research', tags: ['AI', 'NLP', 'Deep Learning'], link: '/research/papers/nlp-advancements' },
  { title: 'Scalable Quantum Algorithms for Drug Discovery', authors: ['Prof. Alistair Finch', 'Dr. Priya Sharma'], publicationDate: 'Sep 2023', abstract: 'We introduce a hybrid quantum-classical algorithm designed to accelerate the identification of potential drug candidates...', journalOrConference: 'Quantum Computing Today', tags: ['Quantum', 'BioTech', 'Algorithms'], link: '/research/papers/quantum-drug-discovery' },
  { title: 'Sustainable Urban Development Using IoT', authors: ['Dr. Maria Gonzalez', 'Prof. Samuel Green'], publicationDate: 'Aug 2023', abstract: 'A framework for leveraging IoT data to optimize resource consumption and improve quality of life in smart cities...', journalOrConference: 'International Conference on Smart Cities', tags: ['IoT', 'Sustainability', 'Urban Planning'], link: '/research/papers/sustainable-iot' },
];

const patents = [
  { title: 'Adaptive Energy Storage System for Renewable Grids', authors: ['InnovateU Tech Transfer'], publicationDate: 'Patent #US1234567B2', abstract: 'A novel system for managing energy flow in microgrids with high renewable penetration, improving stability and efficiency.', journalOrConference: 'Filed: Jan 2023, Granted: Nov 2023', tags: ['Energy', 'Patents', 'Renewables'], link: '/patents/adaptive-energy-storage' },
  { title: 'Bio-degradable Polymer Composite for Medical Implants', authors: ['InnovateU Bioengineering Dept.'], publicationDate: 'Patent #US7654321C1', abstract: 'A new class of biocompatible and biodegradable polymers suitable for temporary medical implants, reducing need for removal surgeries.', journalOrConference: 'Filed: Mar 2022, Granted: Sep 2023', tags: ['BioTech', 'Materials', 'Medical'], link: '/patents/biodegradable-polymer' },
];

const startups = [
  { name: 'QuantumLeap AI', description: 'AI-powered solutions for complex optimization problems.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/startups/quantumleap-ai', industry: 'Artificial Intelligence' },
  { name: 'Helios Renewables', description: 'Developing next-generation solar panel technology.', imageUrl: 'https://images.unsplash.com/photo-1483010695531-99a5f3690099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/startups/helios-renewables', industry: 'Clean Energy' },
  { name: 'BioSynth Innovations', description: 'Sustainable biochemicals for industrial applications.', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/startups/biosynth', industry: 'Biotechnology' },
];

const InnovationImpactPage: React.FC = () => {
  console.log('InnovationImpactPage loaded');
  const [pubSearchTerm, setPubSearchTerm] = useState('');
  const [patentSearchTerm, setPatentSearchTerm] = useState('');

  const filteredPublications = publications.filter(p =>
    p.title.toLowerCase().includes(pubSearchTerm.toLowerCase()) ||
    p.abstract.toLowerCase().includes(pubSearchTerm.toLowerCase()) ||
    p.authors.join(' ').toLowerCase().includes(pubSearchTerm.toLowerCase())
  );

  const filteredPatents = patents.filter(p =>
    p.title.toLowerCase().includes(patentSearchTerm.toLowerCase()) ||
    p.abstract.toLowerCase().includes(patentSearchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Innovation & Impact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">Driving Innovation, Creating Impact</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Discover how InnovateU translates groundbreaking research into real-world solutions, fostering a vibrant ecosystem of discovery, commercialization, and entrepreneurship.
          </p>
        </header>

        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="publications" className="py-3 text-base">
                <BookOpen className="mr-2 h-5 w-5" /> Seminal Publications
            </TabsTrigger>
            <TabsTrigger value="patents" className="py-3 text-base">
                <Lightbulb className="mr-2 h-5 w-5" /> Significant Patents
            </TabsTrigger>
            <TabsTrigger value="startup-center" className="py-3 text-base">
                <Building className="mr-2 h-5 w-5" /> Startup Ecosystem
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <div className="relative mb-6">
              <Input
                type="search"
                placeholder="Search publications by title, author, or keyword..."
                className="w-full pl-10 pr-4 py-3"
                value={pubSearchTerm}
                onChange={(e) => setPubSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {filteredPublications.length > 0 ? (
                filteredPublications.map((pub, index) => (
                    <ResearchHighlightItem key={index} {...pub} />
                ))
            ) : (
                <p className="text-center text-muted-foreground py-8">No publications match your search.</p>
            )}
          </TabsContent>

          <TabsContent value="patents">
            <div className="relative mb-6">
              <Input
                type="search"
                placeholder="Search patents by title or keyword..."
                className="w-full pl-10 pr-4 py-3"
                value={patentSearchTerm}
                onChange={(e) => setPatentSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
             {filteredPatents.length > 0 ? (
                filteredPatents.map((pat, index) => (
                    <ResearchHighlightItem key={index} {...pat} />
                ))
            ) : (
                <p className="text-center text-muted-foreground py-8">No patents match your search.</p>
            )}
          </TabsContent>

          <TabsContent value="startup-center">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold">InnovateU Startup Incubator</h3>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Nurturing the next generation of entrepreneurs. Our incubator provides resources, mentorship, and funding to turn visionary ideas into successful ventures.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {startups.map((startup) => (
                <Card key={startup.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-muted">
                    <img src={startup.imageUrl} alt={startup.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{startup.name}</CardTitle>
                    <CardDescription>{startup.industry}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{startup.description}</p>
                    <Button variant="link" asChild className="mt-4 p-0 h-auto">
                        <a href={startup.link} target="_blank" rel="noopener noreferrer">
                            Learn More <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button size="lg" asChild>
                    <Link to="/partner-with-us">
                        <Users className="mr-2 h-5 w-5" /> Partner With Us
                    </Link>
                </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default InnovationImpactPage;