export type Course = {
    id: number,
    title: string,
    description: string,
    duration: string,
    level: string
}


export const courses: Course[] = [
    {
        id: 1,
        title: "Algebra",
        description: "An introduction to algebra.",
        duration: "12 weeks",
        level: "Beginner"
    },
    {
        id: 2,
        title: "World Civ",
        description: "A survey of world civilizations.",
        duration: "6 weeks",
        level: "Intermediate",
    },
    {
        id:3,
        title: "Theoretical Physics",
        description: "A fascinating look at current physics theories.",
        duration: "12 weeks",
        level: "Advanced"
    }
]

