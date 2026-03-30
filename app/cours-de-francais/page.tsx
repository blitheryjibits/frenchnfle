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
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function CourseDeFrancais() {
  return (
    <main className="w-full h-min-screen flex flex-col justify-center font-playfair">
      <Nav />
      <Hero
        className="bg-primary-foreground"
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
          <h2 className="relative text-3xl font-noto-serif ">
            <span className="relative before:content-[''] before:absolute before:w-full before:h-1 before:bottom-0 before:bg-primary before:left-0">
              Nos P
            </span>
            arcours d&apos;Apprentissage
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

      <section className="w-full mt-32 bg-primary-foreground py-12">
        <div className="w-full h-fit md:px-0 md:w-8/9 mx-auto flex flex-col md:flex-row gap-8 px-6">
          <div className="w-full md:flex-1 h-100%">
            <div className="relative max-w-96 aspect-square mx-auto">
              <Image
                src="/pen-paper-table.png"
                alt="pen and paper on a table"
                fill
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 text-pretty">
            <h2 className="text-3xl">PRÉPARATION AUX EXAMENS ET TESTS</h2>
            <p>
              Maximisez vos chances de réussite avec nos sessions intensives
              dédiées aux certifications officielles internationales.
            </p>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li>
                <ul>
                  <li className="font-semibold text-accent flex items-start leading-none">
                    <span className="inline-block mr-2">
                      <CheckCircle color="green" />
                    </span>
                    DELF-DALF / TEF / TCF
                  </li>
                  <li className="ml-8">
                    Niveaux A1 à C2 couverts avec supports officiels.
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="font-semibold text-accent flex items-start leading-none">
                    <span className="inline-block mr-2">
                      <CheckCircle color="green" />
                    </span>
                    Fidé Suisse / IB DP
                  </li>
                  <li className="ml-8">
                    Spécialisation pour les résidents suisses et élèves du BI.
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="font-semibold text-accent flex items-start leading-none">
                    <span className="inline-block mr-2">
                      <CheckCircle color="green" />
                    </span>
                    Corrections of mock exams
                  </li>
                  <li className="ml-8">
                    Retours détaillés et coaching personnalisé après chaque
                    examen blanc.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full mt-32 py-12">
        <div className="w-full md:w-8/9 mx-auto flex flex-col gap-8 px-6 md:px-0">
          <h2 className="w-fit text-3xl font-noto-serif">
            Check Out Our C
            <span className="relative before:content-[''] before:absolute  before:w-full before:h-1 before:bottom-0 before:bg-primary before:right-0">
              ourses
            </span>
          </h2>
          <div className="flex flex-col mx-auto md:flex-row md:flex-wrap md:justify-evenly gap-6">
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

      <section className="w-full mt-32 bg-linear-60 from-primary-foreground to-primary/10">
        <div className="w-full md:w-8/9 mx-auto flex flex-col gap-4 py-10 px-6 md:px-0">
          <h2 className="text-3xl font-playfair font-semibold ">
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
