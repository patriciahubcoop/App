import svgPaths from "./svg-1h93ytej23";
import imgImage1 from "figma:asset/77ad5470ef9e6b452a2a566907a03f8342ae2ee5.png";
import {
  imgGroup,
  imgFrame544,
  imgGroup1,
  imgGroup2,
  imgGroup3,
  imgGroup4,
  imgGroup5,
} from "./svg-yadme";
import CardCarousel from "../app/components/CardCarousel";

function TagTipo() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[76px]"
      data-name="tag-tipo"
    >
      <div
        className="bg-[#a7b0b5] relative rounded-[8px] shrink-0 w-full"
        data-name="badge-text"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
            <p
              className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[10px] tracking-[1px] uppercase whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Adicional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartaoLinha() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
      data-name="cartão-linha"
    >
      <p
        className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[#a7b0b5] text-[14px] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Signature
      </p>
    </div>
  );
}

function Topo() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full"
      data-name="topo"
    >
      <TagTipo />
      <CartaoLinha />
    </div>
  );
}

function Nome() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
      data-name="nome"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#a7b0b5] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        ANTÔNIO SOARES FAGUNDES
      </p>
    </div>
  );
}

function CartaoNumero() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="cartão-número"
    >
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#a7b0b5] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        •••• •••• •••• 5266
      </p>
    </div>
  );
}

function Meio() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-end min-h-px min-w-px relative w-full"
      data-name="meio"
    >
      <Nome />
      <CartaoNumero />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5px] relative shrink-0 text-[#a7b0b5] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Validade
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#a7b0b5] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        ••/••
      </p>
    </div>
  );
}

function Validade() {
  return (
    <div
      className="relative shrink-0 w-[48px]"
      data-name="validade"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5px] relative shrink-0 text-[#a7b0b5] text-[12px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        CVV
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#a7b0b5] text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
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
    <div
      className="content-stretch flex gap-[24px] items-start relative shrink-0"
      data-name="validade-cvv"
    >
      <Validade />
      <Cvv />
    </div>
  );
}

function Bandeira() {
  return (
    <div
      className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[50px]"
      data-name="bandeira"
    >
      <div
        className="aspect-[1921/621] relative shrink-0 w-full"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function Base() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="base"
    >
      <ValidadeCvv />
      <div className="flex flex-row items-center self-stretch">
        <Bandeira />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div
      className="aspect-[320/200] relative rounded-[12px] shrink-0 w-full"
      data-name="card"
      style={{
        backgroundImage:
          "linear-gradient(121.585deg, rgb(64, 76, 82) 0%, rgb(105, 117, 123) 105.77%)",
      }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Topo />
          <Meio />
          <Base />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#404c52] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(20,53,38,0.4)]"
      />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex flex-col items-end justify-center overflow-clip right-0 top-[calc(50%-0.25px)]"
      data-name="02"
    >
      <div
        className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[320px]"
        data-name="card-mockup"
      >
        <Card />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center left-0 overflow-clip top-[calc(50%-0.25px)]"
      data-name="03"
    >
      <div
        className="content-stretch flex flex-col h-[206px] items-start justify-center max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] shrink-0 w-[320px]"
        data-name="card-mockup"
      />
    </div>
  );
}

function TagTipo1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[76px]"
      data-name="tag-tipo"
    >
      <div
        className="bg-[#aadb1e] relative rounded-[8px] shrink-0 w-full"
        data-name="badge-text"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
            <p
              className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[10px] tracking-[1px] uppercase whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              principal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartaoLinha1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
      data-name="cartão-linha"
    >
      <p
        className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[14px] text-right text-white"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Signature
      </p>
    </div>
  );
}

function Topo1() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full"
      data-name="topo"
    >
      <TagTipo1 />
      <CartaoLinha1 />
    </div>
  );
}

function Nome1() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full"
      data-name="nome"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[16px] text-white whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        JANAINA V FAGUNDES
      </p>
    </div>
  );
}

function CartaoNumero1() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0"
      data-name="cartão-número"
    >
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        •••• •••• •••• 3633
      </p>
    </div>
  );
}

function Meio1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-end min-h-px min-w-px relative w-full"
      data-name="meio"
    >
      <Nome1 />
      <CartaoNumero1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Validade
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        ••/••
      </p>
    </div>
  );
}

function Validade1() {
  return (
    <div
      className="relative shrink-0 w-[48px]"
      data-name="validade"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        CVV
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div
      className="content-stretch flex items-center justify-center relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        •••
      </p>
    </div>
  );
}

function Cvv1() {
  return (
    <div className="relative shrink-0 w-[22px]" data-name="cvv">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function ValidadeCvv1() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-start relative shrink-0"
      data-name="validade-cvv"
    >
      <Validade1 />
      <Cvv1 />
    </div>
  );
}

function Bandeira1() {
  return (
    <div
      className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[50px]"
      data-name="bandeira"
    >
      <div
        className="aspect-[1921/621] relative shrink-0 w-full"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage1}
        />
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="base"
    >
      <ValidadeCvv1 />
      <div className="flex flex-row items-center self-stretch">
        <Bandeira1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div
      className="aspect-[320/200] relative rounded-[12px] shrink-0 w-full"
      data-name="card"
      style={{
        backgroundImage:
          "linear-gradient(121.536deg, rgb(0, 93, 66) 0%, rgb(0, 154, 68) 112.67%)",
      }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Topo1 />
          <Meio1 />
          <Base1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#007452] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_8px_0px_rgba(20,53,38,0.4)]"
      />
    </div>
  );
}

function Component() {
  return (
    <div
      className="content-stretch flex flex-col h-[218.5px] items-center justify-center relative shrink-0 w-[340px]"
      data-name="01"
    >
      <div
        className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[340px]"
        data-name="card-mockup"
      >
        <Card1 />
      </div>
    </div>
  );
}

