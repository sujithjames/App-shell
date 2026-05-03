import Sidebar from './Sidebar'
import TopBar from './TopBar'

/**
 * AppShell — composes Sidebar + TopBar + content area.
 *
 * Usage:
 *
 *   <AppShell
 *     sidebar="main-nav"        or "settings"
 *     sidebarProps={{ ... }}    see Sidebar.jsx for full prop reference
 *     topbar="tabbed"           or "simple"
 *     topbarProps={{ ... }}     see TopBar.jsx for full prop reference
 *   >
 *     <Canvas level={1}>
 *       page content here
 *     </Canvas>
 *   </AppShell>
 *
 * Children should always be a Canvas (level 1 or 2).
 * The shell handles nothing inside the canvas — pages own their content.
 */
export default function AppShell({
  sidebar = 'main-nav',
  sidebarProps = {},
  topbar = 'tabbed',
  topbarProps = {},
  children,
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F9FAFB]">
      <Sidebar variant={sidebar} {...sidebarProps} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar variant={topbar} {...topbarProps} />
        <main className="flex-1 flex flex-col min-h-0">
          {children}
        </main>
      </div>
    </div>
  )
}
