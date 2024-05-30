import SideNav from '@/app/ui/dashboard/sidenav';
 
/**
 * Layout component for the dashboard.
 *
 * This component renders a layout for the dashboard with a side navigation
 * and a content area.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to render in the content area.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  // The layout component renders a flex container with a side navigation and a content area.
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* The side navigation */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* The content area */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* Render the children in the content area */}
        {children}
      </div>
    </div>
  );
}