function Navegation() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center py-[4px] relative shrink-0 w-full"
      data-name="navegation"
    >
      <div
        className="content-stretch flex gap-[8px] items-center relative shrink-0"
        data-name="navegation"
      >
        <div
          className="bg-[#2cc84d] h-[6px] rounded-[9999px] shrink-0 w-[24px]"
          data-name="01"
        />
        <button
          className="block cursor-pointer relative shrink-0 size-[6px]"
          data-name="02"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <circle
              cx="3"
              cy="3"
              fill="var(--fill-0, #007452)"
              id="02"
              r="3"
            />
          </svg>
        </button>
        <div
          className="relative shrink-0 size-[6px]"
          data-name="03"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 6 6"
          >
            <circle
              cx="3"
              cy="3"
              fill="var(--fill-0, #007452)"
              id="03"
              r="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="col-1 h-[32.003px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.001px_0px] mask-size-[32px_32px] ml-0 mt-0 relative row-1 w-full"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.999 16.0017"
      >
        <g id="Group">
          <path
            d={svgPaths.p32201780}
            fill="var(--fill-0, #040F14)"
            id="Vector"
          />
          <path
            d={svgPaths.p2199a00}
            fill="var(--fill-0, #040F14)"
            id="Vector_2"
          />
          <path
            d={svgPaths.pd739e00}
            fill="var(--fill-0, #040F14)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p1509f200}
            fill="var(--fill-0, #040F14)"
            id="Vector_4"
          />
          <path
            d={svgPaths.pbed8a00}
            fill="var(--fill-0, #040F14)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p4255600}
            fill="var(--fill-0, #040F14)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <button
      className="col-3 cursor-pointer justify-self-stretch relative row-1 self-start shrink-0"
      data-name="icon"
    >
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[6px] py-[4px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative"
              data-name="iconsax-eye-slash"
            >
              <ClipPathGroup />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function TextoTopo() {
  return (
    <div
      className="content-stretch flex items-center justify-center py-[4px] relative shrink-0 w-full"
      data-name="texto-topo"
    >
      <p
        className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] min-h-px min-w-px relative text-[#040f14] text-[10px] text-center tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Fatura Atual
      </p>
    </div>
  );
}

function ConteudoValor() {
  return (
    <div
      className="gap-x-[4px] gap-y-[4px] grid grid-cols-[___minmax(0,1fr)_fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] py-[4px] relative shrink-0 text-[#007452] w-full"
      data-name="conteúdo-valor"
    >
      <p
        className="col-1 font-['Open_Sans:Light',sans-serif] font-light justify-self-stretch leading-[1.5] relative row-1 self-start shrink-0 text-[16px] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        R$
      </p>
      <div
        className="col-2 flex flex-col font-['Open_Sans:ExtraBold',sans-serif] font-extrabold justify-center justify-self-start leading-[0] relative row-1 self-start shrink-0 text-[32px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[1.3]">16.250,00</p>
      </div>
    </div>
  );
}

function Center() {
  return (
    <div
      className="col-2 justify-self-stretch relative row-1 self-start shrink-0"
      data-name="center"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[4px] relative w-full">
          <TextoTopo />
          <ConteudoValor />
        </div>
      </div>
    </div>
  );
}

function LimiteDisponivel() {
  return (
    <div
      className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-center justify-self-stretch relative row-1 self-start shrink-0 text-[#404c52] text-[14px] whitespace-nowrap"
      data-name="limite-disponivel"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Limite Disponível:
      </p>
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        R$ 13.750,00
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="col-2 content-stretch flex flex-col items-start justify-center justify-self-start relative row-1 self-stretch shrink-0"
      data-name="divider"
    >
      <div className="bg-[#005d42] flex-[1_0_0] min-h-px min-w-px w-px" />
    </div>
  );
}

function SaldoTotal() {
  return (
    <div
      className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-center justify-self-stretch relative row-1 self-start shrink-0 text-[#889499] text-[14px] whitespace-nowrap"
      data-name="saldo-total"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Próxima Fatura:
      </p>
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        R$ 226.234,00
      </p>
    </div>
  );
}

function ConteudoValores() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="conteudo valores"
    >
      <div className="gap-x-[8px] gap-y-[16px] grid grid-cols-[___minmax(0,1fr)_fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] p-[8px] relative w-full">
        <LimiteDisponivel />
        <Divider />
        <SaldoTotal />
      </div>
    </div>
  );
}

function Vencimento() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[#404c52] w-full"
      data-name="vencimento"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Vencimento:
      </p>
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        16 de fevereiro
      </p>
    </div>
  );
}

function MelhorData() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[#889499] w-full"
      data-name="melhor data"
    >
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Melhor dia para compra:
      </p>
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        11 de fevereiro
      </p>
    </div>
  );
}

