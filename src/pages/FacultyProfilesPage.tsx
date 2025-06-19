import React, { useState, useMemo } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FacultyGravitasCard from '@/components/FacultyGravitasCard';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Users } from 'lucide-react';

const facultyMembers = [
  { name: 'Dr. Aris Thorne', title: 'Professor & Director of AI Research', department: 'Artificial Intelligence', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'aris.thorne@innovateu.edu', office: 'Tech Hall 404', profileLink: '/faculty/aris-thorne', researchAreas: ['Deep Learning', 'NLP', 'Robotics'], shortBio: 'Pioneering advancements in ethical AI and human-machine collaboration. Over 20 years of experience in academia and industry.' },
  { name: 'Prof. Lena Halstrom', title: 'Chair of Quantum Physics', department: 'Quantum Studies', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'lena.halstrom@innovateu.edu', office: 'Planck Building 210', profileLink: '/faculty/lena-halstrom', researchAreas: ['Quantum Entanglement', 'Quantum Computing', 'Quantum Cryptography'], shortBio: 'Leading expert in experimental quantum physics with a focus on developing next-generation quantum devices.' },
  { name: 'Dr. Kenji Tanaka', title: 'Associate Professor, Computer Science', department: 'Computer Science', imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'kenji.tanaka@innovateu.edu', office: 'Cybernetics Tower 701', profileLink: '/faculty/kenji-tanaka', researchAreas: ['Cybersecurity', 'Distributed Systems', 'Blockchain'], shortBio: 'Award-winning researcher in cybersecurity and decentralized systems. Passionate about mentoring students in tech.' },
  { name: 'Prof. Samira Hadid', title: 'Professor, Bioengineering', department: 'Bioengineering', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'samira.hadid@innovateu.edu', office: 'Life Sciences Hub 303', profileLink: '/faculty/samira-hadid', researchAreas: ['Tissue Engineering', 'Biomaterials', 'Regenerative Medicine'], shortBio: 'Innovator in creating novel biomaterials for medical applications. Holds multiple patents in tissue regeneration.' },
  // Add 6 more for pagination example (total 10)
  { name: 'Dr. Ben Carter', title: 'Assistant Professor, Robotics', department: 'Artificial Intelligence', imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'ben.carter@innovateu.edu', office: 'Tech Hall 412', profileLink: '/faculty/ben-carter', researchAreas: ['Humanoid Robots', 'Swarm Robotics', 'AI Ethics'], shortBio: 'Focuses on creating robots that can safely and effectively interact with humans in complex environments.' },
  { name: 'Prof. Anya Sharma', title: 'Professor, Data Science', department: 'Computer Science', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'anya.sharma@innovateu.edu', office: 'Cybernetics Tower 705', profileLink: '/faculty/anya-sharma', researchAreas: ['Big Data Analytics', 'Machine Learning Applications', 'Data Visualization'], shortBio: 'Expert in extracting meaningful insights from large datasets, with applications in healthcare and finance.' },
  { name: 'Dr. Carlos Ruiz', title: 'Associate Professor, Sustainable Energy', department: 'Sustainable Systems', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'carlos.ruiz@innovateu.edu', office: 'Eco Futures Bldg 111', profileLink: '/faculty/carlos-ruiz', researchAreas: ['Solar Energy', 'Energy Policy', 'Grid Modernization'], shortBio: 'Dedicated to advancing sustainable energy solutions and shaping policies for a greener future.' },
  { name: 'Prof. Mei Lin', title: 'Professor, Computational Linguistics', department: 'Artificial Intelligence', imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'mei.lin@innovateu.edu', office: 'Tech Hall 420', profileLink: '/faculty/mei-lin', researchAreas: ['Natural Language Processing', 'Machine Translation', 'Speech Recognition'], shortBio: 'A leading figure in the field of NLP, with a focus on cross-lingual communication and AI-driven language tools.' },
  { name: 'Dr. Omar Hassan', title: 'Assistant Professor, Theoretical Physics', department: 'Quantum Studies', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'omar.hassan@innovateu.edu', office: 'Planck Building 205', profileLink: '/faculty/omar-hassan', researchAreas: ['String Theory', 'Cosmology', 'Quantum Gravity'], shortBio: 'Exploring the fundamental laws of the universe through theoretical physics and mathematical modeling.' },
  { name: 'Prof. Grace Kim', title: 'Professor & Head of Design Innovation', department: 'Design & Innovation', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80', email: 'grace.kim@innovateu.edu', office: 'Creative Hub 101', profileLink: '/faculty/grace-kim', researchAreas: ['Human-Centered Design', 'UX/UI Research', 'Sustainable Product Design'], shortBio: 'Championing design thinking to solve complex problems and create impactful user experiences.' },
];

const departments = ['All Departments', 'Artificial Intelligence', 'Quantum Studies', 'Computer Science', 'Bioengineering', 'Sustainable Systems', 'Design & Innovation'];
const ITEMS_PER_PAGE = 6;

const FacultyProfilesPage: React.FC = () => {
  console.log('FacultyProfilesPage loaded');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredFaculty = useMemo(() => {
    return facultyMembers
      .filter(faculty =>
        faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.researchAreas.join(' ').toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.shortBio?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(faculty =>
        selectedDepartment === 'All Departments' || faculty.department === selectedDepartment
      );
  }, [searchTerm, selectedDepartment]);

  const totalPages = Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE);
  const paginatedFaculty = filteredFaculty.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
       window.scrollTo(0, 0); // Scroll to top on page change
    }
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
              <BreadcrumbPage>Faculty Profiles</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">Meet Our World-Class Faculty</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            The heart of InnovateU lies in its distinguished faculty – leaders, researchers, and mentors dedicated to pushing the boundaries of knowledge and inspiring the next generation.
          </p>
        </header>

        <div className="mb-10 p-6 bg-muted/50 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                    <label htmlFor="search-faculty" className="block text-sm font-medium text-foreground mb-1">Search Faculty</label>
                    <div className="relative">
                        <Input
                            id="search-faculty"
                            type="search"
                            placeholder="Search by name, research area, or keyword..."
                            className="w-full pl-10 pr-4 py-2.5 text-base"
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                </div>
                <div>
                    <label htmlFor="filter-department" className="block text-sm font-medium text-foreground mb-1">Filter by Department</label>
                    <Select
                        value={selectedDepartment}
                        onValueChange={(value) => { setSelectedDepartment(value); setCurrentPage(1); }}
                    >
                        <SelectTrigger id="filter-department" className="w-full py-2.5 text-base">
                            <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                        {departments.map(dept => (
                            <SelectItem key={dept} value={dept} className="text-base">{dept}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
        
        {paginatedFaculty.length > 0 ? (
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
            {paginatedFaculty.map((faculty) => (
              <FacultyGravitasCard key={faculty.email} {...faculty} />
            ))}
          </div>
        ) : (
            <div className="text-center py-16">
                <Users className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Faculty Found</h3>
                <p className="text-muted-foreground">
                    No faculty members match your current filters. Try adjusting your search or department selection.
                </p>
            </div>
        )}

        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                // Basic pagination display logic (can be more complex for many pages)
                if (totalPages <= 5 || page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1 || (currentPage <=3 && page <=3) || (currentPage >= totalPages-2 && page >= totalPages-2)) {
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                            href="#"
                            onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                            isActive={currentPage === page}
                            >
                            {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                } else if ( (currentPage > 3 && page === 2) || (currentPage < totalPages-2 && page === totalPages-1) ) {
                    return <PaginationEllipsis key={`ellipsis-${page}`} />;
                }
                return null;
              })}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FacultyProfilesPage;