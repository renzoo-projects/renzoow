import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Renz delivered an exceptional product that exceeded our expectations. His attention to detail and clean code made collaboration effortless.",
    name: "Maria Santos",
    role: "Project Manager, TechStartup PH",
  },
  {
    quote: "Working with Renz was a pleasure. He understood our vision immediately and translated it into a beautiful, functional application.",
    name: "James Cruz",
    role: "CEO, Digital Solutions Co.",
  },
  {
    quote: "His ability to balance aesthetics with performance is rare. The dashboard he built for us is both stunning and lightning-fast.",
    name: "Dr. Ana Reyes",
    role: "Research Lead, UP Visayas",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            What People <span className="italic text-accent">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-col h-full p-6 bg-muted/30 rounded-2xl"
                  >
                    <Quote className="w-8 h-8 text-accent/40 mb-6" />
                    <p className="text-foreground leading-relaxed mb-8 flex-1">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground text-sm font-sans">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
