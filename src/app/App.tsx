import HomeCartoes from "../imports/HomeCartoes";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a]">
      <div className="w-full h-screen max-w-[444px] max-h-[956px] min-w-[320px] min-h-[568px] shadow-2xl overflow-hidden">
        <HomeCartoes />
      </div>
    </div>
  );
}