import imgImage1 from "figma:asset/77ad5470ef9e6b452a2a566907a03f8342ae2ee5.png";

function TagTipo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[76px]" data-name="tag-tipo">
      <div className="bg-[#aadb1e] relative rounded-[8px] shrink-0 w-full" data-name="badge-text">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
            <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[10px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              principal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartaoLinha() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="cartão-linha">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[14px] text-right text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Signature
      </p>
    </div>
  );
}

function Topo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="topo">
      <TagTipo />
      <CartaoLinha />
    </div>
  );
}

function Nome() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="nome">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        JANAINA V FAGUNDES
      </p>
    </div>
  );
}

function CartaoNumero() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="cartão-número">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        •••• •••• •••• 3633
      </p>
    </div>
  );
}

function Meio() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-end min-h-px min-w-px relative w-full" data-name="meio">
      <Nome />
      <CartaoNumero />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Validade
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ••/••
      </p>
    </div>
  );
}

function Validade() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="validade">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CVV
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        •••
      </p>
    </div>
  );
}

function Cvv() {
  return (
    <div className="relative shrink-0 w-[22px]" data-name="cvv">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function ValidadeCvv() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="validade-cvv">
      <Validade />
      <Cvv />
    </div>
  );
}

function Bandeira() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[50px]" data-name="bandeira">
      <div className="aspect-[1921/621] relative shrink-0 w-full" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="base">
      <ValidadeCvv />
      <div className="flex flex-row items-center self-stretch">
        <Bandeira />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="aspect-[320/200] relative rounded-[12px] shrink-0 w-full" data-name="card" style={{ backgroundImage: "linear-gradient(121.536deg, rgb(0, 93, 66) 0%, rgb(0, 154, 68) 112.67%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Topo />
          <Meio />
          <Base />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#007452] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(20,53,38,0.4)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="01">
      <div className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[340px]" data-name="card-mockup">
        <Card />
      </div>
    </div>
  );
}