import type { Metadata } from 'next';
import Image from 'next/image';
import { Users, Award, Briefcase, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Mastore Arise & Shine School',
  description: 'Learn about our history, leadership, and values. Established in 2019, we serve learners from PP1 to Grade 9 with excellence and holistic development.',
};

export default function AboutPage() {
  const leadership = [
    {
      role: 'Chairperson',
      name: 'Wilkinson Mwenda',
      bio: 'Visionary leadership driving institutional growth and strategic direction.',
    },
    {
      role: 'Vice Chairperson',
      name: 'Tabitha Kimotho',
      bio: 'Supporting governance and community engagement initiatives.',
    },
    {
      role: 'Secretary & Headteacher',
      name: 'Betty K. Njiru',
      bio: 'Leading the school through transformative growth from kindergarten to comprehensive junior school.',
    },
    {
      role: 'Board Member',
      name: 'Doris Kinanu',
      bio: 'Ensuring quality standards and learner welfare.',
    },
  ];

  const keyFounders = [
    {
      name: 'Madam Florence Kagendo',
      role: 'Co-Founder & Director',
      description: 'Established the community children\'s home foundation that inspired the school\'s mission to serve vulnerable and needy children.',
    },
    {
      name: 'Peter Murage',
      role: 'Co-Founder & Manager',
      description: 'Instrumental in the initial development and community outreach programs.',
    },
    {
      name: 'Mr. Joseph Kamuto',
      role: 'Founding Headteacher',
      description: 'Built the strong educational foundation during the school\'s establishment phase.',
    },
  ];

  return (
    <main>
      {/* Page Header with Real School Assembly Background */}
      <section className="relative bg-blue-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mastore/WhatsApp Image 2026-05-28 at 10.48.062.jpeg"
            alt="Mastore Arise & Shine School Morning Assembly"
            fill
            priority
            className="object-cover object-center brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900/80 to-transparent" />
        </div>
        <div className="relative z-10 container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            From a foundation of service to a beacon of excellence in education since 2019.
          </p>
        </div>
      </section>

      {/* Historical Timeline with Image Collage */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> History
            </span>
            <h2 className="text-4xl font-bold text-foreground">Our Journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              How a vision of holistic, value-centered education blossomed into a leading academic institution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Timeline Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Timeline Item 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/20">
                    1
                  </div>
                  <div className="w-0.5 h-28 bg-blue-100 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">The Foundation Years</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 text-sm">
                    Madam Florence Kagendo and Manager Peter Murage established a community children's home to support vulnerable and needy children in the area. This foundation of compassion and service would later inspire the school's mission.
                  </p>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">Pre-2019</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/20">
                    2
                  </div>
                  <div className="w-0.5 h-28 bg-blue-100 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">School Establishment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 text-sm">
                    In May 2019, Mastore Arise and Shine School was officially established with a clear vision: to provide quality education while developing learners spiritually, socially, and academically. Mr. Joseph Kamuto was appointed as the founding headteacher to lay the strong educational foundation.
                  </p>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">May 2019</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/20">
                    3
                  </div>
                  <div className="w-0.5 h-28 bg-blue-100 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Growth Through Challenges</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 text-sm">
                    During the COVID-19 pandemic, Mr. Kamuto transitioned from his role. Leadership passed to the current headteacher, Betty K. Njiru, who took on the challenge of rebuilding and expanding the school's vision.
                  </p>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">2020-2021</p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/20">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Expansion to Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2 text-sm">
                    Under Madam Betty K. Njiru's leadership, the school has grown from a kindergarten into a comprehensive junior school serving students from PP1 to Grade 9. We now register excellent performance in both KPSEA and KJSEA assessments.
                  </p>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">2022-Present</p>
                </div>
              </div>
            </div>

            {/* Collage Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:sticky lg:top-24">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group border-2 border-slate-50">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.00.jpeg"
                  alt="Mastore administration block"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="250px"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group border-2 border-slate-50 mt-8 lg:mt-12">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.55.14.jpeg"
                  alt="Student Graduation Celebrations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="250px"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md group border-2 border-slate-50 -mt-8 lg:-mt-12 col-span-2">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.57.jpeg"
                  alt="Mastore School Campus Wide View"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Board of Directors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{leader.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Founders */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Key Founders & Leaders</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFounders.map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{founder.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">We strive for the highest standards in all we do, from academics to character development.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">We believe in the power of collaboration among students, families, staff, and society.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Service</h3>
              <p className="text-muted-foreground">We develop responsible and independent persons committed to serving society.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
