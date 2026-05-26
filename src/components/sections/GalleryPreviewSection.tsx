import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/common/Button'
import { galleryItems } from '@/lib/site-content'

const previewItems = galleryItems.slice(0, 4)

export default function GalleryPreviewSection() {
  return (
    <section className="section-pad relative">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="section-kicker bg-blue-50 text-blue-700">
              Learning spaces in view
            </span>
            <h2 className="section-title mt-5">
              A quick visual tour of the computer lab, library, laboratories, and school
              transport fleet.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              These spaces support practical learning, reading culture, science inquiry,
              and dependable daily access for families.
            </p>
            <div className="mt-7">
              <Button href="/gallery" variant="outline" size="lg">
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {previewItems.map((item, index) => (
              <article
                key={item.title}
                className={`group surface-card lift-hover overflow-hidden ${
                  index === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? 'aspect-[16/8.5]' : 'aspect-[4/4.2]'
                  } overflow-hidden`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      index === 0
                        ? '(min-width: 1024px) 620px, 100vw'
                        : '(min-width: 1024px) 300px, 50vw'
                    }
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
