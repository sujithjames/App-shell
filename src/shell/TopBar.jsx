import { Sparkles, Megaphone, Bell, HelpCircle } from 'lucide-react'

function GlobalIcons() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className="size-8 rounded-full bg-[#6938EF] flex items-center justify-center cursor-pointer">
        <Sparkles size={14} className="text-white" />
      </div>
      <div className="relative size-8 cursor-pointer">
        <div className="size-8 rounded-full bg-[#209681] flex items-center justify-center">
          <Megaphone size={14} className="text-white" />
        </div>
        <span className="absolute top-0 right-0 size-2 rounded-full bg-red-500 border border-white" />
      </div>
      <div className="size-8 rounded-full bg-[#FF681E] flex items-center justify-center cursor-pointer">
        <Bell size={14} className="text-white" />
      </div>
      <div className="size-8 rounded-full bg-[#008AEF] flex items-center justify-center cursor-pointer">
        <HelpCircle size={14} className="text-white" />
      </div>
      <div className="size-8 rounded-full bg-[#65B5BC] flex items-center justify-center cursor-pointer">
        <span className="text-white text-[14px] font-medium leading-none">SS</span>
      </div>
    </div>
  )
}

/**
 * TopBar — two variants:
 *
 * variant="tabbed"  (Social Listening / Phone System pattern)
 *   Row 1: title + section tabs + global icons
 *   Row 2: subLabel + sub-tabs + optional action buttons
 *
 *   Props:
 *     title          string           e.g. "Phone System"
 *     sectionTabs    string[]         e.g. ['Voice', 'Messaging', 'Trust center']
 *     activeSection  string           which section tab is highlighted
 *     subLabel       string           e.g. "Messaging" — shown before sub-tabs in row 2
 *     subTabs        string[]         sub-tab labels
 *     activeSubTab   string           which sub-tab is highlighted
 *     onSubTabChange (tab) => void    called when a sub-tab is clicked
 *     actions        ReactNode        optional buttons for the right side of row 2
 *
 * variant="simple"  (single-row products)
 *   Row 1 only: title + global icons. No tabs.
 *
 *   Props:
 *     title          string
 */
export default function TopBar({
  variant = 'tabbed',
  title = 'App Title',
  sectionTabs = [],
  activeSection = '',
  subLabel = '',
  subTabs = [],
  activeSubTab = '',
  onSubTabChange,
  actions,
}) {
  if (variant === 'simple') {
    return (
      <header className="bg-white w-full flex flex-col shrink-0">
        <div className="flex items-center gap-12 px-4 py-1 border-b border-[#EAECF0] shadow-[0px_1px_1px_rgba(16,24,40,0.05)]">
          <span className="text-[20px] font-semibold text-[#101828] leading-[30px] whitespace-nowrap shrink-0">
            {title}
          </span>
          <div className="flex-1" />
          <GlobalIcons />
        </div>
      </header>
    )
  }

  return (
    <header className="bg-white w-full flex flex-col shrink-0">

      {/* Row 1: title + section tabs + global icons */}
      <div className="flex items-center gap-12 px-4 py-1 border-b border-[#EAECF0] shadow-[0px_1px_1px_rgba(16,24,40,0.05)]">
        <div className="flex flex-1 self-stretch items-center gap-3 min-w-0">
          <span className="text-[20px] font-semibold text-[#101828] leading-[30px] whitespace-nowrap shrink-0">
            {title}
          </span>
          <div className="flex self-stretch items-center gap-1">
            {sectionTabs.map(tab => (
              <div key={tab} className="relative flex items-center justify-center px-2 self-stretch shrink-0">
                <span className={`text-[16px] whitespace-nowrap translate-y-px ${
                  tab === activeSection
                    ? 'font-semibold text-[#155EEF]'
                    : 'font-medium text-[#667085]'
                }`}>
                  {tab}
                </span>
                {tab === activeSection && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#155EEF] rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
        <GlobalIcons />
      </div>

      {/* Row 2: subLabel + sub-tabs + optional actions */}
      <div className="flex items-center gap-12 px-4 border-b border-[#D0D5DD] min-h-[44px]">
        <div className="flex flex-1 self-stretch items-center gap-2 min-w-0">
          {subLabel && (
            <span className="text-[16px] font-semibold text-[#101828] leading-6 whitespace-nowrap shrink-0">
              {subLabel}
            </span>
          )}
          <div className="flex self-stretch items-center gap-1 overflow-x-auto no-scrollbar">
            {subTabs.map(tab => {
              const isActive = tab === activeSubTab
              return (
                <button
                  key={tab}
                  onClick={() => onSubTabChange?.(tab)}
                  className={`relative flex items-center justify-center self-stretch px-2 whitespace-nowrap transition-colors shrink-0 ${
                    isActive
                      ? 'font-semibold text-[#155EEF]'
                      : 'font-medium text-[#667085] hover:text-[#344054]'
                  }`}
                >
                  <span className="text-[15px] translate-y-px">{tab}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#155EEF] rounded-full" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
        {actions && (
          <div className="flex items-center gap-2 shrink-0 py-1.5">
            {actions}
          </div>
        )}
      </div>
    </header>
  )
}