function ConteudoDatas() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="conteudo datas"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative text-[14px] w-full whitespace-nowrap">
          <Vencimento />
          <MelhorData />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#d5f4db] content-stretch flex items-center justify-center left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px] px-[12px] py-[10px] size-[40px] top-1/2"
      style={{ maskImage: `url('${imgFrame544}')` }}
    >
      <div
        className="aspect-[48/48] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative"
        data-name="icon"
      >
        <div
          className="aspect-[40/40] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative"
          data-name="iconsax-arrow-transfer-01"
        >
          <div
            className="aspect-[32/32] flex-[1_0_0] min-h-px min-w-px relative"
            data-name="Vector"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g id="Vector">
                <path
                  d={svgPaths.p35472900}
                  fill="var(--fill-0, #007452)"
                />
                <path
                  d={svgPaths.p129e480}
                  fill="var(--fill-0, #007452)"
                />
                <path
                  d={svgPaths.p3f104f00}
                  fill="var(--fill-0, #007452)"
                />
                <path
                  d={svgPaths.p1022b000}
                  fill="var(--fill-0, #007452)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="aspect-[27.535024642944336/32.00016403198242] h-full relative shrink-0"
      data-name="Group"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17.2094 20"
      >
        <g id="Group">
          <path
            d={svgPaths.p319d6980}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p185bce00}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p18b5df70}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#d5f4db] content-stretch flex items-center justify-center left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px] p-[10px] size-[40px] top-1/2"
      style={{ maskImage: `url('${imgFrame544}')` }}
    >
      <div
        className="aspect-[48/48] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative"
        data-name="icon"
      >
        <div
          className="aspect-[40/40] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative"
          data-name="iconsax-receipt-1"
        >
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#d5f4db] content-stretch flex items-center justify-center left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px] p-[10px] size-[40px] top-1/2"
      style={{ maskImage: `url('${imgFrame544}')` }}
    >
      <div
        className="aspect-[48/48] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative"
        data-name="icon"
      >
        <div
          className="aspect-[40/37] flex-[1_0_0] min-h-px min-w-px relative"
          data-name="iconsax-card-tick"
        >
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center p-px relative size-full">
              <div
                className="aspect-[21.50996971130371/19.990230560302734] relative shrink-0 w-full"
                data-name="Vector"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 18 16.7283"
                >
                  <g id="Vector">
                    <path
                      d={svgPaths.p1beb6980}
                      fill="var(--fill-0, #007452)"
                    />
                    <path
                      d={svgPaths.p133146c0}
                      fill="var(--fill-0, #007452)"
                    />
                    <path
                      d={svgPaths.p22bca00}
                      fill="var(--fill-0, #007452)"
                    />
                    <path
                      d={svgPaths.p4b36c80}
                      fill="var(--fill-0, #007452)"
                    />
                    <path
                      d={svgPaths.p2dab8800}
                      fill="var(--fill-0, #007452)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Atalhos() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="atalhos"
    >
      <div className="cursor-pointer gap-x-[4px] gap-y-[12px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] px-[12px] py-[8px] relative w-full">
        <div
          className="bg-white col-1 gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__minmax(0,0.75fr)_minmax(0,1fr)] p-[8px] relative rounded-[12px] row-1 shrink-0 size-[120px]"
          data-name="card-buton-menu-v2"
        >
          <div
            className="col-1 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center justify-self-stretch leading-[0] relative row-2 self-stretch shrink-0 text-[#040f14] text-[14px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.4] whitespace-pre-wrap">
              {`Consultar `}
              <br aria-hidden="true" />
              limites
            </p>
          </div>
          <div
            className="col-1 content-stretch flex gap-[19px] items-center relative row-1 shrink-0 size-[40px]"
            data-name="dimond-icon"
          >
            <Frame43 />
          </div>
        </div>
        <div
          className="bg-white col-2 gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__minmax(0,0.75fr)_minmax(0,1fr)] p-[8px] relative rounded-[12px] row-1 shrink-0 size-[120px]"
          data-name="card-buton-menu-v2"
        >
          <div
            className="col-1 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center justify-self-stretch leading-[0] relative row-2 self-stretch shrink-0 text-[#040f14] text-[14px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.4]">Ver fatura</p>
          </div>
          <div
            className="col-1 content-stretch flex gap-[19px] items-center relative row-1 shrink-0 size-[40px]"
            data-name="dimond-icon"
          >
            <Frame44 />
          </div>
        </div>
        <div
          className="bg-white col-3 gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__minmax(0,0.75fr)_minmax(0,1fr)] p-[8px] relative rounded-[12px] row-1 shrink-0 size-[120px]"
          data-name="card-buton-menu-v2"
        >
          <div
            className="col-1 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center justify-self-stretch leading-[0] relative row-2 self-stretch shrink-0 text-[#040f14] text-[14px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.4] whitespace-pre-wrap">
              {`Cartão `}
              <br aria-hidden="true" />
              Virtual
            </p>
          </div>
          <div
            className="col-1 content-stretch flex gap-[19px] items-center relative row-1 shrink-0 size-[40px]"
            data-name="dimond-icon"
          >
            <Frame45 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">
          <p
            className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.3] min-h-px min-w-px relative text-[#007452] text-[24px] whitespace-pre-wrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {`Últimas `}
            <br aria-hidden="true" />
            transações
          </p>
        </div>
      </div>
    </div>
  );
}

function TodayContent() {
  return (
    <div
      className="content-stretch flex items-center py-[12px] relative shrink-0 w-full"
      data-name="today-content"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#dee2df] border-b border-solid inset-0 pointer-events-none"
      />
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#404c52] text-[14px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Hoje
      </p>
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-full" data-name="data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[40px] relative w-full">
          <TodayContent />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute inset-[11.46%_5.22%_11.46%_5.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.25px_-2.75px] mask-size-[24px_24px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21.4975 18.5"
      >
        <g id="Group">
          <path
            d={svgPaths.p25566480}
            fill="var(--fill-0, #950303)"
            id="Vector"
          />
          <path
            d={svgPaths.p206ab970}
            fill="var(--fill-0, #950303)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p18b0fcc0}
            fill="var(--fill-0, #950303)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3a24a700}
            fill="var(--fill-0, #950303)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1acd5b80}
            fill="var(--fill-0, #950303)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1cdaaf70}
            fill="var(--fill-0, #950303)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function IconsaxCardSend() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="iconsax-card-send"
    >
      <ClipPathGroup1 />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="content-stretch flex h-[71px] items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxCardSend />
    </div>
  );
}

function AtividadeHorario() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#69757b] text-[12px] whitespace-nowrap"
      data-name="atividade-horario"
    >
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Compra no Crédito
      </p>
      <p className="font-['Raleway:Medium',sans-serif] font-medium relative shrink-0">
        •
      </p>
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        09h34
      </p>
    </div>
  );
}

