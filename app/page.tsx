import { EmailForm } from "@/components/forms/EmailForm";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/ui/Nav";
import { MaisonryGrid } from "@/components/ui/MaisonryGrid";
import { Footer } from "@/components/Footer";
import { SpotlightTestimonial } from "@/components/SpotLightTestimonial";
import { TestimonialCarousel } from "@/components/FramerTestimonialCarousel";
import { testimonials } from "@/constants/testimonials";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="
      min-h-screen flex flex-col justify-center
      bg-primary-foreground w-full
      "
    >
      <Nav />
      <Hero
        minorText="Professional French Instruction"
        heading={
          <h1 className="font-noto-serif font-bold text-3xl mb-4 md:text-6xl">
            L&apos;art de{" "}
            <span className="text-primary font-playfair">Parler</span>{" "}
            Couramment
          </h1>
        }
        imageUrl="/french-teacher-1.jpeg"
        imageAlt="image of a female french teacher in front of chalkboard"
        subtext="Personalized French coaching designed for modern professionals. From
            cultural nuances to technical mastery, we build your linguistic
            confidence in the heart of the Academic Atelier."
        footer={[
          <div key="homeherofooter" className="flex flex-row gap-6 mx-auto">
            <Button size="lg" className="bg-primary">
              Book a Free Intro
            </Button>
            <Button size="lg" className="bg-muted-foreground">
              View Curriculum
            </Button>
          </div>,
        ]}
      />
      <MaisonryGrid />

      <div
        className="relative w-full px-4 rounded-lg md:px-0 md:w-8/9 flex flex-col justify-center mx-auto mt-32 pt-24 md:pt-0
      isolate overflow-hidden bg-linear-to-b from-background via-background/80 to-muted/40"
      >
        <h2 className="absolute font-bold font-noto-serif text-4xl top-10 left-10 text-[#ef9fc2]">
          What Are The <br />
          <span className="ml-8 mt-4">
            <span className="font-eb-garamond font-semibold text-6xl">
              Students
            </span>{" "}
            Saying
          </span>
        </h2>
        <SpotlightTestimonial
          author="Elena V."
          authorExtra="HR Specialist, Deloitte"
          content="Such a great experience learning french! I went from complete begginer to intermediate in just 6 weeks!"
          imageUrl="/avatars/blue-mohawk.jpg"
        />

        <div className="pb-8">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-primary/5 via-transparent to-transparent" />
      </div>
      <section className="w-full mt-32 text-center">
        <h2 className="text-4xl font-noto-serif">
          Envie d&apos;en savoir plus ?
        </h2>
        <div className="w-2/3 mx-auto py-8 flex flex-col-reverse md:flex-row">
          <EmailForm />
          <div className="flex-1 hidden md:flex h-100% justify-center my-auto text-center font-eb-garamond text-primary">
            <div className="flex flex-col gap-12 text-4xl">
              <div className="-rotate-15 -translate-x-9 -translate-y-9">
                <p>Un seul objectif:</p>
                <p>VOTRE RÉUSSITE</p>
              </div>
              <div className=" -rotate-15 translate-x-9 -translate-y-9">
                <p>One goal :</p>
                <p>YOUR SUCCESS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
