import svgPaths from "./svg-gnrp10mmw2";
import { imgValoresDestaque } from "./svg-m5ijq";

export default function ValoresDestaque() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[___32px_minmax(0,1fr)_32px] grid-rows-[repeat(1,fit-content(100%))] overflow-clip p-[6px] relative rounded-[16px] size-full" data-name="valores-destaque">
      <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="icon">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[6px] py-[4px] relative w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="icon">
              <div className="aspect-[40/40] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="iconsax-eye-slash">
                <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative" data-name="Clip path group">
                  <div className="col-1 h-[32.003px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.001px_0px] mask-size-[32px_32px] ml-0 mt-0 relative row-1 w-full" data-name="Group" style={{ maskImage: `url('${imgValoresDestaque}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.999 16.0017">
                      <g id="Group">
                        <path d={svgPaths.p1db17c00} fill="var(--fill-0, #040F14)" id="Vector" />
                        <path d={svgPaths.p3ade0300} fill="var(--fill-0, #040F14)" id="Vector_2" />
                        <path d={svgPaths.p259bed00} fill="var(--fill-0, #040F14)" id="Vector_3" />
                        <path d={svgPaths.p9b48be2} fill="var(--fill-0, #040F14)" id="Vector_4" />
                        <path d={svgPaths.pbed8a00} fill="var(--fill-0, #040F14)" id="Vector_5" />
                        <path d={svgPaths.pa58f400} fill="var(--fill-0, #040F14)" id="Vector_6" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="center">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[4px] relative w-full">
            <div className="content-stretch flex items-center justify-center py-[4px] relative shrink-0 w-full" data-name="texto-topo">
              <p className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#040f14] text-[10px] text-center tracking-[1px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                Fatura Atual
              </p>
            </div>
            <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[___minmax(0,1fr)_fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] py-[4px] relative shrink-0 text-[#007452] w-full" data-name="conteúdo-valor">
              <p className="col-1 font-['Open_Sans:Light',sans-serif] font-light justify-self-stretch leading-[1.5] relative row-1 self-start shrink-0 text-[16px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                R$
              </p>
              <div className="col-2 flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center justify-self-start leading-[0] relative row-1 self-start shrink-0 text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.3]">16.250,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}