import { useState } from "react";
import { motion, PanInfo } from "motion/react";
import imgImage1 from "figma:asset/77ad5470ef9e6b452a2a566907a03f8342ae2ee5.png";
import svgPaths from "../../imports/svg-1h93ytej23";
import { imgGroup1 } from "../../imports/svg-yadme";
import svgPathsSolicitar from "../../imports/svg-gfzhhhkx2k";

interface CardData {
  id: number;
  type: "principal" | "adicional" | "solicitar";
  name: string;
  number: string;
}

const cardsData: CardData[] = [
  {
    id: 0,
    type: "principal",
    name: "JANAINA V FAGUNDES",
    number: "•••• •••• •••• 3633",
  },
  {
    id: 1,
    type: "adicional",
    name: "ANTÔNIO SOARES FAGUNDES",
    number: "•••• •••• •••• 5266",
  },
  {
    id: 2,
    type: "solicitar",
    name: "Solicitar novo cartão",
    number:
      "Peça um cartão substituto ou um adicional para você ou seu dependente",
  },
];

// ============================================
// CARTÕES ATIVOS (PADRÃO PRIMÁRIO - COLORIDOS)
// ============================================

function CartaoAtivo({
  name,
  number,
}: {
  name: string;
  number: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[340px]"
      data-name="card-mockup"
    >
      <div
        className="w-full h-[202.5px] relative rounded-[12px] flex flex-col items-start p-[24px] gap-[16px] shrink-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(110.98deg, #005d42, #009a44)",
          boxShadow: "0px 4px 8px rgba(20, 53, 38, 0.4)",
          border: "1px solid #007452",
        }}
        data-name="card"
      >
        {/* Topo */}
        <div
          className="w-full flex items-center justify-center gap-[16px]"
          data-name="topo"
        >
          <div
            className="w-[76px] flex flex-col items-start"
            data-name="tagTipo"
          >
            <div
              className="w-full rounded-[99px] bg-[#aadb1e] flex items-center justify-center px-[8px] py-[4px]"
              data-name="badgeText"
            >
              <div
                className="text-[10px] font-semibold leading-[150%] tracking-[0.1em] uppercase text-[#040f14]"
                style={{
                  fontFamily: "var(--font-family-base)",
                }}
              >
                principal
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex items-center justify-center text-right"
            data-name="cartoLinha"
          >
            <div
              className="flex-1 text-[14px] leading-[140%] text-white"
              style={{ fontFamily: "var(--font-family-base)" }}
            >
              Signature
            </div>
          </div>
        </div>

        {/* Meio */}
        <div
          className="w-full flex-1 flex flex-col items-start justify-end gap-[0px] px-[0px] pt-[24px] pb-[0px]"
          data-name="meio"
        >
          <div
            className="w-full flex flex-col items-start justify-center"
            data-name="nome"
          >
            <div
              className="text-[16px] leading-[130%] text-[#FFFFFF]"
              style={{ fontFamily: "var(--font-family-base)" }}
            >
              {name}
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            data-name="cartoNmero"
          >
            <b
              className="text-[16px] font-bold leading-[150%] text-[#FFFFFF]"
              style={{ fontFamily: "var(--font-family-base)" }}
            >
              {number}
            </b>
          </div>
        </div>

        {/* Base */}
        <div
          className="w-full flex items-center justify-between gap-[8px]"
          data-name="base"
        >
          <div
            className="flex items-start gap-[16px]"
            data-name="validadeCvv"
          >
            <div
              className="flex flex-col items-start gap-[0px]"
              data-name="validade"
            >
              <div
                className="w-full flex items-start"
                data-name="paragraph"
              >
                <div
                  className="text-[12px] leading-[150%] text-[rgba(255,255,255,0.6)]"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  Validade
                </div>
              </div>
              <div
                className="w-full flex items-center justify-center"
                data-name="paragraph2"
              >
                <b
                  className="text-[16px] font-bold leading-[150%] text-white"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  ••/••
                </b>
              </div>
            </div>
            <div
              className="flex flex-col items-start gap-[0px]"
              data-name="validade"
            >
              <div
                className="w-full flex items-start"
                data-name="paragraph"
              >
                <div
                  className="text-[12px] leading-[150%] text-[rgba(255,255,255,0.6)]"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  CVV
                </div>
              </div>
              <div
                className="w-full flex items-center justify-center"
                data-name="paragraph2"
              >
                <b
                  className="text-[16px] font-bold leading-[150%] text-white"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  •••
                </b>
              </div>
            </div>
          </div>
          <div
            className="w-[50px] flex flex-col items-center justify-center self-stretch"
            data-name="bandeira"
          >
            <img
              className="w-full max-w-full max-h-full object-cover"
              alt=""
              src={imgImage1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CARTÃO SOLICITAR ATIVO (CTA ESPECIAL)
// ============================================

function CartaoSolicitarAtivo({
  name,
  number,
}: {
  name: string;
  number: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[340px]"
      data-name="card-mockup"
    >
      <div
        className="w-full h-[202.5px] bg-[#161616] relative rounded-[12px] shrink-0"
        data-name="card"
      >
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[28px] py-[24px] relative size-full">
            <div
              className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
              data-name="icon"
            >
              <div
                className="aspect-[24/24.930233001708984] flex-[1_0_0] min-h-px min-w-px relative"
                data-name="iconsax-card-add"
              >
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-px py-[3px] relative size-full">
                    <div
                      className="aspect-[21.5/18.5] relative shrink-0 w-full"
                      data-name="Vector"
                    >
                      <svg
                        className="absolute block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 30 25.814"
                      >
                        <g id="Vector">
                          <path
                            d={svgPathsSolicitar.p5704800}
                            fill="var(--fill-0, #CCE3DC)"
                          />
                          <path
                            d={svgPathsSolicitar.pe21ab00}
                            fill="var(--fill-0, #CCE3DC)"
                          />
                          <path
                            d={svgPathsSolicitar.p29088bf0}
                            fill="var(--fill-0, #CCE3DC)"
                          />
                          <path
                            d={svgPathsSolicitar.p24709280}
                            fill="var(--fill-0, #CCE3DC)"
                          />
                          <path
                            d={svgPathsSolicitar.p5d63900}
                            fill="var(--fill-0, #CCE3DC)"
                          />
                          <path
                            d={svgPathsSolicitar.p26c1dd00}
                            fill="var(--fill-0, #CCE3DC)"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
              data-name="texto"
            >
              <p
                className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.19] relative shrink-0 text-[#cce3dc] text-[16px] whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {name}
              </p>
              <p
                className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.43] min-w-full relative shrink-0 text-[#a7b0b5] text-[14px] text-center w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {number}
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#005d42] border-dashed inset-[-0.5px] pointer-events-none rounded-[12.5px] shadow-[0px_4px_8px_0px_rgba(20,53,38,0.4)]"
        />
      </div>
    </div>
  );
}

// ============================================
// CARTÃO SOLICITAR INATIVO (CTA DESATURADO)
// ============================================

function CartaoSolicitarInativo({
  name,
  number,
}: {
  name: string;
  number: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[340px] scale-90 origin-center"
      data-name="card-mockup"
    >
      <div
        className="w-full h-[202.5px] bg-[#404c52] relative rounded-[12px] shrink-0"
        data-name="card"
      >
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[28px] py-[24px] relative size-full">
            <div
              className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]"
              data-name="icon"
            >
              <div
                className="aspect-[24/24.930233001708984] flex-[1_0_0] min-h-px min-w-px relative"
                data-name="iconsax-card-add"
              >
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-px py-[3px] relative size-full">
                    <div
                      className="aspect-[21.5/18.5] relative shrink-0 w-full"
                      data-name="Vector"
                    >
                      <svg
                        className="absolute block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 30 25.814"
                      >
                        <g id="Vector">
                          <path
                            d={svgPathsSolicitar.p5704800}
                            fill="var(--fill-0, #a7b0b5)"
                          />
                          <path
                            d={svgPathsSolicitar.pe21ab00}
                            fill="var(--fill-0, #a7b0b5)"
                          />
                          <path
                            d={svgPathsSolicitar.p29088bf0}
                            fill="var(--fill-0, #a7b0b5)"
                          />
                          <path
                            d={svgPathsSolicitar.p24709280}
                            fill="var(--fill-0, #a7b0b5)"
                          />
                          <path
                            d={svgPathsSolicitar.p5d63900}
                            fill="var(--fill-0, #a7b0b5)"
                          />
                          <path
                            d={svgPathsSolicitar.p26c1dd00}
                            fill="var(--fill-0, #a7b0b5)"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
              data-name="texto"
            >
              <p
                className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.19] relative shrink-0 text-[#a7b0b5] text-[16px] whitespace-nowrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {name}
              </p>
              <p
                className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.43] min-w-full relative shrink-0 text-[#69757b] text-[14px] text-center w-[min-content]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {number}
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#404c52] border-dashed inset-[-0.5px] pointer-events-none rounded-[12.5px] shadow-[0px_4px_8px_0px_rgba(20,53,38,0.4)]"
        />
      </div>
    </div>
  );
}

