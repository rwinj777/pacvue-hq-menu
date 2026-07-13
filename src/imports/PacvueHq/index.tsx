import svgPaths from "./svg-0nj2hs2cbz";
type PacvueHqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function PacvueHq({ className, property1 = "Default" }: PacvueHqProps) {
  return (
    <div className={className || `content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.06)] flex gap-[6px] items-center pl-[5px] pr-[8px] py-[2px] relative rounded-[13px] ${property1 === "Variant2" ? "bg-[#fffaf5]" : "bg-[#f9fafb]"}`}>
      <div aria-hidden className="absolute border border-[#ff9f43] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="relative shrink-0 size-[20px]" data-name="Performance chart">
        <div className="absolute left-px size-[18px] top-px">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Group 544">
              <g id="Rectangle 1081" />
              <path d={svgPaths.p390db780} fill="var(--fill-0, #7367F0)" id="Union" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Pacvue HQ">
        <div className="content-stretch flex items-center relative shrink-0">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <p className="[word-break:break-word] col-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] ml-0 mt-0 not-italic relative row-1 text-[#82858b] text-[13px] whitespace-nowrap">Pacvue HQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}