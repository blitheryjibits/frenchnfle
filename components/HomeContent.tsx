
import { CourseCardsContainer } from "@/components/ui/CourseCardsContainer"

export const HomeContent = () => {

    return (
        <main className="w-full text-center flex flex-col justify-center align-middle p-4 font-playfair">
            
            <div className="mt-12 mb-12 flex flex-col w-full justify-center align-middle">
                <h1 className="text-4xl font-bold pb-4">
                    Apprenez le Français avec Confiance
                </h1>
                <p className="font-sans font-medium" >
                    Que vous soyez débutant ou avancé, je vous accompagne dans votre parcours d&apos;apprentissage du français.
                </p>
            </div>

            <CourseCardsContainer />
            
        </main>
    )
}