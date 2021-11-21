import {
    Pythagoras,
    Aristotle_and_Plato,
    Diogenes_the_Dog,
    School_of_athens,
    Apollo_and_Minerva
} from "../../../../../data/images";
import Legacy from "./Legacy";

export default function LegacyPost() {
    const legacy = [
        {
            id: 1,
            title: "Alexander the Great",
            image: School_of_athens,
            imageAlt: "Alexander the Great",
            description: `King of Macedonia and a pupil of Aristotle, 
            Alexander is seen here listening attentively to Socrates`,
        },
        {
            id: 2,
            title: "Apollo and Minerva",
            image: Apollo_and_Minerva,
            imageAlt: "Apollo and Minerva",
            description: `Raphael included these two figures to emphasize the 
            schools of thought represented by Aristotle and Plato.`,
        },
        {
            id: 3,
            title: "Pythagoras",
            image: Pythagoras,
            imageAlt: "Pythagoras",
            description: `The renowned mathematician, Pythagoras, embodies arithmetic and music.`,
        },
        {
            id: 4,
            title: "Aristotle and Plato",
            image: Aristotle_and_Plato,
            imageAlt: "Aristotle and Plato",
            description: `Reflecting two schools of thought, these philosophers share a world of provocative and debatable theories.`,
        },
        {
            id: 5,
            title: "Diogenes the Dog",
            image: Diogenes_the_Dog,
            imageAlt: "Diogenes the Dog",
            description: `The cynic Diogenes, hated worldly possessions and lived in a barrel. His attitude is reflected in his clothing and posture.`,
        }
    ];

    return (
        <>
            {legacy.map((post, key) => {
                return <Legacy key={key} post={post}/>
            })}
        </>
    )
}