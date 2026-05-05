export default function VerticalTabs({ tabs, activeTab, onTabChange }) {
  return (
    <aside className="flex flex-col w-[200px] bg-white border-r border-[#EAECF0] shrink-0 overflow-y-auto">
      <div className="flex flex-col gap-1 p-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`text-left px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
              activeTab === tab
                ? 'bg-[#EEF4FF] text-[#155EEF]'
                : 'text-[#667085] hover:text-[#101828] hover:bg-[#F9FAFB]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </aside>
  )
}
