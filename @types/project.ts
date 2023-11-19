export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  stack: [
    {
      title: string;
      linkImage: string;
      linkDoc: string;
    },
  ];
  github: string;
  linkSite?: string;
  complexity: number;
};
