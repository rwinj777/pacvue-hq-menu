import svgPaths from "./svg-6wqyyszw7d";
import imgImage2 from "./105ccb794ad24afd3e555c81934db6fbb597f48e.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-start left-[29px] top-[35px] w-[337px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="⭐️ Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group 483">
            <g id="Rectangle 1011" />
            <path d={svgPaths.pbfcc2f0} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[313px]">The Pacvue Executive Dashboard gives leadership a cross-retailer view of advertising performance, sales, ROAS, user adoption, and automation impact to assess business health and platform effectiveness.</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[22.52%_36.32%_57.51%_35.67%] overflow-clip" data-name="悬浮提示">
      <div className="absolute h-[120.104px] left-[13px] top-[26px] w-[365px]" data-name="Combined Shape">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 120.104">
          <path d={svgPaths.p37241d80} fill="var(--fill-0, #323232)" id="Combined Shape" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

export default function Tooltip() {
  return (
    <div className="relative size-full" data-name="tooltip">
      <div className="absolute h-[906px] left-0 top-0 w-[1396px]" data-name="image 2">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
        </div>
      </div>
      <div className="absolute h-[48px] left-[218px] top-[239px] w-[265px]" data-name="image 3">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[1887.5%] left-[-82.64%] max-w-none top-[-497.92%] w-[526.79%]" src={imgImage2} />
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[213px] top-[239px] w-[6px]" data-name="image 4">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[1887.5%] left-[-6185.71%] max-w-none top-[-497.92%] w-[19942.85%]" src={imgImage2} />
          </div>
        </div>
      </div>
      <Component />
      <div className="absolute bg-[#ff57bc] h-[19px] left-[213px] opacity-50 top-[251px] w-[6px]" />
      <div className="absolute bg-white h-[179px] left-[32px] opacity-60 top-[354px] w-[117px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[85px] leading-[normal] left-[44px] not-italic text-[#ff337e] text-[16px] top-[355px] w-[112px]">BUG: 6px horizontally padding needed between hover background and left side of text</p>
      <div className="absolute flex h-[103px] items-center justify-center left-[124px] top-[262px] w-[86px]">
        <div className="flex-none rotate-[-50.14deg]">
          <div className="h-0 relative w-[134.183px]">
            <div className="absolute inset-[-7.36px_-0.75%_-7.36px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.183 14.7279">
                <path d={svgPaths.p2329d400} fill="var(--stroke-0, #FF337E)" id="Arrow 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}