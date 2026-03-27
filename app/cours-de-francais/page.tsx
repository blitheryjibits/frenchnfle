import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { MaisonryGridCard } from "@/components/ui/MaisonryGridCard";
import { EmailForm } from "@/components/forms/EmailForm";
import { PriceCard } from "@/components/ui/PricingCard";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  MessagesSquare,
} from "lucide-react";

export default function CourseDeFrancais() {
  return (
    <main className="w-full h-min-screen flex flex-col justify-center font-playfair">
      <Nav />
      <Hero
        minorText="L'EXCELLENCE ACADÉMIQUE"
        heading={
          <h1 className="font-noto-serif font-bold text-3xl mb-4 md:text-6xl">
            Course de Français{" "}
            <span className="text-primary font-playfair">
              Tous Niveaux
            </span>{" "}
          </h1>
        }
        subtext="Une immersion sur-mesure au cœur de la langue française. De l'éveil des plus jeunes aux besoins complexes des professionnels, notre atelier façonne votre réussite."
        imageUrl="/carousel-images/Eiffel-tower-sunrise.jpg"
        imageAlt="image of eiffel tower at sunrise"
        footer={["A1-C2", "FLE Specilaité", "suivi IB"]}
      />

      <section className="w-full">
        <div className="w-full px-4 md:px-0 md:w-8/9 mx-auto flex flex-col gap-8">
          <h2 className="relative text-3xl font-noto-serif before:content-[''] before:absolute before:w-16 before:h-1 before:-bottom-2 before:bg-primary before:left-0">
            Nos Parcours d&apos;Apprentissage
          </h2>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <MaisonryGridCard
              className="w-full md:w-1/4"
              // headerClass="flex flex-row md:flex-col gap-8 text-2xl"
              title="Cours Débutant"
              paragraphs={[
                <p key="coursparaptag">
                  Foundations of grammar and vocabulary for a confident start.
                  inlcudes all ages:
                </p>,
                <ul key="coursparalist" className="ml-2 font-plus-jakart-sans ">
                  <li>Enfant</li>
                  <li>Adolescent</li>
                  <li>Adulte</li>
                </ul>,
              ]}
              icon={<GraduationCap size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:w-1/4"
              title="Pratique Oral"
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              footerTags={[
                <p
                  key="lessonspratiquefooter"
                  className="px-4 py-0.5 bg-primary/60 rounded-xl"
                >
                  B1+
                </p>,
              ]}
              icon={<MessagesSquare size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:w-1/4"
              title="Français de spécialité"
              paragraphs={[
                <ul key="coursspeciallist">
                  <li>Business & Management</li>
                  <li>Tourisme & Hôtellerie</li>
                  <li>Médical & Sciences</li>
                </ul>,
              ]}
              icon={<Briefcase size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:w-1/4"
              title="Programme IB"
              paragraphs={[
                "Accompagnement rigoureux pour le Baccalauréat International.",
              ]}
              icon={<BookOpen size={40} color="#ce4480" />}
            />
          </div>
        </div>
      </section>

      <section className="w-full mt-32">
        <div className="w-full md:w-8/9 mx-auto flex flex-col gap-8">
          <h2 className="relative w-fit text-3xl font-noto-serif before:content-[''] before:absolute  before:w-23 before:h-1 before:-bottom-2 before:bg-primary before:right-0">
            Check Out Our Courses
          </h2>
          <div className="flex flex-col mx-auto md:flex-row gap-6">
            <PriceCard
              title="INITIAL"
              duration="30 mins"
              price="Gratuit"
              priceExtract="Premiere contact et évaluation de niveau"
            />
            <PriceCard
              title="Á LA CARTE"
              duration="1 Heure"
              price={70}
              priceExtract="Flexibilité totale"
            />
            <PriceCard
              title="PACK INITIATION"
              duration="5 Cours"
              price="70"
              priceExtract="69€ par leçon"
            />
            <PriceCard
              featured={true}
              title="LE PLUS POPULAIRE"
              duration="10 Cours"
              price={685}
              priceExtract="68.5€ par leçon"
            />
            <PriceCard
              title="IMMERSION"
              duration="20 Cours"
              price={1330}
              priceExtract="66.5€ par leçon"
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-32 bg-linear-60 from-[#ba3ff7] to-secondary">
        <div className="w-full md:w-8/9 mx-auto flex flex-col gap-4 py-10">
          <h2 className="text-3xl font-playfair font-semibold">
            Find Out More
          </h2>
          <div className="font-noto-serif flex flex-col md:flex-row ">
            <EmailForm />
            <div className="mt-4 md:mt-0">
              <p>We are always happy to respond to any questions</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