// ============================================
// CARTÕES INATIVOS (PADRÃO SECUNDÁRIO - CINZA)
// ============================================

function CartaoInativo({
  name,
  number,
}: {
  name: string;
  number: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col items-start max-h-[267.9310302734375px] max-w-[420px] min-h-[204.13792419433594px] min-w-[320px] p-[8px] relative shrink-0 w-[340px] scale-90 origin-center"
      data-name="card-mockup"
    >
      <div
        className="w-full h-[202.5px] relative rounded-[12px] flex flex-col items-start p-[24px] gap-[16px] shrink-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(111.22deg, #040f14, #1d3633)",
          boxShadow: "0px 4px 8px rgba(20, 53, 38, 0.4)",
          border: "1px solid #161616",
        }}
        data-name="card"
      >
        {/* Topo */}
        <div
          className="w-full flex items-center justify-center gap-[16px]"
          data-name="topo"
        >
          <div
            className="w-[76px] flex flex-col items-start"
            data-name="tagTipo"
          >
            <div
              className="w-full rounded-[99px] bg-[#a7b0b5] flex items-center justify-center px-[8px] py-[4px]"
              data-name="badgeText"
            >
              <div
                className="text-[10px] font-semibold leading-[150%] tracking-[0.1em] uppercase text-[#040f14]"
                style={{
                  fontFamily: "var(--font-family-base)",
                }}
              >
                adicional
              </div>
            </div>
          </div>
          <div
            className="flex-1 flex items-center justify-center text-right"
            data-name="cartoLinha"
          >
            <div
              className="flex-1 text-[14px] leading-[140%] text-[#69757b]"
              style={{ fontFamily: "var(--font-family-base)" }}
            >
              Signature
            </div>
          </div>
        </div>

        {/* Meio */}
        <div
          className="w-full flex-1 flex flex-col items-start justify-end gap-[0px] px-[0px] pt-[24px] pb-[0px]"
          data-name="meio"
        >
          <div
            className="w-full flex flex-col items-start justify-center"
            data-name="nome"
          >
            <div
              className="text-[16px] leading-[130%] text-[#69757b]"
              style={{ fontFamily: "var(--font-family-base)" }}
            >
              {name}
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            data-name="cartoNmero"
          >
            <b
              className="text-[16px] font-bold leading-[150%] text-[#69757b]"
              style={{ fontFamily: "var(--font-family-base)" }}
            >
              {number}
            </b>
          </div>
        </div>

        {/* Base */}
        <div
          className="w-full flex items-center justify-between gap-[20px]"
          data-name="base"
        >
          <div
            className="flex items-start gap-[24px]"
            data-name="validadeCvv"
          >
            <div
              className="flex flex-col items-start gap-[0px]"
              data-name="validade"
            >
              <div
                className="w-full flex items-start"
                data-name="paragraph"
              >
                <div
                  className="text-[12px] leading-[150%] text-[#69757b]"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  Validade
                </div>
              </div>
              <div
                className="w-full flex items-center justify-center"
                data-name="paragraph2"
              >
                <b
                  className="text-[16px] font-bold leading-[150%] text-[#69757b]"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  ••/••
                </b>
              </div>
            </div>
            <div
              className="flex flex-col items-start gap-[0px]"
              data-name="validade"
            >
              <div
                className="w-full flex items-start"
                data-name="paragraph"
              >
                <div
                  className="text-[12px] leading-[150%] text-[#69757b]"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  CVV
                </div>
              </div>
              <div
                className="w-full flex items-center justify-center"
                data-name="paragraph2"
              >
                <b
                  className="text-[16px] font-bold leading-[150%] text-[#69757b]"
                  style={{
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  •••
                </b>
              </div>
            </div>
          </div>
          <div
            className="w-[50px] flex flex-col items-center justify-center self-stretch"
            data-name="bandeira"
          >
            <img
              className="w-full max-w-full max-h-full object-cover"
              alt=""
              src={imgImage1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Debug: Log do estado atual
  console.log("🔍 CardCarousel Debug:", {
    activeIndex,
    totalCards: cardsData.length,
    activeCard: cardsData[activeIndex],
    isDragging,
  });

  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;

    console.log("🎯 Drag End:", {
      offset: info.offset.x,
      threshold,
    });

    if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      console.log("⬅️ Movendo para esquerda:", activeIndex - 1);
    } else if (
      info.offset.x < -threshold &&
      activeIndex < cardsData.length - 1
    ) {
      setActiveIndex(activeIndex + 1);
      console.log("➡️ Movendo para direita:", activeIndex + 1);
    }
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;

    if (diff === 0) {
      // Cartão ativo (centro) - maior e à frente
      return {
        left: "50%",
        marginLeft: "-170px",
        width: "340px",
        marginTop: "-109px",
        zIndex: 2,
        opacity: 1,
        scale: 1,
        rotateY: 0,
      };
    } else if (diff === -1) {
      // Cartão à esquerda - efeito 3D com rotação sutil
      return {
        left: "8px",
        marginLeft: "0",
        width: "320px",
        marginTop: "-102px",
        zIndex: 1,
        opacity: 0.85,
        scale: 0.95,
        rotateY: 8,
      };
    } else if (diff === 1) {
      // Cartão à direita - efeito 3D com rotação sutil
      return {
        right: "8px",
        left: "auto",
        marginLeft: "0",
        width: "320px",
        marginTop: "-102px",
        zIndex: 0,
        opacity: 0.85,
        scale: 0.95,
        rotateY: -8,
      };
    } else {
      // Cartões completamente ocultos
      return {
        left: diff < 0 ? "-340px" : "auto",
        right: diff > 0 ? "-340px" : "auto",
        marginLeft: "0",
        width: "320px",
        marginTop: "-102px",
        zIndex: -1,
        opacity: 0,
        scale: 0.75,
        rotateY: diff < 0 ? 25 : -25,
      };
    }
  };

  const renderCard = (card: CardData, isActive: boolean) => {
    console.log(`🎴 Renderizando cartão:`, {
      type: card.type,
      isActive,
      name: card.name,
    });

    if (isActive) {
      // Cartão "Solicitar" ativo - usa visual CTA especial
      if (card.type === "solicitar") {
        console.log("✨ Renderizando CartaoSolicitarAtivo");
        return (
          <CartaoSolicitarAtivo
            name={card.name}
            number={card.number}
          />
        );
      }
      // Outros cartões ativos - usa padrão primário (colorido)
      console.log("💚 Renderizando CartaoAtivo");
      return (
        <CartaoAtivo name={card.name} number={card.number} />
      );
    } else {
      // Cartão "Solicitar" inativo - usa visual CTA desaturado
      if (card.type === "solicitar") {
        console.log("🌑 Renderizando CartaoSolicitarInativo");
        return (
          <CartaoSolicitarInativo
            name={card.name}
            number={card.number}
          />
        );
      }
      // Outros cartões inativos - usa padrão secundário (cinza)
      console.log("⚫ Renderizando CartaoInativo");
      return (
        <CartaoInativo name={card.name} number={card.number} />
      );
    }
  };

  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center justify-center max-w-full px-[0px] py-[16px] relative shrink-0 w-full"
      data-name="card-data-v5"
    >
      <div
        className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full"
        data-name="card-navigation"
      >
        {/* Card Position */}
        <div
          className="relative shrink-0 w-full h-[244px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
          data-name="card-position"
        >
          {cardsData.map((card, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={card.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                animate={{
                  left: style.left,
                  right: style.right,
                  top: "50%",
                  marginTop: style.marginTop,
                  marginLeft: style.marginLeft,
                  width: style.width,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  scale: style.scale,
                  rotateY: style.rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute flex flex-col items-center justify-center"
                style={{
                  cursor: isDragging ? "grabbing" : "grab",
                  pointerEvents:
                    index === activeIndex ? "auto" : "none",
                  transformStyle: "preserve-3d",
                }}
              >
                {renderCard(card, isActive)}
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Indicators */}
        <div
          className="content-stretch flex flex-col items-center justify-center py-[4px] relative shrink-0"
          data-name="navegation"
        >
          <div
            className="flex flex-row gap-[8px] items-center justify-center relative shrink-0"
            data-name="navegation"
          >
            {cardsData.map((_, index) => {
              const isActive = index === activeIndex;

              return isActive ? (
                <motion.div
                  key={index}
                  className="bg-[#2cc84d] h-[6px] rounded-[9999px] shrink-0 flex items-center"
                  initial={{ width: 6 }}
                  animate={{ width: 24 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  data-name={`0${index + 1}`}
                />
              ) : (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center justify-center cursor-pointer relative shrink-0 size-[6px]"
                  whileTap={{ scale: 1.2 }}
                  data-name={`0${index + 1}`}
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
                      r="3"
                    />
                  </svg>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
        data-name="card-info"
      >
        <div
          className="relative rounded-[16px] shrink-0 w-full overflow-hidden self-stretch"
          data-name="valores-destaque"
        >
          <div className="w-full h-full p-[6px] overflow-hidden rounded-[16px] flex-col justify-start items-start inline-flex" style={{ border: '2px solid red' }}>
            <div className="self-stretch px-[6px] py-[4px] justify-center items-start gap-[8px] inline-flex" style={{ border: '1px dashed blue' }}>
              <div className="w-[16px] h-[16px] justify-center items-center gap-[8px] flex" style={{ border: '1px solid green' }}>
                <div className="flex-1 h-[16px] overflow-hidden justify-center items-center gap-[8px] flex" style={{ border: '1px dashed orange' }}>
                  <div className="w-[16px] h-[16px] bg-white" />
                  <div className="w-[5.66px] h-[5.66px] bg-[#040F14]" />
                  <div className="w-[12.73px] h-[11.56px] bg-[#040F14]" />
                  <div className="w-[11.07px] h-[10.30px] bg-[#040F14]" />
                  <div className="w-[3.22px] h-[3.21px] bg-[#040F14]" />
                  <div className="w-[6.67px] h-[6.67px] bg-[#040F14]" />
                  <div className="w-[6.67px] h-[6.67px] bg-[#040F14]" />
                </div>
              </div>
            </div>
            <div className="self-stretch p-[4px] flex-col justify-center items-center gap-[8px] inline-flex" style={{ border: '1px dashed purple' }}>
              <div className="self-stretch py-[4px] justify-center items-center gap-[4px] inline-flex" style={{ border: '1px solid cyan' }}>
                <p
                  className="flex-1 text-center text-[#040F14] text-[10px] font-semibold uppercase leading-[1.5] tracking-[1px]"
                  style={{ fontFamily: 'Open Sans', fontVariationSettings: "'wdth' 100", border: '1px dashed lime' }}
                >
                  Fatura Atual
                </p>
              </div>
              <div 
                className="gap-x-[4px] gap-y-[4px] grid grid-cols-[___minmax(0,1fr)_fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] py-[4px] relative shrink-0 text-[#007452] w-full"
                style={{ border: '2px solid magenta' }}
              >
                <p
                  className="col-1 justify-self-stretch leading-[1.5] relative row-1 self-start shrink-0 text-[16px] text-right font-light"
                  style={{ fontFamily: 'Open Sans', fontVariationSettings: "'wdth' 100", border: '1px solid yellow', background: 'rgba(255,255,0,0.1)' }}
                >
                  R$
                </p>
                <div
                  className="col-2 flex flex-col font-extrabold justify-center justify-self-start leading-[0] relative row-1 self-start shrink-0 text-[32px] whitespace-nowrap"
                  style={{ fontFamily: 'Open Sans', fontVariationSettings: "'wdth' 100", border: '1px solid pink', background: 'rgba(255,192,203,0.1)' }}
                >
                  <p className="leading-[1.3]">16.250,00</p>
                </div>
              </div>
            </div>
          </div>
          {/* DEBUG INFO */}
          <div className="absolute top-0 right-0 bg-black text-white text-[8px] p-1 z-50" style={{ fontFamily: 'monospace' }}>
            <div>Grid: 3 cols [fr | fit | fr]</div>
            <div>Col 1: R$ (justify-self-stretch, text-right)</div>
            <div>Col 2: 16.250,00 (justify-self-start)</div>
            <div>Col 3: empty (minmax)</div>
          </div>
        </div>
        <div
          className="relative rounded-[16px] shrink-0 w-full overflow-hidden p-[8px] self-stretch"
          data-name="valores-secundários"
        >
          <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
            <div className="relative shrink-0 self-stretch">
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1">
                <p className="text-body-2 text-left text-[#404c52]">
                  Limite Disponível:
                </p>
                <p className="text-body-2 font-bold text-left text-[#404c52]">
                  R$ 13.750,00
                </p>
              </div>
              <div className="flex flex-col items-start justify-center self-stretch">
                <div className="bg-[#005d42] w-px flex-1" />
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1">
                <p className="text-body-2 text-left text-[#889499]">
                  Próxima Fatura:
                </p>
                <p className="text-body-2 font-bold text-left text-[#889499]">
                  R$ 226.234,00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-center p-[8px] relative w-full self-stretch">
              <div className="flex flex-row gap-[8px] items-center relative shrink-0 self-stretch">
                <p className="text-body-2 text-left text-[#404c52]">
                  Vencimento:
                </p>
                <p className="text-body-2 font-bold text-left text-[#404c52]">
                  16 de fevereiro
                </p>
              </div>
              <div className="flex flex-row gap-[8px] items-center relative shrink-0 self-stretch">
                <p className="text-body-2 text-left text-[#889499]">
                  Melhor dia para compra:
                </p>
                <p className="text-body-2 font-bold text-left text-[#889499]">
                  11 de fevereiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}