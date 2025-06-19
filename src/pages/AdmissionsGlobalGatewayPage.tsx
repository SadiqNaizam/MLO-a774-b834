import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Globe, FileText, Users, Award, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const admissionInfoCards = [
  { title: 'Rigorous Admission Criteria', description: 'We seek exceptional minds from around the globe. Our holistic review process considers academic excellence, innovative spirit, leadership potential, and a passion for impact.', icon: <FileText className="h-8 w-8 text-primary mb-3" />, link: "/admissions/criteria" },
  { title: 'The Application Journey', description: 'A step-by-step guide to navigating our application process, including key deadlines, required documentation, and interview stages. Prepare to showcase your unique talents.', icon: <Users className="h-8 w-8 text-primary mb-3" />, link: "/admissions/process" },
  { title: 'Scholarships & Stipends', description: 'InnovateU is committed to attracting top talent. Explore generous scholarship programs and unique student stipends designed to support your academic pursuits fully.', icon: <Award className="h-8 w-8 text-primary mb-3" />, link: "/admissions/financial-aid" },
  { title: 'Vibrant Student Life', description: 'Beyond academics, discover a thriving campus community with diverse clubs, research opportunities, global exchange programs, and a supportive environment.', icon: <Globe className="h-8 w-8 text-primary mb-3" />, link: "/student-life" },
];

const admissionFaqs = [
  { id: "faq-admission-1", question: "What are the key deadlines for applications?", answer: "Early decision deadline is November 1st. Regular decision deadline is January 15th. Please refer to our detailed timeline on the 'Application Process' page." },
  { id: "faq-admission-2", question: "Are international students eligible for financial aid?", answer: "Yes, InnovateU offers need-based financial aid and merit-based scholarships to international students. We are committed to making education accessible to all qualified candidates." },
  { id: "faq-admission-3", question: "What kind of standardized tests are required?", answer: "InnovateU has a test-optional policy for many programs, but submitting strong scores can enhance your application. Please check specific program requirements." },
  { id: "faq-admission-4", question: "Can I visit the campus?", answer: "We offer both virtual and in-person campus tours. Please visit our 'Visit Us' page to schedule your tour and experience InnovateU firsthand." },
];

const AdmissionsGlobalGatewayPage: React.FC = () => {
  console.log('AdmissionsGlobalGatewayPage loaded');

  const handleInquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form submission logic (e.g., console log or send to an API)
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Inquiry Submitted:", data);
    alert("Thank you for your inquiry! We will get back to you soon.");
    event.currentTarget.reset();
  };

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
              <BreadcrumbPage>Admissions Global Gateway</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">Join the Innovators of Tomorrow</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Embark on an extraordinary educational journey at InnovateU. We welcome ambitious and visionary students from across the globe to apply and become part of our dynamic community.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {admissionInfoCards.map((card) => (
            <Card key={card.title} className="flex flex-col hover:shadow-xl transition-shadow">
              <CardHeader>
                {card.icon}
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button variant="outline" asChild className="w-full">
                    <Link to={card.link}>Learn More</Link>
                 </Button>
              </div>
            </Card>
          ))}
        </section>
        
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <section id="faqs" className="lg:col-span-3">
                <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center">
                    <MessageSquare className="mr-3 h-7 w-7 text-primary" />
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {admissionFaqs.map(item => (
                        <AccordionItem value={item.id} key={item.id}>
                            <AccordionTrigger className="text-lg text-left hover:no-underline">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section id="inquiry-form" className="lg:col-span-2">
                <Card className="p-6 sm:p-8 shadow-lg">
                    <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl font-semibold">Have Questions?</CardTitle>
                        <CardDescription>Fill out the form below and our admissions team will get in touch.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <form onSubmit={handleInquirySubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                                <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1 text-base" />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1 text-base" />
                            </div>
                            <div>
                                <Label htmlFor="message" className="text-sm font-medium">Your Question/Message</Label>
                                <Textarea id="message" name="message" placeholder="Ask us anything about admissions, programs, or student life..." required rows={5} className="mt-1 text-base" />
                            </div>
                            <Button type="submit" className="w-full text-base py-3">
                                <Send className="mr-2 h-5 w-5" /> Send Inquiry
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </div>


        <section className="text-center py-12 bg-primary/5 dark:bg-primary/10 rounded-lg">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Apply?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards an unparalleled education. Our application portal is open.
            </p>
            <Button size="lg" asChild className="text-lg py-4 px-8">
                <Link to="/apply-now">Start Your Application</Link>
            </Button>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsGlobalGatewayPage;