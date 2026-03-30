import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MaisonryGridCard } from "@/components/ui/MaisonryGridCard";
import { EmailForm } from "@/components/forms/EmailForm";
import { Music, BookOpen, BabyIcon, Check } from "lucide-react";

export default function formationsProfessionnelles() {
  return (
    <main className="cursor-default">
      <Nav />
      <Hero
        className="bg-primary-foreground"
        minorText="FORMATION CONTINUE"
        heading={
          <h1 className="font-noto-serif font-bold text-3xl mb-4 md:text-6xl">
            Formations Professionnelles
          </h1>
        }
        imageUrl="/bookcase.png"
        imageAlt=""
        subtext="Pour des profs créatifs, innovants, encore plus compétents !"
        footer={["A1-C2", "FLE Specilaité", "suivi IB"]}
      />

      <section className="w-full mt-32">
        <div className="w-8/9 flex flex-col mx-auto gap-8">
          <h2 className="relative text-3xl font-noto-serif">
            L&apos;Art de{" "}
            <span className="relative before:content-[''] before:absolute before:w-full before:h-1 before:bottom-0 before:bg-primary before:left-0">
              Transmettre
            </span>
          </h2>
          <p>
            Ateliers de formation professionnelle continue destinés aux
            enseignants souhaitant renouveler leurs pratiques.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-6">
            <MaisonryGridCard
              className="w-full md:flex-1 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title=""
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              footerTags={[
                <p
                  key="lessonspratiquefooter"
                  className="px-4 py-0.5 bg-primary/60 rounded-xl"
                >
                  Découvrir l&apos;atelier
                </p>,
              ]}
              icon={<Music size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:flex-1 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title=""
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              footerTags={[
                <p
                  key="lessonspratiquefooter"
                  className="px-4 py-0.5 bg-primary/60 rounded-xl"
                >
                  Découvrir l&apos;atelier
                </p>,
              ]}
              icon={<BookOpen size={40} color="#ce4480" />}
            />
            <MaisonryGridCard
              className="w-full md:flex-1 border-b-8 border-b-transparent hover:border-b-primary hover:border-b-8 transition-colors duration-300"
              title="Pratique Oral"
              paragraphs={[
                "Perfectionnez votre aisance et votre phonétique à travers des débats culturels.",
              ]}
              footerTags={[
                <p
                  key="lessonspratiquefooter"
                  className="px-4 py-0.5 bg-primary/60 rounded-xl"
                >
                  Découvrir l&apos;atelier
                </p>,
              ]}
              icon={<BabyIcon size={40} color="#ce4480" />}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-32 bg-primary-foreground py-24">
        <div className="w-8/9 flex flex-col mx-auto text-center bg-secondary rounded-xl py-24 gap-8">
          <h2 className="text-4xl font-playfair font-semibold text-muted">
            Formation Certifiante
          </h2>
          <div className="flex flex-row mx-auto justify-center py-2 px-8 gap-12 text-2xl rounded-xl bg-primary font-semibold text-white">
            <Check color="green" size={42} />
            <p>
              Formation d&apos;habilitation d&apos;examinateurs correcteurs
              DELF-DALF*
            </p>
          </div>
          <div className="text-muted/70">
            <p>*Tant que Julie est affiliée à un centre d&apos;examen.</p>
          </div>
        </div>
      </section>
      <section className="w-full mt-24 py-8">
        <div className="w-8/9 flex flex-col mx-auto gap-8">
          <div className="w-full text-center">
            <h2 className="relative text-3xl font-noto-serif">
              D&apos;autres besoins de formations ?{" "}
            </h2>
            <p>
              Précisez-les dans le formulaire et nous verrons ensemble comment
              répondre à vos besoins !
            </p>
          </div>
          <div className="flex-1">
            <EmailForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
