import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Tedi Bolotin',
    rating: 5,
    text: 'Donavan did an excellent job of cleaning my garbage bins! He was excellent in communication, thorough, followed directions. Happy to have a responsible young man taking this chore off my hands! Happily, I have started quarterly cleanings with him',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    rating: 5,
    text: "Got the car wash service and I'm blown away. My car hasn't looked this clean since I bought it. Great attention to detail!",
  },
  {
    id: 3,
    name: 'Tyler Brooks',
    rating: 5,
    text: 'I was skeptical about trash can washing but wow — no more odors! Donavan is reliable, affordable, and does amazing work.',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-5 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2>What Customers Say</h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-6 list-none p-0">
          {reviews.map(r => (
            <li
              key={r.id}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4"
            >
              {/* Stars are decorative; rating communicated via aria-label */}
              <div className="flex gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="text-yellow-500 fill-yellow-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-foreground text-sm leading-relaxed flex-1 m-0">
                "{r.text}"
              </blockquote>
              <footer className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-sm"
                  aria-hidden="true"
                >
                  {r.name[0]}
                </div>
                <cite className="text-sm font-medium not-italic">{r.name}</cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
