/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/auth/signin': { page: '/auth/signin' },
        '/auth/signup': { page: '/auth/signup' },
        '/builder/blogbuilder': { page: '/builder/blogbuilder' },
        '/builder/formbuilder': { page: '/builder/formbuilder' },
        '/builder/pagebuilder': { page: '/builder/pagebuilder' },
        '/builder/userbuilder': { page: '/builder/userbuilder' },
        '/projects/calendar': { page: '/projects/calendar' },
        '/projects/chat': { page: '/projects/chat' },
        '/projects/kanban': { page: '/projects/kanban' },
        '/projects/tasks': { page: '/projects/tasks' },
        '/users/[page]': { page: '/users/[page]' },
        '/users/about': { page: '/users/about' },
        '/users/blogs': { page: '/users/blogs' },
        '/users/forms': { page: '/users/forms' },
        '/users/gaming': { page: '/users/gaming' },
        '/users/portfolio': { page: '/users/portfolio' },
        '/users/scheduler': { page: '/users/scheduler' },
        '/users/settings': { page: '/users/settings' },
        '/404': { page: '/404' },
      }
    },
  };
  
  export default nextConfig;
  