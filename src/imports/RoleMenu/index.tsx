function Component() {
  return (
    <div className="relative shrink-0 w-full" data-name="下拉菜单-下拉浮窗项">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#12143c] text-[14px] whitespace-nowrap">Executive and business leader</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 w-full" data-name="下拉菜单-下拉浮窗项">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#12143c] text-[14px] whitespace-nowrap">eCommerce and marketplace manager</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="下拉菜单-下拉浮窗项">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#12143c] text-[14px] whitespace-nowrap">Agency and account manager</p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 w-full" data-name="下拉菜单-下拉浮窗项">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#12143c] text-[14px] whitespace-nowrap">Analyst and insights team member</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 w-full" data-name="下拉菜单-下拉浮窗项">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#12143c] text-[14px] whitespace-nowrap">Operations and supply chain team member</p>
        </div>
      </div>
    </div>
  );
}

export default function RoleMenu() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.06)] flex flex-col items-start py-[6px] relative rounded-[6px] size-full" data-name="role menu">
      <Component />
      <div className="relative shrink-0 w-full" data-name="下拉菜单-下拉浮窗项">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#12143c] text-[14px] whitespace-nowrap">Retail media and ads manager</p>
          </div>
        </div>
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}