function TopLine() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="top-line"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.5] px-[4px] py-[8px] relative w-full">
          <AtividadeHorario />
          <p
            className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1b201d] text-[16px] w-[196px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Netflix Premium
          </p>
        </div>
      </div>
    </div>
  );
}

function Valores() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="valores"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center px-[16px] py-[8px] relative text-[#69757b] text-[16px] w-full">
          <div
            className="flex flex-col h-full justify-center leading-[0] relative shrink-0 w-[7px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.3]">-</p>
          </div>
          <p
            className="leading-[1.3] relative shrink-0 whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            R$ 55,90
          </p>
        </div>
      </div>
    </div>
  );
}

function TransationInfo() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative"
      data-name="transation-info"
    >
      <TopLine />
      <Valores />
    </div>
  );
}

function IconsaxArrowRight4() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="iconsax-arrow-right-02"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="iconsax-arrow-right-02">
          <path
            d={svgPaths.p1502e300}
            fill="var(--fill-0, #161616)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconLeft1() {
  return (
    <div
      className="content-stretch flex h-[71px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxArrowRight4 />
    </div>
  );
}

function MovimentacaoEntrada() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="movimentacao-entrada"
    >
      <div className="content-stretch flex gap-[8px] items-start overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <IconLeft />
        <TransationInfo />
        <IconLeft1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[rgba(222,226,223,0.5)] border-b border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-[11.46%_5.22%_11.46%_5.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.25px_-2.75px] mask-size-[24px_24px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21.4975 18.5"
      >
        <g id="Group">
          <path
            d={svgPaths.p25566480}
            fill="var(--fill-0, #950303)"
            id="Vector"
          />
          <path
            d={svgPaths.p206ab970}
            fill="var(--fill-0, #950303)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p18b0fcc0}
            fill="var(--fill-0, #950303)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3a24a700}
            fill="var(--fill-0, #950303)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1acd5b80}
            fill="var(--fill-0, #950303)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1cdaaf70}
            fill="var(--fill-0, #950303)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

function IconsaxCardSend1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="iconsax-card-send"
    >
      <ClipPathGroup2 />
    </div>
  );
}

function IconLeft2() {
  return (
    <div
      className="content-stretch flex h-[71px] items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxCardSend1 />
    </div>
  );
}

function AtividadeHorario1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[#69757b] text-[12px] whitespace-nowrap"
      data-name="atividade-horario"
    >
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Compra no Crédito
      </p>
      <p className="font-['Raleway:Medium',sans-serif] font-medium relative shrink-0">
        •
      </p>
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        08h12
      </p>
    </div>
  );
}

function TopLine1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="top-line"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.5] px-[4px] py-[8px] relative w-full">
          <AtividadeHorario1 />
          <p
            className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1b201d] text-[16px] w-[196px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Netflix Premium
          </p>
        </div>
      </div>
    </div>
  );
}

function Valores1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="valores"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center px-[16px] py-[8px] relative text-[#69757b] text-[16px] w-full">
          <div
            className="flex flex-col h-full justify-center leading-[0] relative shrink-0 w-[7px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.3]">-</p>
          </div>
          <p
            className="leading-[1.3] relative shrink-0 whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            R$ 21,90
          </p>
        </div>
      </div>
    </div>
  );
}

function TransationInfo1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative"
      data-name="transation-info"
    >
      <TopLine1 />
      <Valores1 />
    </div>
  );
}

function IconsaxArrowRight() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="iconsax-arrow-right-02"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="iconsax-arrow-right-02">
          <path
            d={svgPaths.p1502e300}
            fill="var(--fill-0, #161616)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconLeft3() {
  return (
    <div
      className="content-stretch flex h-[71px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxArrowRight />
    </div>
  );
}

function MovimentacaoEntrada1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="movimentacao-entrada"
    >
      <div className="content-stretch flex gap-[8px] items-start overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <IconLeft2 />
        <TransationInfo1 />
        <IconLeft3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[rgba(222,226,223,0.5)] border-b border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Primary() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="primary"
    >
      <Data />
      <MovimentacaoEntrada />
      <MovimentacaoEntrada1 />
    </div>
  );
}

function PastContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[12px] relative"
      data-name="past-content"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#dee2df] border-b border-solid inset-0 pointer-events-none"
      />
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#69757b] text-[14px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Ontem
      </p>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-full" data-name="data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[40px] relative w-full">
          <PastContent />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute inset-[11.46%_5.22%_11.46%_5.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.25px_-2.75px] mask-size-[24px_24px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21.4975 18.5"
      >
        <g id="Group">
          <path
            d={svgPaths.p25566480}
            fill="var(--fill-0, #950303)"
            id="Vector"
          />
          <path
            d={svgPaths.p206ab970}
            fill="var(--fill-0, #950303)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p18b0fcc0}
            fill="var(--fill-0, #950303)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3a24a700}
            fill="var(--fill-0, #950303)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1acd5b80}
            fill="var(--fill-0, #950303)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1cdaaf70}
            fill="var(--fill-0, #950303)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function IconsaxCardSend2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="iconsax-card-send"
    >
      <ClipPathGroup3 />
    </div>
  );
}

function IconLeft4() {
  return (
    <div
      className="content-stretch flex h-[71px] items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxCardSend2 />
    </div>
  );
}

