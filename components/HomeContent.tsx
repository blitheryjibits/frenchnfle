import { CourseCardsContainer } from "@/components/ui/CourseCardsContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export const HomeContent = () => {
  return (
    <main className="w-full text-center flex flex-col justify-center align-middle p-4 font-playfair">
      <div className="mt-12 mb-12 flex flex-col w-full justify-center align-middle">
        <h1 className="text-4xl font-bold pb-4">
          Apprenez le Français avec Confiance
        </h1>
        <p className="font-sans font-medium">
          Que vous soyez débutant ou avancé, je vous accompagne dans votre
          parcours d&apos;apprentissage du français.
        </p>
      </div>

      <CourseCardsContainer />

      <Card className="lg:w-max-[80vw] md:w-[80vw] rounded-md ml-auto mr-auto text-2xl py-6 px-4">
        <CardHeader>
          <CardTitle className="text-4xl pb-6">
            {`Pourquoi Choisir French'nFLE?`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{`Avec plusieurs années d'expérience dans l'enseignement du français langue étrangère (FLE), je propose des cours adaptés à tous les niveaux. Mon approche pédagogique met l'accent sur la pratique orale et la communication authentique.

Ensemble, nous travaillerons sur la grammaire, le vocabulaire, la prononciation et la compréhension, tout en découvrant la richesse de la culture française.`}</p>
        </CardContent>
      </Card>
    </main>
  );
};
