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

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {r.name[0]}
                </div>
                <span className="text-sm font-medium">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