function AtividadeHorario2() {
  return (
    <div
      className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[8px] items-start relative shrink-0 text-[#69757b] text-[12px] whitespace-nowrap"
      data-name="atividade-horario"
    >
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Compra no Crédito
      </p>
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        •
      </p>
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        18h49
      </p>
    </div>
  );
}

function TopLine2() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="top-line"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.5] px-[4px] py-[8px] relative w-full">
          <AtividadeHorario2 />
          <p
            className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1b201d] text-[16px] w-[196px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Magazine Luiza
          </p>
        </div>
      </div>
    </div>
  );
}

function Valores2() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="valores"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center px-[16px] py-[8px] relative text-[#69757b] text-[16px] w-full">
          <div
            className="flex flex-col h-full justify-center leading-[0] relative shrink-0 w-[7px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.3]">-</p>
          </div>
          <p
            className="leading-[1.3] relative shrink-0 whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            R$ 249,90
          </p>
        </div>
      </div>
    </div>
  );
}

function TransationInfo2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative"
      data-name="transation-info"
    >
      <TopLine2 />
      <Valores2 />
    </div>
  );
}

function IconsaxArrowRight1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="iconsax-arrow-right-02"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="iconsax-arrow-right-02">
          <path
            d={svgPaths.p1502e300}
            fill="var(--fill-0, #161616)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconLeft5() {
  return (
    <div
      className="content-stretch flex h-[71px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxArrowRight1 />
    </div>
  );
}

function MovimentacaoEntrada2() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="movimentacao-entrada"
    >
      <div className="content-stretch flex gap-[8px] items-start overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <IconLeft4 />
        <TransationInfo2 />
        <IconLeft5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[rgba(222,226,223,0.5)] border-b border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="col-1 h-[32px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px] ml-0 mt-0 relative row-1 w-full"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20.0003 20.0003"
      >
        <g id="Group">
          <path
            d={svgPaths.pd532a00}
            fill="var(--fill-0, #009A44)"
            id="Vector"
          />
          <path
            d={svgPaths.p2c8afd00}
            fill="var(--fill-0, #009A44)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1691f500}
            fill="var(--fill-0, #009A44)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p261503f0}
            fill="var(--fill-0, #009A44)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3fcfd280}
            fill="var(--fill-0, #009A44)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] h-full inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group5 />
    </div>
  );
}

function IconLeft6() {
  return (
    <div
      className="content-stretch flex h-[71px] items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <div
        className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]"
        data-name="icon"
      >
        <div
          className="aspect-[40/40] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative"
          data-name="iconsax-money-recive"
        >
          <ClipPathGroup4 />
        </div>
      </div>
    </div>
  );
}

function AtividadeHorario3() {
  return (
    <div
      className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[8px] items-start relative shrink-0 text-[#69757b] text-[12px] whitespace-nowrap"
      data-name="atividade-horario"
    >
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Estorno de compra
      </p>
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        •
      </p>
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        13h22
      </p>
    </div>
  );
}

function TopLine3() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="top-line"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.5] px-[4px] py-[8px] relative w-full">
          <AtividadeHorario3 />
          <p
            className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1b201d] text-[16px] w-[196px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Renner
          </p>
        </div>
      </div>
    </div>
  );
}

function Valores3() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="valores"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-center px-[16px] py-[8px] relative text-[#69757b] text-[16px] w-full">
          <div
            className="flex flex-col h-full justify-center leading-[0] relative shrink-0 w-[7px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.3]">-</p>
          </div>
          <p
            className="leading-[1.3] relative shrink-0 whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            R$ 189,00
          </p>
        </div>
      </div>
    </div>
  );
}

function TransationInfo3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative"
      data-name="transation-info"
    >
      <TopLine3 />
      <Valores3 />
    </div>
  );
}

function IconsaxArrowRight2() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="iconsax-arrow-right-02"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="iconsax-arrow-right-02">
          <path
            d={svgPaths.p1502e300}
            fill="var(--fill-0, #161616)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconLeft7() {
  return (
    <div
      className="content-stretch flex h-[71px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxArrowRight2 />
    </div>
  );
}

function MovimentacaoEntrada3() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="movimentacao-entrada"
    >
      <div className="content-stretch flex gap-[8px] items-start overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <IconLeft6 />
        <TransationInfo3 />
        <IconLeft7 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[rgba(222,226,223,0.5)] border-b border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Secondary() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="secondary"
    >
      <Data1 />
      <MovimentacaoEntrada2 />
      <MovimentacaoEntrada3 />
    </div>
  );
}

function PastContent1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[12px] relative"
      data-name="past-content"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#dee2df] border-b border-solid inset-0 pointer-events-none"
      />
      <p
        className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#69757b] text-[14px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        13 de Janeiro
      </p>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-full" data-name="data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[40px] relative w-full">
          <PastContent1 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute inset-[11.46%_5.22%_11.46%_5.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.25px_-2.75px] mask-size-[24px_24px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21.4975 18.5"
      >
        <g id="Group">
          <path
            d={svgPaths.p25566480}
            fill="var(--fill-0, #950303)"
            id="Vector"
          />
          <path
            d={svgPaths.p206ab970}
            fill="var(--fill-0, #950303)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p18b0fcc0}
            fill="var(--fill-0, #950303)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3a24a700}
            fill="var(--fill-0, #950303)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1acd5b80}
            fill="var(--fill-0, #950303)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1cdaaf70}
            fill="var(--fill-0, #950303)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="Clip path group"
    >
      <Group6 />
    </div>
  );
}

function IconsaxCardSend3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="iconsax-card-send"
    >
      <ClipPathGroup5 />
    </div>
  );
}

function IconLeft8() {
  return (
    <div
      className="content-stretch flex h-[71px] items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxCardSend3 />
    </div>
  );
}

