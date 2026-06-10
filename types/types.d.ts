interface ProjectContentType {
  type: "paragraph" | "image";
  value: string;
  alt?: string;
}

interface ProjectType {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;

  program: string;
  institution: string;
  date: string;

  whatWeDid: string;
  goal: string;

  content: ProjectContentType[];

  gallery: string[];

  actions: {
    label: string;
    href: string;
  }[];

  cta: {
    title: string;
    buttonText: string;
    buttonLink: string;
  };
}