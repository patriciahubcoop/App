import svgPaths from "./svg-gfzhhhkx2k";

function Texto() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="texto">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#cce3dc] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Solicitar novo cartão
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a7b0b5] text-[14px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peça um cartão substituo ou um adicional para você ou seu dependente
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="aspect-[320/200] bg-[#161616] relative rounded-[12px] shrink-0 w-full" data-name="card">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[40px] py-[24px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="icon">
            <div className="aspect-[24/24.930233001708984] flex-[1_0_0] min-h-px min-w-px relative" data-name="iconsax-card-add">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center px-px py-[3px] relative size-full">
                  <div className="aspect-[21.5/18.5] relative shrink-0 w-full" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 25.814">
                      <g id="Vector">
                        <path d={svgPaths.p5704800} fill="var(--fill-0, #CCE3DC)" />
                        <path d={svgPaths.pe21ab00} fill="var(--fill-0, #CCE3DC)" />
                        <path d={svgPaths.p29088bf0} fill="var(--fill-0, #CCE3DC)" />
                        <path d={svgPaths.p24709280} fill="var(--fill-0, #CCE3DC)" />
                        <path d={svgPaths.p5d63900} fill="var(--fill-0, #CCE3DC)" />
                        <path d={svgPaths.p26c1dd00} fill="var(--fill-0, #CCE3DC)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Texto />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#005d42] border-dashed inset-[-0.5px] pointer-events-none rounded-[12.5px] shadow-[0px_4px_8px_0px_rgba(20,53,38,0.4)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="03">
      <div className="max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] relative shrink-0 w-full" data-name="card-mockup">
        <div className="flex flex-col items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] p-[8px] relative w-full">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}