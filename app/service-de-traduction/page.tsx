import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { MaisonryGridCard } from "@/components/ui/MaisonryGridCard";
import Image from "next/image";
import {
  Languages,
  SpellCheck,
  ScrollText,
  BriefcaseBusiness,
  UserRoundPen,
} from "lucide-react";
import { ul } from "framer-motion/client";
export default function ServiceDeTraduction() {
  return (
    <main>
      <Nav />
      <Hero
        className="bg-primary-foreground"
        minorText="L'EXCELLENCE DU VERB"
        heading={
          <h1 className="font-noto-serif font-bold text-3xl mb-4 md:text-6xl">
            Traduction & <span className="text-primary">Relecture</span>{" "}
            Académique
          </h1>
        }
        imageUrl="/pentopaper.png"
        imageAlt="pen writing on paper"
        subtext="Professional linguistic services tailored for academics, professionals, and students. We combine precision, cultural nuance, and academic rigor to elevate your writing."
        footer={[
          <Button
            key="traductionbtnhero"
            variant="outline"
            className="w-fit dark:bg-primary bg-primary text-muted text-lg hover:dark:bg-primary hover:shadow-xl hover:dark:text-muted mt-8 py-6 px-6 rounded-xl transition-shadow duration-300"
          >
            Obtenir un Devis Personnalisé
          </Button>,
        ]}
      />

      <section className="w-full mt-32">
        <div className="w-8/9 mx-auto flex flex-col gap-8">
          <h2 className="text-4xl">
            Nos{" "}
            <span className="relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-2 after:bg-primary">
              Spéci
            </span>
            alités
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <MaisonryGridCard
              className="w-full md:w-2/3 pb-16 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title="Traduction Certifiée"
              paragraphs={[
                <p key="traductionsspecialitecardpara" className="text-xl">
                  French to English and English to French translation
                  specialized in academic papers, business documents, and
                  creative literature. Every word is chosen with cultural
                  precision and context in mind.
                </p>,
              ]}
              footerTags={[
                <ul
                  key="traductionspecialitecardlist"
                  className="flex flex-col ml-6 gap-2 text-lg"
                >
                  <li>Thèses & Mémoires</li>
                  <li>Rapports de Recherche</li>
                  <li>Littérature & Essais</li>
                </ul>,
              ]}
              icon={<Languages size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:flex-1 bg-primary text-muted border-b-8 border-b-transparent hover:border-b-muted hover:border-b-8 transition-colors duration-300"
              title="Relecture & Correction"
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              footerTags={[
                <p
                  key="lessonspratiquefooter"
                  className="px-4 pt-16 bg-primary/60 rounded-xl"
                >
                  Découvrir l&apos;atelier
                </p>,
              ]}
              icon={<SpellCheck size={40} color="var(--muted)" />}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <MaisonryGridCard
              className="w-full md:flex-1 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title="Accompagnement Académique"
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              icon={<ScrollText size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:flex-1 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title="Documents d'Affaires"
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              icon={<BriefcaseBusiness size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:flex-1 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title="Style & Narration"
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              icon={<UserRoundPen size={40} color="#ce4480" />}
            />
          </div>
        </div>
      </section>

      <section className="w-full mt-16 py-24 bg-primary-foreground">
        <div className="w-8/9 mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-row md:gap-4 ">
            <div className="relative w-full md:w-1/2 aspect-square mb-24 md:mb-40  rounded-xl overflow-hidden">
              <Image
                src="/book-stack.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full md:w-1/2 aspect-square mt-24 md:mt-40 -ml-12 md:-ml-24 rounded-xl overflow-hidden">
              <Image
                src="/laptop-and-book.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-2xl md:text-4xl">
              La Méthode de L&apos;Atelier
            </h2>
            <p>
              Julie brings a personalized, high-quality approach to every
              project. It&apos;s not just about changing words; it&apos;s about
              understanding the core of your message.
            </p>

            <div>
              <ol className="counter-reset:step space-y-4">
                <li className="relative pl-12 items-center">
                  <span className="absolute left-0 top-[50%] -translate-y-[50%] flex h-8 w-8 items-center justify-center rounded-md bg-red-200 text-red-700 font-bold">
                    <span className="before:content-[counter(list-item)] before:font-eb-garamond"></span>
                  </span>
                  <div>
                    <p className="font-semibold">Immersion Contextuelle</p>
                    <p>
                      Understanding the specific domain and intended audience of
                      your text.
                    </p>
                  </div>
                </li>
                <li className="relative pl-12">
                  <span className="absolute left-0 top-[50%] -translate-y-[50%] flex h-8 w-8 items-center justify-center rounded-md bg-red-200 text-red-700 font-bold">
                    <span className="before:content-[counter(list-item)] before:font-eb-garamond"></span>
                  </span>
                  <div>
                    <p className="font-semibold">Architecture Stylistique</p>
                    <p>
                      Refining the rhythm and flow while ensuring absolute
                      terminological accuracy.
                    </p>
                  </div>
                </li>
                <li className="relative pl-12">
                  <span className="absolute left-0 top-[50%] -translate-y-[50%] flex h-8 w-8 items-center justify-center rounded-md bg-red-200 text-red-700 font-bold">
                    <span className="before:content-[counter(list-item)] before:font-eb-garamond"></span>
                  </span>
                  <div>
                    <p className="font-semibold">
                      Révision Finale Collaborative
                    </p>
                    <p>
                      A final pass to ensure the result exceeds your
                      expectations.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