function AtividadeHorario4() {
  return (
    <div
      className="content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[8px] items-start relative shrink-0 text-[#69757b] text-[12px]"
      data-name="atividade-horario"
    >
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Compra Crédito Parcelado
      </p>
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        •
      </p>
      <p
        className="relative shrink-0"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        13h22
      </p>
    </div>
  );
}

function TopLine4() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="top-line"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.5] px-[4px] py-[8px] relative w-full whitespace-nowrap">
          <AtividadeHorario4 />
          <p
            className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1b201d] text-[16px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            RO Tech Store
          </p>
        </div>
      </div>
    </div>
  );
}

function Valores4() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="valores"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative text-[#69757b] w-full">
          <div
            className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-full justify-center leading-[0] relative shrink-0 text-[16px] w-[7px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.3]">-</p>
          </div>
          <p
            className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[16px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            R$ 1.730,45
          </p>
          <p
            className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[12px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            em 5x
          </p>
        </div>
      </div>
    </div>
  );
}

function TransationInfo4() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative"
      data-name="transation-info"
    >
      <TopLine4 />
      <Valores4 />
    </div>
  );
}

function IconsaxArrowRight3() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="iconsax-arrow-right-02"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="iconsax-arrow-right-02">
          <path
            d={svgPaths.p1502e300}
            fill="var(--fill-0, #161616)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconLeft9() {
  return (
    <div
      className="content-stretch flex h-[71px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 w-[32px]"
      data-name="icon-left"
    >
      <IconsaxArrowRight3 />
    </div>
  );
}

function MovimentacaoEntrada4() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="movimentacao-entrada"
    >
      <div className="content-stretch flex gap-[8px] items-start overflow-clip py-[8px] relative rounded-[inherit] w-full">
        <IconLeft8 />
        <TransationInfo4 />
        <IconLeft9 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[rgba(222,226,223,0.5)] border-b border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Secondary1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="secondary"
    >
      <Data2 />
      <MovimentacaoEntrada4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <Primary />
          <Secondary />
          <Secondary1 />
          <div
            className="bg-white content-stretch flex items-center justify-center px-[8px] py-[13px] relative rounded-[7px] shrink-0 w-[333px]"
            data-name="button"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#cdcdcd] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_3px_2px_0px_rgba(80,80,80,0.02)]"
            />
            <p
              className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#007452] text-[15px] text-center whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Ver extrato completo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lancamentos() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative shrink-0 w-[393px]"
      data-name="lançamentos"
    >
      <Frame41 />
      <Frame1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p
            className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.3] min-h-px min-w-px relative text-[#007452] text-[20px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Opções do seu cartão
          </p>
        </div>
      </div>
    </div>
  );
}

function Iconpix() {
  return (
    <div
      className="aspect-[55.999996185302734/56.003143310546875] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative"
      data-name="iconpix"
    >
      <div
        className="aspect-[39.999996185302734/40.003143310546875] flex-[1_0_0] min-h-px min-w-px relative"
        data-name="Vector"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24.0019"
        >
          <g id="Vector">
            <path
              d={svgPaths.p38053700}
              fill="var(--fill-0, #007452)"
            />
            <path
              d={svgPaths.p3b661900}
              fill="var(--fill-0, #007452)"
            />
            <path
              d={svgPaths.p27ac8100}
              fill="var(--fill-0, #007452)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Pix com Cartão
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame6 />
    </div>
  );
}

function LineButon() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[24.5/24.50137710571289] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="pix-icon"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <Iconpix />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame2 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Consultar limites
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame7 />
    </div>
  );
}

function LineButon1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-transfer-01"
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[32/32] flex-[1_0_0] min-h-px min-w-px relative"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.pb707f80}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.pfe46500}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p2fda6c00}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p288ce400}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame3 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div
      className="aspect-[27.535024642944336/32.00016403198242] h-full relative shrink-0"
      data-name="Group"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17.2094 20"
      >
        <g id="Group">
          <path
            d={svgPaths.p319d6980}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p185bce00}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p18b5df70}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Ver fatura
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame8 />
    </div>
  );
}

function LineButon2() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-receipt-1"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <Group7 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame4 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Cartão Virtual
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame9 />
    </div>
  );
}

function LineButon3() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center px-[4px] relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/37] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-card-tick"
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-px relative size-full">
                  <div
                    className="aspect-[21.50996971130371/19.990230560302734] relative shrink-0 w-full"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 18 16.7283"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.p1beb6980}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p133146c0}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p22bca00}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p4b36c80}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p2dab8800}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame5 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Meus Cartões
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function LineButon4() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-cards"
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[32/29.022960662841797] relative shrink-0 w-full"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 21.7672"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.p19bfe680}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p310cc800}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p1bf1e900}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p1ae3d280}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p17b8a780}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame10 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Meus Pontos
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame13 />
    </div>
  );
}

function LineButon5() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-transfer-01"
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[32/32] flex-[1_0_0] min-h-px min-w-px relative"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.pb707f80}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.pfe46500}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p2fda6c00}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p288ce400}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame12 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div
      className="col-1 h-[29.023px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1.488px] mask-size-[32px_32px] ml-0 mt-[1.49px] relative row-1 w-full"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup3}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23.9999 21.7672"
      >
        <g id="Group">
          <path
            d={svgPaths.p3eb0ec00}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.pf782200}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p12bd9d00}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pfe8be00}
            fill="var(--fill-0, #007452)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1734500}
            fill="var(--fill-0, #007452)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1c4faa00}
            fill="var(--fill-0, #007452)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Meus Limites
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame15 />
    </div>
  );
}

