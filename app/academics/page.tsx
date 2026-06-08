import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, BookOpen, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academics | Mastore Arise & Shine School',
  description: 'Our KICD-aligned curriculum covers Languages, Sciences, Humanities, Technical Studies, and Co-Curricular activities. Excellent KPSEA & KJSEA performance.',
};

export default function AcademicsPage() {
  const curriculumAreas = [
    {
      title: 'Languages',
      subjects: ['English', 'Kiswahili', 'French'],
      description: 'Building international communication skills and literacy across three languages from Grade 1 to Grade 9.',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Sciences',
      subjects: ['Science & Technology', 'Integrated Science', 'Agriculture & Nutrition'],
      description: 'Practical, inquiry-based learning in scientific concepts and their real-world applications.',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
    },
    {
      title: 'Humanities',
      subjects: ['Social Studies', 'Christian Religious Education'],
      description: 'Understanding society, culture, and values for informed citizenship and moral development.',
      color: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
    },
    {
      title: 'Technical Studies',
      subjects: ['Computer Studies', 'ICT'],
      description: 'Digital literacy and practical technology skills for the modern world.',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      title: 'Co-Curriculum',
      subjects: ['Creative Arts', 'Sports'],
      description: 'Talent development through artistic expression, physical education, and athletic pursuits.',
      color: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200',
    },
  ];

  const coreCompetencies = [
    {
      title: 'Critical Thinking',
      description: 'Analytical problem-solving and reasoned decision-making',
    },
    {
      title: 'Communication',
      description: 'Effective expression across multiple languages and contexts',
    },
    {
      title: 'Collaboration',
      description: 'Teamwork and interpersonal skills for group success',
    },
    {
      title: 'Creativity',
      description: 'Innovation and original thinking in all subjects',
    },
    {
      title: 'Citizenship',
      description: 'Responsible, ethical contribution to society',
    },
    {
      title: 'Self-Awareness',
      description: 'Personal growth and lifelong learning mindset',
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="relative bg-blue-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mastore/WhatsApp Image 2026-05-28 at 10.47.57.jpeg"
            alt="Mastore Arise & Shine School Classroom"
            fill
            priority
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900/80 to-transparent" />
        </div>
        <div className="relative z-10 container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Academics</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            KICD Competency-Based Curriculum focused on talents, abilities, values, and practical skills.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Curriculum Framework</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We fully embrace the Kenya Institute of Curriculum Development (KICD) Competency-Based Curriculum, ensuring our learners develop essential skills for the 21st century.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${area.color} border ${area.borderColor} rounded-xl p-6`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Grade Levels</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Play Group - PP2 Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.55.13.jpeg"
                  alt="Pre-Primary Pupils Activity"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Play Group - PP2</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Play Group & Pre-Primary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Foundation in literacy, numeracy, and social-emotional development with play-based learning and creative expression.
                  </p>
                </div>
              </div>
            </div>

            {/* Grades 1-6 Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.48.01.jpeg"
                  alt="Primary School Classroom Learning"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Grades 1-6</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Primary School</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strengthening core competencies in languages, mathematics, sciences, social studies, and agricultural nutrition under the CBC framework.
                  </p>
                </div>
              </div>
            </div>

            {/* Grades 7-9 Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.48.031.jpeg"
                  alt="Junior Secondary Science Lab Study"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Grades 7-9</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Junior Secondary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Specialized subject combinations with deeper exploration of integrated sciences, humanities, ICT studies, pre-technical, and creative arts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Core Learning Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreCompetencies.map((competency, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {competency.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {competency.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Performance */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Assessment & Performance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-primary rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">KPSEA Excellence</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Kenya Primary School Education Assessment. Our learners consistently register excellent performance, with most placing above expectations.
              </p>
              <div className="text-4xl font-bold text-primary">95%+</div>
              <p className="text-sm text-muted-foreground">Above Expected Level</p>
            </div>

            <div className="bg-white border-2 border-primary rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">KJSEA Excellence</h3>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Kenya Junior School Education Assessment. Strong, consistent academic performance at the junior secondary level.
              </p>
              <div className="text-4xl font-bold text-primary">90%+</div>
              <p className="text-sm text-muted-foreground">High Achievement Rate</p>
            </div>
          </div>

          {/* Holistic Assessment */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Holistic Assessment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond standardized tests, we assess learners across multiple dimensions: academic achievement, character development, creative expression, physical wellness, and social responsibility.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm font-semibold text-primary">Continuous</p>
                <p className="text-xs text-muted-foreground">Classroom Assessment</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Formative</p>
                <p className="text-xs text-muted-foreground">Growth Tracking</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Summative</p>
                <p className="text-xs text-muted-foreground">Term Examinations</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Diagnostic</p>
                <p className="text-xs text-muted-foreground">Remedial Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Academic Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Remedial Classes</h3>
                <p className="text-muted-foreground text-sm">
                  Extra support for learners needing additional help in specific subjects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Enrichment Programs</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced learning opportunities for high-performing students.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Guidance & Counseling</h3>
                <p className="text-muted-foreground text-sm">
                  Support for personal, social, and academic development.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Parent-Teacher Engagement</h3>
                <p className="text-muted-foreground text-sm">
                  Regular communication and collaboration for holistic learner support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Fee Structure</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our comprehensive fee structure is designed to reflect the quality education and facilities we provide. 
              For detailed information about tuition, boarding, activities, and available payment plans, 
              we encourage you to contact our admissions team directly.
            </p>

            <div className="bg-white border-2 border-primary rounded-2xl shadow-lg p-10 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact For More Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our admissions team is ready to provide you with comprehensive information about all fee structures, 
                available scholarships, and payment options tailored to your family&apos;s needs.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <a
                  href="tel:+254113634661"
                  className="inline-block bg-primary text-primary-foreground hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 mr-4"
                >
                  Call +254 113 634 661
                </a>
                <a
                  href="mailto:mariseshine4@gmail.com"
                  className="inline-block bg-accent text-accent-foreground hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-2">Flexible Payment</h4>
                <p className="text-sm text-muted-foreground">Multiple payment plan options available</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-2">Scholarships</h4>
                <p className="text-sm text-muted-foreground">Merit and need-based scholarships offered</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-2">Transparent Pricing</h4>
                <p className="text-sm text-muted-foreground">No hidden charges - all fees clearly outlined</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
