import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ClipboardList, FileText, DollarSign } from 'lucide-react';
import Button from '../Button';

const AdmissionOverviewSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Submit Application',
      description: 'Complete our simple online admission form with basic student information.'
    },
    {
      icon: FileText,
      title: 'Assessment',
      description: 'Your child participates in a friendly assessment to determine appropriate grade placement.'
    },
    {
      icon: CheckCircle2,
      title: 'Confirmation',
      description: 'Receive acceptance notification and proceed with enrollment documentation.'
    },
    {
      icon: DollarSign,
      title: 'Payment',
      description: 'Complete fee payment and welcome your child to our Mastore family!'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-max">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple Admission Process
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Getting your child enrolled at Mastore Arise & Shine is straightforward and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-white/30">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-primary-foreground/80">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-white/20 transform -translate-y-1/2 z-10" />
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Start Your Child&apos;s Journey?
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                We welcome applications from students of all backgrounds. Our admissions team is ready to answer any questions and help you through the process.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Flexible admission year-round</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Scholarship opportunities available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Payment plans to suit your needs</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/contact" className="w-full">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-primary hover:bg-primary-foreground w-full"
                >
                  Start Admission Now
                </Button>
              </Link>
              <Link href="/academics" className="w-full">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary w-full"
                >
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionOverviewSection;
