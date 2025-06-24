export type Module = {
  title: string;
  description: string;
  icon: string;
  route?: string;
  status: "active" | "coming-soon";
  tags: string[];
  featured?: boolean;
};
