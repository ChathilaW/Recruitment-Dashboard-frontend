export interface Candidate {
  id: string;
  name: string;
  appliedDate: string;
  rating: number;
  isReferred: boolean;
  avatar: string;
}

export interface Column {
  id: string;
  title: string;
  count: number;
  color: string;
  candidates: Candidate[];
}

export const pipelineData: Column[] = [
  {
    id: "applying",
    title: "Applying Period",
    count: 27,
    color: "var(--tag-orange)",
    candidates: [
      {
        id: "c1",
        name: "Marlon Reynolds",
        appliedDate: "29 Oct, 2023",
        rating: 3.5,
        isReferred: true,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c2",
        name: "Regina Hane",
        appliedDate: "29 Oct, 2023",
        rating: 2,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c3",
        name: "Curtis Baumbach",
        appliedDate: "29 Oct, 2023",
        rating: 3,
        isReferred: true,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c4",
        name: "Jaime Anderson",
        appliedDate: "29 Oct, 2023",
        rating: 0,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
    ],
  },
  {
    id: "screening",
    title: "Screening",
    count: 23,
    color: "var(--tag-purple)",
    candidates: [
      {
        id: "c5",
        name: "Kristi Sipes",
        appliedDate: "20 Oct, 2023",
        rating: 3.5,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c6",
        name: "Randy Dibbert",
        appliedDate: "18 Oct, 2023",
        rating: 3.5,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c7",
        name: "Jane Anderson",
        appliedDate: "18 Oct, 2023",
        rating: 0,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c8",
        name: "Shelia Doyle",
        appliedDate: "13 Oct, 2023",
        rating: 4.5,
        isReferred: true,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c9",
        name: "Cassandra Hartmann",
        appliedDate: "11 Oct, 2023",
        rating: 0,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
    ],
  },
  {
    id: "interview",
    title: "Interview",
    count: 3,
    color: "var(--tag-blue)",
    candidates: [
      {
        id: "c10",
        name: "Cameron Dickens",
        appliedDate: "03 Sep, 2023",
        rating: 4,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c11",
        name: "Merle Vandervort",
        appliedDate: "09 Sep, 2023",
        rating: 4,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c12",
        name: "Jasmine Wiza",
        appliedDate: "10 Sep, 2023",
        rating: 0,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
    ],
  },
  {
    id: "test",
    title: "Test",
    count: 2,
    color: "var(--primary-accent)",
    candidates: [
      {
        id: "c13",
        name: "Lola Kirlin",
        appliedDate: "03 Sep, 2023",
        rating: 4.5,
        isReferred: true,
        avatar: "/images/Placeholder.png",
      },
      {
        id: "c14",
        name: "Virgil Larkin",
        appliedDate: "03 Sep, 2023",
        rating: 0,
        isReferred: false,
        avatar: "/images/Placeholder.png",
      },
    ],
  },
];
