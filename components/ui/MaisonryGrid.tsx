import { MaisonryGridCard } from "./MaisonryGridCard";
import { Badge } from "@/components/ui/badge";
import { Book, Briefcase, LanguagesIcon } from "lucide-react";
import { Button } from "./button";

export const MaisonryGrid = () => {
  return (
    <section className="w-8/9 mx-auto font-sans">
      <div className="flex flex-col mb-8">
        <h2 className="text-3xl font-noto-serif font-bold mb-4">
          App
          <span className="underline underline-offset-5 decoration-2">
            renez le Français avec{" "}
            <span className="underline underline-offset-9 decoration-1">
              Confiance
            </span>
          </span>
        </h2>
        <p className=" text-lg">
          Que vous soyez débutant ou avancé, je vous accompagne dans votre
          parcours d&apos;apprentissage du français.
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col md:flex-row gap-4">
          {/* card 1 */}
          <MaisonryGridCard
            className="w-full md:w-2/3"
            title="Individual Courses"
            icon={<Book />}
            badge={
              <Badge variant="ghost" className="font-eb-garamond">
                MODULE 1
              </Badge>
            }
            paragraphs={[
              "One-on-one immersion focused on rapid conversational fluency and structural mastery. Ideal for those seeking a fast-track to B2/C1 levels",
            ]}
            footerTags={[
              <p key="a1c2tag" className="px-4 py-0.5 bg-primary/60 rounded-xl">
                A1 - C2
              </p>,
              <p
                key="flexischedtag"
                className="px-4 py-0.5 bg-primary/60 rounded-xl"
              >
                Flexible Schedule
              </p>,
            ]}
          />
          {/* card 2 */}
          <MaisonryGridCard
            className="w-full md:w-1/3"
            icon={<Briefcase />}
            title="Professional Training"
            paragraphs={[
              "Specialized French for business, law, and diplomacy. Master the art of professional correspondence and negotiation",
            ]}
            footerTags={[<Button key="footerbtn4ptc">Learn More -&gt;</Button>]}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* card 3 */}
          <MaisonryGridCard
            className="w-full md:w-1/3"
            icon={<LanguagesIcon />}
            title="Professional Translations"
            paragraphs={[
              "Certified editorial and technical translations. We don't just translate words; we preserve the soul and context of your content",
            ]}
            footerTags={[<Button key="footerbtn4ptc">Learn More -&gt;</Button>]}
          />
          {/* card 4 */}
          <MaisonryGridCard
            className="w-full md:w-2/3"
            icon={<Briefcase />}
            title="Atelier Professional"
            paragraphs={[
              <p key="maisonparatitle" className="underline">
                Ateliers de formation professionnelle continue destinés aux
                enseignants
              </p>,
              <ul key="maisonparaul" className="font-light ml-4">
                <li>
                  Enseigner la prononciation par la chanson et autres techniques
                  vocales,
                </li>
                <li>
                  Utiliser la littérature de jeunesse pour enseigner le FLE,
                </li>
                <li>Adapter sa pédagogie au public enfant,</li>
              </ul>,
              <div key="maisonparacert" className="">
                <p className="underline font-normal">Formation certifiante</p>
                <p className="ml-4 font-light">
                  Formation d&apos;habilitation d&apos;examinateurs correcteurs
                  DELF-DALF*
                </p>
              </div>,
            ]}
            footerTags={[<Button key="footerbtn4ptc">Learn More -&gt;</Button>]}
          />
        </div>
      </div>
    </section>
  );
};
