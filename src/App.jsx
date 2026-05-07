import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Demo_MainNav_Simple from './pages/Demo_MainNav_Simple'
import Demo_MainNav_Tabbed from './pages/Demo_MainNav_Tabbed'
import Demo_MainNav_Tabbed_VerticalTabs from './pages/Demo_MainNav_Tabbed_VerticalTabs'
import Demo_MainNav_VerticalTabs_BackToolbar from './pages/Demo_MainNav_VerticalTabs_BackToolbar'
import Demo_Level2 from './pages/Demo_Level2'
import Demo_Fullscreen_Builder from './pages/Demo_Fullscreen_Builder'
import Demo_Settings_Tabbed from './pages/Demo_Settings_Tabbed'
import Demo_TopBar_VerticalTabs from './pages/Demo_TopBar_VerticalTabs'
import Demo_Settings_VerticalTabs_BackToolbar from './pages/Demo_Settings_VerticalTabs_BackToolbar'

const SECTIONS = [
  {
    group: 'Main nav',
    demos: [
      {
        path: '/demo-main-nav-simple',
        label: 'Main nav + Simple',
        description: 'Products with no section tabs',
        tag: 'sidebar: main-nav · topbar: simple · canvas: level 1',
      },
      {
        path: '/demo-main-nav-tabbed',
        label: 'Main nav + Tabbed',
        description: 'Social listening pattern',
        tag: 'sidebar: main-nav · topbar: tabbed · canvas: level 1',
      },
      {
        path: '/demo-main-nav-tabbed-vertical-tabs',
        label: 'Main nav + Tabbed + Vertical tabs',
        description: 'Two-level topbar with body-level tab navigation',
        tag: 'sidebar: main-nav · topbar: tabbed · vertical tabs · canvas: level 1',
      },
      {
        path: '/demo-main-nav-vertical-tabs-back-toolbar',
        label: 'Main nav + Vertical tabs + Back toolbar',
        description: 'Contact detail page with side navigation',
        tag: 'sidebar: main-nav · topbar: simple · back toolbar · vertical tabs · canvas: level 1',
      },
      {
        path: '/demo-level2',
        label: 'Level 2 canvas',
        description: 'Topic detail / drill-down pattern',
        tag: 'sidebar: main-nav · topbar: tabbed · canvas: level 2',
      },
      {
        path: '/demo-fullscreen-builder',
        label: 'Full-screen builder',
        description: 'Builder or editor with no sidebar or section tabs',
        tag: 'no sidebar · builder bar · canvas: full screen',
      },
    ],
  },
  {
    group: 'Settings',
    demos: [
      {
        path: '/demo-settings-tabbed',
        label: 'Settings + Tabbed',
        description: 'Phone system / Messaging limits pattern',
        tag: 'sidebar: settings · topbar: tabbed · canvas: level 1',
      },
      {
        path: '/demo-settings-vertical-tabs',
        label: 'Settings + Vertical tabs',
        description: 'Settings page with side navigation',
        tag: 'sidebar: settings · topbar: simple · vertical tabs · canvas: level 1',
      },
      {
        path: '/demo-settings-vertical-tabs-back-toolbar',
        label: 'Settings + Vertical tabs + Back toolbar',
        description: 'Settings detail page with sub-toolbar',
        tag: 'sidebar: settings · topbar: simple · back toolbar · vertical tabs · canvas: level 1',
      },
    ],
  },
]

function DemoIndex() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] p-8">
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-[16px] font-semibold text-[#101828]">HL App Shell</h1>
          <p className="text-[13px] text-[#667085] mt-1">
            Reference implementation of all shell variant combinations. Clone this repo to start a new project.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {SECTIONS.map(section => (
            <div key={section.group}>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-[#98A2B3] mb-3">
                {section.group}
              </p>
              <div className="flex flex-col gap-3">
                {section.demos.map(demo => (
                  <Link
                    key={demo.path}
                    to={demo.path}
                    className="bg-white border border-[#EAECF0] rounded-xl px-5 py-4 flex items-center justify-between hover:border-[#D0D5DD] hover:shadow-sm transition-all group"
                  >
                    <div>
                      <p className="text-[14px] font-semibold text-[#101828] group-hover:text-[#155EEF] transition-colors">
                        {demo.label}
                      </p>
                      <p className="text-[13px] text-[#667085] mt-0.5">{demo.description}</p>
                      <p className="text-[12px] font-medium text-[#98A2B3] mt-1 font-mono">{demo.tag}</p>
                    </div>
                    <span className="text-[#D0D5DD] group-hover:text-[#155EEF] transition-colors text-lg shrink-0 ml-4">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoIndex />} />
        <Route path="/demo-main-nav-simple" element={<Demo_MainNav_Simple />} />
        <Route path="/demo-main-nav-tabbed" element={<Demo_MainNav_Tabbed />} />
        <Route path="/demo-main-nav-tabbed-vertical-tabs" element={<Demo_MainNav_Tabbed_VerticalTabs />} />
        <Route path="/demo-main-nav-vertical-tabs-back-toolbar" element={<Demo_MainNav_VerticalTabs_BackToolbar />} />
        <Route path="/demo-level2" element={<Demo_Level2 />} />
        <Route path="/demo-fullscreen-builder" element={<Demo_Fullscreen_Builder />} />
        <Route path="/demo-settings-tabbed" element={<Demo_Settings_Tabbed />} />
        <Route path="/demo-settings-vertical-tabs" element={<Demo_TopBar_VerticalTabs />} />
        <Route path="/demo-settings-vertical-tabs-back-toolbar" element={<Demo_Settings_VerticalTabs_BackToolbar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
