import svgPaths from "./svg-90z7o3kudh";
import imgImage262 from "./98c6b4368718c38b34a141301b024a2277cf0845.png";

function Group() {
  return (
    <div className="absolute left-px size-[18px] top-px">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 544">
          <g id="Rectangle 1081" />
          <path d={svgPaths.p390db780} fill="var(--fill-0, #7367F0)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function PerformanceChart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Performance chart">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[word-break:break-word] col-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] ml-0 mt-0 not-italic relative row-1 text-[#82858b] text-[13px] whitespace-nowrap">Pacvue HQ</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group1 />
    </div>
  );
}

function PacvueHq() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0" data-name="Pacvue HQ">
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1002px] left-0 top-0 w-[1439px]" data-name="image 262">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage262} />
      </div>
      <div className="absolute bg-[#f9fafb] content-stretch drop-shadow-[0px_4px_12px_rgba(0,0,0,0.06)] flex gap-[6px] items-center left-[206px] pl-[5px] pr-[8px] py-[2px] rounded-[13px] top-[17px]" data-name="pacvue hq">
        <div aria-hidden className="absolute border border-[#ff9f43] border-solid inset-0 pointer-events-none rounded-[13px]" />
        <PerformanceChart />
        <PacvueHq />
      </div>
    </div>
  );
}