import { useState } from 'react'
import {
  BarChart3, TrendingUp, MessageSquare, Share2,
  Building2, Calendar, Users, Workflow,
} from 'lucide-react'
import AppShell from '../shell/AppShell'
import Canvas from '../shell/Canvas'

const NAV_SECTIONS = [
  {
    items: [
      { icon: BarChart3, label: 'Dashboard' },
      { icon: TrendingUp, label: 'Analytics', active: true },
      { icon: MessageSquare, label: 'Social Posts' },
      { icon: Share2, label: 'Sharing' },
    ],
  },
]

const SECTION_TABS = ['Overview', 'Engagement', 'Audience', 'Performance']
const SUB_TABS = ['Today', 'This week', 'This month', 'Custom range']
const BODY_TABS = ['Summary', 'By platform', 'By content type', 'Trends']

export default function Demo_MainNav_Tabbed_VerticalTabs() {
  const [activeSubTab, setActiveSubTab] = useState('Today')
  const [activeBodyTab, setActiveBodyTab] = useState('Summary')

  return (
    <AppShell
      sidebar="main-nav"
      sidebarProps={{ navSections: NAV_SECTIONS }}
      topbar="tabbed"
      topbarProps={{
        title: 'Social Listening',
        sectionTabs: SECTION_TABS,
        activeSection: 'Analytics',
        subLabel: 'Engagement',
        subTabs: SUB_TABS,
        activeSubTab,
        onSubTabChange: setActiveSubTab,
      }}
      verticalTabs={{
        tabs: BODY_TABS,
        activeTab: activeBodyTab,
        onTabChange: setActiveBodyTab,
      }}
    >
      <Canvas level={1}>
        <div className="mb-5">
          <h1 className="text-[16px] font-semibold text-[#101828]">{activeBodyTab}</h1>
          <p className="text-[13px] text-[#667085] mt-0.5">
            Viewing {activeSubTab.toLowerCase()} engagement metrics
          </p>
        </div>
        <PlaceholderContent activeTab={activeBodyTab} />
      </Canvas>
    </AppShell>
  )
}

function PlaceholderContent({ activeTab }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-[#EAECF0] rounded-lg p-6 h-40 flex items-center justify-center">
        <span className="text-[13px] text-[#98A2B3]">{activeTab} visualization</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {['Metric 1', 'Metric 2', 'Metric 3'].map(label => (
          <div key={label} className="border border-[#EAECF0] rounded-lg p-4">
            <p className="text-[12px] font-medium text-[#667085] mb-2">{label}</p>
            <div className="h-6 w-20 bg-[#F2F4F7] rounded" />
          </div>
        ))}
      </div>
      <div className="border border-[#EAECF0] rounded-lg p-4 h-48 flex items-center justify-center">
        <span className="text-[13px] text-[#98A2B3]">Chart or detailed breakdown</span>
      </div>
    </div>
  )
}
