import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import Demo_MainNav_Tabbed from './pages/Demo_MainNav_Tabbed'
import Demo_Settings_Tabbed from './pages/Demo_Settings_Tabbed'
import Demo_MainNav_Simple from './pages/Demo_MainNav_Simple'
import Demo_Level2 from './pages/Demo_Level2'
import Demo_TopBar_VerticalTabs from './pages/Demo_TopBar_VerticalTabs'

const DEMOS = [
  {
    path: '/demo-main-nav-tabbed',
    label: 'Main nav + Tabbed',
    description: 'Social Listening pattern',
    tag: 'sidebar: main-nav · topbar: tabbed · canvas: level 1',
  },
  {
    path: '/demo-settings-tabbed',
    label: 'Settings + Tabbed',
    description: 'Phone System / Messaging Limits pattern',
    tag: 'sidebar: settings · topbar: tabbed · canvas: level 1',
  },
  {
    path: '/demo-main-nav-simple',
    label: 'Main nav + Simple',
    description: 'Products with no section tabs',
    tag: 'sidebar: main-nav · topbar: simple · canvas: level 1',
  },
  {
    path: '/demo-level2',
    label: 'Level 2 canvas',
    description: 'Topic Detail / drill-down pattern',
    tag: 'sidebar: main-nav · topbar: tabbed · canvas: level 2',
  },
  {
    path: '/demo-topbar-vertical-tabs',
    label: 'TopBar + Vertical tabs',
    description: 'Settings-page pattern with side navigation',
    tag: 'sidebar: none · topbar: simple · vertical-tabs · canvas: level 1',
  },
]

function DemoIndex() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-[20px] font-semibold text-[#101828]">HL App Shell</h1>
          <p className="text-[13px] text-[#667085] mt-1">
            Reference implementation of all shell variant combinations. Clone this repo to start a new project.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {DEMOS.map(demo => (
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
                <p className="text-[11px] font-medium text-[#98A2B3] mt-1 font-mono">{demo.tag}</p>
              </div>
              <span className="text-[#D0D5DD] group-hover:text-[#155EEF] transition-colors text-lg">→</span>
            </Link>
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
        <Route path="/demo-main-nav-tabbed" element={<Demo_MainNav_Tabbed />} />
        <Route path="/demo-settings-tabbed" element={<Demo_Settings_Tabbed />} />
        <Route path="/demo-main-nav-simple" element={<Demo_MainNav_Simple />} />
        <Route path="/demo-level2" element={<Demo_Level2 />} />
        <Route path="/demo-topbar-vertical-tabs" element={<Demo_TopBar_VerticalTabs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
