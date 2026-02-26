

import { CourseCard } from "./CourseCard";

export const CourseCardsContainer = () => {
  
    return (
        <div className="w-full flex justify-center" >
            <div className="w-full lg:max-w-[70%] flex flex-wrap justify-center gap-4 mt-12 mb-12">
                <CourseCard 
                    title={'Personal'}
                    content={`Des leçons adaptées à votre niveau et à vos objectifs d'apprentissage.`}
                    icon={"📖"}
                /> 
                <CourseCard 
                    title={'Personal'}
                    content={`Des leçons adaptées à votre niveau et à vos objectifs d'apprentissage.`}
                    icon={"📖"}
                />
                <CourseCard 
                    title={'Personal'}
                    content={`Des leçons adaptées à votre niveau et à vos objectifs d'apprentissage.`}
                    icon={"📖"}
                />
                            <CourseCard 
                    title={'Personal'}
                    content={`Des leçons adaptées à votre niveau et à vos objectifs d'apprentissage.`}
                    icon={"📖"}
                /> 
                <CourseCard 
                    title={'Personal'}
                    content={`Des leçons adaptées à votre niveau et à vos objectifs d'apprentissage.`}
                    icon={"📖"}
                />
                <CourseCard 
                    title={'Personal'}
                    content={`Des leçons adaptées à votre niveau et à vos objectifs d'apprentissage.`}
                    icon={"📖"}
                />
            </div>
        </div>


    )
}

   