function LineButon6() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-setting-4"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <ClipPathGroup6 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame14 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div
      className="col-1 h-[31.996px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.004px] mask-size-[32px_32px] ml-0 mt-0 relative row-1 w-full"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup4}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24.0003 23.9969"
      >
        <g id="Group">
          <path
            d={svgPaths.p230ffd80}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p173400}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2414fa00}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Carteiras Digitais
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame17 />
    </div>
  );
}

function LineButon7() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-wallet"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <ClipPathGroup7 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame16 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Serviços
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame19 />
    </div>
  );
}

function LineButon8() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-archive"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[32.000328063964844/32.000328063964844] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.pb8a6500}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p31f9e200}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p32977000}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p11226000}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p1b4f6230}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.pf267400}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame18 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div
      className="col-1 h-[31.746px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.72px_0px] mask-size-[32px_32px] ml-[14.75%] mt-0 relative row-1 w-[69.09%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5807 23.8094"
      >
        <g id="Group">
          <path
            d={svgPaths.p36e9e400}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p28b27d00}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p39a14f80}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p656ff00}
            fill="var(--fill-0, #007452)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group10 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Indicar
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame21 />
    </div>
  );
}

function LineButon9() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-profile-add"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <ClipPathGroup8 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame20 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div
      className="col-1 h-[32px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px] ml-0 mt-0 relative row-1 w-full"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24.0003 24.0003"
      >
        <g id="Group">
          <path
            d={svgPaths.p3d5e380}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p187aac0}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p19f06d80}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p14e6fa00}
            fill="var(--fill-0, #007452)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p140587c0}
            fill="var(--fill-0, #007452)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] h-full inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group11 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Antecipações
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame23 />
    </div>
  );
}

function LineButon10() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-money-recive"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <ClipPathGroup9 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame22 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Assinaturas
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame25 />
    </div>
  );
}

function LineButon11() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center px-[4px] relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[24/23.989770889282227] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-convert-card"
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-px relative size-full">
                  <div
                    className="aspect-[21.51020050048828/21.500200271606445] relative shrink-0 w-full"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 22 21.9898"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.p21415f00}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p1c4bab00}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p3da36380}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p1201ef80}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p28cfcc80}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p2c403680}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame24 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div
      className="col-1 h-[26.753px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.013px_-2.61px] mask-size-[32px_32px] ml-[-0.04%] mt-[2.61px] relative row-1 w-[100.04%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup4}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24.0095 20.0648"
      >
        <g id="Group">
          <path
            d={svgPaths.p38cb0700}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p1c4dbc70}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p34f4c000}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p342fe980}
            fill="var(--fill-0, #007452)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p21287400}
            fill="var(--fill-0, #007452)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div
      className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px min-w-px place-items-start relative"
      data-name="Clip path group"
    >
      <Group12 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Cotação do Dolar
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame27 />
    </div>
  );
}

function LineButon12() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-moneys"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <ClipPathGroup10 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame26 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div
      className="col-1 h-[32px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.977px_0px] mask-size-[32px_32px] ml-[2.98px] mt-0 relative row-1 w-[26.046px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup5}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19.5347 23.9998"
      >
        <g id="Group">
          <path
            d={svgPaths.p10b3a470}
            fill="var(--fill-0, #007452)"
            id="Vector"
          />
          <path
            d={svgPaths.p13a27a00}
            fill="var(--fill-0, #007452)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p37c9cf00}
            fill="var(--fill-0, #007452)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Clip path group"
    >
      <Group13 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Recarga de celular
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame29 />
    </div>
  );
}

function LineButon13() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-mobile"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <ClipPathGroup11 />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame28 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Aviso de Viagem
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame31 />
    </div>
  );
}

function LineButon14() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center px-[4px] relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[23.50996971130371/23.104990005493164] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-airplane"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center px-[2px] py-px relative size-full">
                  <div
                    className="aspect-[19.50996971130371/21.104990005493164] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 19.9552 21.5866"
                    >
                      <path
                        d={svgPaths.p16649600}
                        fill="var(--fill-0, #007452)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame30 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#040f14] text-[14px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Gerar CVV Temporário
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative">
      <Frame33 />
    </div>
  );
}

function LineButon15() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="line-buton"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#c6ced1] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[8px] py-[16px] relative w-full">
          <div
            className="content-stretch flex items-center justify-center px-[4px] relative shrink-0 size-[32px]"
            data-name="icon"
          >
            <div
              className="aspect-[24/23.42746925354004] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-security-card"
            >
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-px relative size-full">
                  <div
                    className="aspect-[21.49003028869629/21.42746925354004] relative shrink-0 w-full"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 22 21.936"
                    >
                      <g id="Vector">
                        <path
                          d={svgPaths.p128f4600}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p3f159000}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.pc59e930}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.pa859ec0}
                          fill="var(--fill-0, #007452)"
                        />
                        <path
                          d={svgPaths.p38ce50f0}
                          fill="var(--fill-0, #007452)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame32 />
          </div>
          <div
            className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]"
            data-name="icon"
          >
            <div
              className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative"
              data-name="iconsax-arrow-right-02"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                  <div
                    className="aspect-[14.329164505004883/28.895784378051758] h-full relative shrink-0"
                    data-name="Vector"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 7.93426 16"
                    >
                      <path
                        d={svgPaths.p27e3600}
                        fill="var(--fill-0, #889499)"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
        <LineButon />
        <LineButon1 />
        <LineButon2 />
        <LineButon3 />
        <LineButon4 />
        <LineButon5 />
        <LineButon6 />
        <LineButon7 />
        <LineButon8 />
        <LineButon9 />
        <LineButon10 />
        <LineButon11 />
        <LineButon12 />
        <LineButon13 />
        <LineButon14 />
        <LineButon15 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[2px] items-center pb-[10px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e7eef1] border-b border-solid inset-0 pointer-events-none"
      />
      <p
        className="flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#040f14] text-[13px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Gerente da conta
      </p>
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#69757b] text-[13px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Aline Ribeiro
      </p>
    </div>
  );
}

