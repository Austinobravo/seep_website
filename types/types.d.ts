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

interface BlogSectionType {
  id: string;
  title: string;
  content: Array<
    | {
        type: "paragraph";
        text: string;
      }
    | {
        type: "list";
        items: string[];
      }
    | {
        type: "numbered-list";
        items: string[];
      }
    | {
        type: "image";
        src: string;
        alt: string;
      }
  >;
}

interface BlogPostType {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  updatedAt: string;
  heroImage: string;
  sections: BlogSectionType[];
}