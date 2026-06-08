import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Button from '../Button';

const UpcomingEventsSection = () => {
  const events = [
    {
      title: 'Open Day & School Tour',
      date: 'June 15, 2026',
      time: '10:00 AM - 2:00 PM',
      location: 'Nairobi, Kenya',
      description: 'Meet our faculty, tour campus facilities, and learn about our programs firsthand.',
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Admissions Info Session',
      date: 'June 22, 2026',
      time: '3:00 PM - 4:30 PM',
      location: 'Main Hall',
      description: 'Comprehensive overview of admission process, fee structure, and scholarship opportunities.',
      color: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Sports Day & Athletics',
      date: 'July 5, 2026',
      time: '8:00 AM - 4:00 PM',
      location: 'School Ground',
      description: 'Annual inter-house sports competition showcasing student talents and teamwork.',
      color: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Academic Awards Ceremony',
      date: 'July 12, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Auditorium',
      description: 'Celebrating student achievements in academics, sports, and co-curricular activities.',
      color: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-white via-primary/2 to-white relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-max">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Upcoming Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Events & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events that showcase our community and learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${event.color} border-2 ${event.borderColor} rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 group`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {event.title}
              </h3>
              
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/50">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/contact">
            <Button variant="primary">
              Register for Events
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
