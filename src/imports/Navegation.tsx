export default function Navegation() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="navegation">
      <div className="relative shrink-0 size-[6px]" data-name="01">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #007452)" id="01" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]" data-name="02">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #007452)" id="01" r="3" />
        </svg>
      </div>
      <div className="bg-[#2cc84d] h-[6px] rounded-[9999px] shrink-0 w-[24px]" data-name="03" />
    </div>
  );
}