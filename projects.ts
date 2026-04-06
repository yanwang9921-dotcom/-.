export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "个人作品集网站",
    description: "基于 React, TypeScript 和 Tailwind CSS 构建的现代响应式个人作品集网站，包含流畅的动画效果和深色主题。",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio.example.com",
    github: "https://github.com/example/portfolio"
  },
  {
    id: 2,
    title: "电商管理后台",
    description: "一套功能齐全的电商后台管理系统，支持商品管理、订单处理、数据可视化看板等核心功能。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "Ant Design", "Redux", "ECharts"],
    link: "https://admin.example.com",
    github: "https://github.com/example/ecommerce-admin"
  },
  {
    id: 3,
    title: "在线协作编辑器",
    description: "支持多人实时在线协作的富文本编辑器，采用 WebSocket 实现低延迟的数据同步。",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=800&auto=format&fit=crop&q=60",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    link: "https://editor.example.com",
    github: "https://github.com/example/collaborative-editor"
  }
];