function VuesaxOutlineCall() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/outline/call"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="call">
          <path
            d={svgPaths.p2a01cdc0}
            fill="var(--fill-0, #009A44)"
            id="Vector"
            stroke="var(--stroke-0, #009A44)"
          />
          <path
            d="M19.5 0.5V19.5H0.5V0.5H19.5Z"
            fill="var(--fill-0, #009A44)"
            id="Vector_2"
            opacity="0"
            stroke="var(--stroke-0, #009A44)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-h-px min-w-px relative text-[13px]">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#040f14] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Contato
      </p>
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#69757b] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        (00) 1234-5678
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <Frame36 />
    </div>
  );
}

function VuesaxOutlineArrowRight() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/outline/arrow-right"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right">
          <path
            d={svgPaths.p1807b980}
            fill="var(--fill-0, #A7B0B5)"
            id="Vector"
            stroke="var(--stroke-0, #A7B0B5)"
          />
          <path
            d="M19.5 0.5V19.5H0.5V0.5H19.5Z"
            fill="var(--fill-0, #A7B0B5)"
            id="Vector_2"
            opacity="0"
            stroke="var(--stroke-0, #A7B0B5)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[20px] items-center pb-[10px] relative shrink-0 w-full">
      <div
        className="relative shrink-0 size-[20px]"
        data-name="vuesax/outline/call"
      >
        <VuesaxOutlineCall />
      </div>
      <Frame35 />
      <div
        className="relative shrink-0 size-[20px]"
        data-name="vuesax/outline/arrow-right"
      >
        <VuesaxOutlineArrowRight />
      </div>
    </div>
  );
}

function VuesaxOutlineSms() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/outline/sms"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="sms">
          <path
            d={svgPaths.p20294d80}
            fill="var(--fill-0, #009A44)"
            id="Vector"
            stroke="var(--stroke-0, #009A44)"
          />
          <path
            d={svgPaths.p3f58b100}
            fill="var(--fill-0, #009A44)"
            id="Vector_2"
            stroke="var(--stroke-0, #009A44)"
          />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-h-px min-w-px relative text-[13px]">
      <p
        className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#040f14] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        E-mail
      </p>
      <p
        className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#69757b] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        mail@mail.com
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <Frame38 />
    </div>
  );
}

function VuesaxOutlineArrowRight1() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/outline/arrow-right"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right">
          <path
            d={svgPaths.p1807b980}
            fill="var(--fill-0, #A7B0B5)"
            id="Vector"
            stroke="var(--stroke-0, #A7B0B5)"
          />
          <path
            d="M19.5 0.5V19.5H0.5V0.5H19.5Z"
            fill="var(--fill-0, #A7B0B5)"
            id="Vector_2"
            opacity="0"
            stroke="var(--stroke-0, #A7B0B5)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div
        className="relative shrink-0 size-[20px]"
        data-name="vuesax/outline/sms"
      >
        <VuesaxOutlineSms />
      </div>
      <Frame37 />
      <div
        className="relative shrink-0 size-[20px]"
        data-name="vuesax/outline/arrow-right"
      >
        <VuesaxOutlineArrowRight1 />
      </div>
    </div>
  );
}

function Contato() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="contato"
    >
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <div
          className="bg-white relative rounded-[16px] shrink-0 w-full"
          data-name="Card"
        >
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[32px] pt-[16px] px-[24px] relative w-full">
              <Frame34 />
              <Frame39 />
              <Frame40 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowSquareLeft() {
  return (
    <div
      className="col-1 ml-0 mt-0 relative row-1 size-[24px]"
      data-name="arrow-square-left"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="arrow-square-left">
          <path
            d="M15 19L8 12L15 5"
            id="Vector"
            stroke="var(--stroke-0, #252525)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowLeft() {
  return (
    <button
      className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="vuesax/linear/arrow-left"
    >
      <ArrowSquareLeft />
    </button>
  );
}

function VuesaxLinearHome() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/home-2"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="home-2">
          <path
            d={svgPaths.p550ea80}
            id="Vector"
            stroke="var(--stroke-0, #019A44)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 17.99V14.99"
            id="Vector_2"
            stroke="var(--stroke-0, #019A44)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[0px] py-[17px] relative shrink-0 w-[393px]">
      <div
        aria-hidden="true"
        className="absolute border-[#eaeaea] border-b border-solid inset-0 pointer-events-none"
      />
      <VuesaxLinearArrowLeft />
      <p
        className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#007452] text-[13px] text-center"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Cartões
      </p>
      <div
        className="relative shrink-0 size-[24px]"
        data-name="vuesax/linear/home-2"
      >
        <VuesaxLinearHome />
      </div>
    </div>
  );
}

function HeaderNavBar() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-[116px] items-center justify-end pointer-events-auto sticky top-0 w-full z-50 px-[0px] pt-[24px] pb-[0px]"
      data-name="Header -  Nav Bar"
    >
      <Frame />
    </div>
  );
}

export default function HomeCartoes() {
  return (
    <div
      className="bg-[#f6f6f6] content-stretch flex flex-col items-center relative h-full overflow-auto scrollbar-hide p-[0px]"
      data-name="Home Cartões"
    >
      <HeaderNavBar />
      <div className="w-full">
        <CardCarousel />
      </div>
      <Atalhos />
      <Lancamentos />
      <Frame42 />
      <Frame46 />
      <Contato />
    </div>
  );
}