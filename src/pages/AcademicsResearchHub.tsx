import React, { useState } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from '@/components/ui/input';
import InteractiveDisciplineCard from '@/components/InteractiveDisciplineCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, FlaskConical, Atom, Brain, Palette, Microscope, Search } from 'lucide-react';

const disciplines = [
  { title: 'Artificial Intelligence', description: 'Master algorithms that enable machines to learn, reason, and act.', icon: <Brain className="h-8 w-8 text-primary" />, imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/academics/ai', stats: [{label: "Courses", value: "50+"}, {label: "Labs", value: "8"}] },
  { title: 'Computer Science Fundamentals', description: 'Build a strong foundation in programming, data structures, and algorithms.', icon: <GraduationCap className="h-8 w-8 text-primary" />, imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/academics/cs-fundamentals', stats: [{label: "Core Modules", value: "12"}, {label: "Faculty", value: "25"}] },
  { title: 'LLM Research Center', description: 'Pioneering research in large language models and their applications.', icon: <FlaskConical className="h-8 w-8 text-primary" />, imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/academics/llm-research', stats: [{label: "Publications", value: "30+"}, {label: "Active Projects", value: "10"}] },
  { title: 'Quantum Engineering', description: 'Explore the principles of quantum mechanics for next-gen technologies.', icon: <Atom className="h-8 w-8 text-primary" />, imageUrl: 'https://images.unsplash.com/photo-1518103794006-cf16533b5869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/academics/quantum-engineering', stats: [{label: "Specializations", value: "4"}, {label: "Research Grants", value: "$5M+"}] },
  { title: 'Bio-Inspired Design', description: 'Learn from nature to create innovative and sustainable solutions.', icon: <Palette className="h-8 w-8 text-primary" />, imageUrl: 'https://images.unsplash.com/photo-1582575433937-2b76aca71b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/academics/bio-design', stats: [{label: "Workshops", value: "10/year"}, {label: "Industry Collabs", value: "5"}] },
  { title: 'Advanced Materials Science', description: 'Discover and engineer novel materials for future applications.', icon: <Microscope className="h-8 w-8 text-primary" />, imageUrl: 'https://images.unsplash.com/photo-1554474053-579f919a5574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', link: '/academics/materials-science', stats: [{label: "Patents", value: "20+"}, {label: "PhD Students", value: "40"}] },
];

const faqItems = [
    { id: "faq1", question: "How are programs structured?", answer: "Our programs combine rigorous coursework, hands-on lab experience, and research opportunities, often culminating in a capstone project or thesis." },
    { id: "faq2", question: "Are there interdisciplinary options?", answer: "Yes, InnovateU encourages interdisciplinary studies. Many departments offer joint programs or allow students to take electives from other fields to broaden their expertise." },
    { id: "faq3", question: "What research opportunities are available for undergraduates?", answer: "Undergraduates have numerous opportunities to engage in research, working alongside faculty mentors on cutting-edge projects. Many participate in our summer research programs or contribute to ongoing lab work." },
    { id: "faq4", question: "How does InnovateU support student innovation?", answer: "We provide access to state-of-the-art labs, makerspaces, mentorship programs, and seed funding opportunities through our campus incubator to help students turn their ideas into reality." }
];

const AcademicsResearchHub: React.FC = () => {
  console.log('AcademicsResearchHub loaded');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDisciplines = disciplines.filter(discipline =>
    discipline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discipline.description.toLowerCase().includes(searchTerm.toLowerCase())
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
              <BreadcrumbPage>Academics & Research</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">Explore Our Academic Universe</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Dive into a world of discovery with InnovateU's diverse range of departments and research centers.
            Find your passion and shape the future with our cutting-edge programs.
          </p>
        </header>

        <section className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <Input
              type="search"
              placeholder="Search disciplines, research areas, or keywords..."
              className="w-full pl-10 pr-4 py-3 rounded-lg text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </section>

        <section id="disciplines" className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            {searchTerm ? `Results for "${searchTerm}"` : "Our Disciplines & Research Centers"}
          </h2>
          {filteredDisciplines.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDisciplines.map((discipline) => (
                <InteractiveDisciplineCard key={discipline.title} {...discipline} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">
              No disciplines found matching your search criteria. Try a different term.
            </p>
          )}
        </section>

        <section id="faqs" className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map(item => (
                     <AccordionItem value={item.id} key={item.id}>
                        <AccordionTrigger className="text-lg hover:no-underline">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AcademicsResearchHub;