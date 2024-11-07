export default function Button() {
    return (
        <div className="flex items-center bg-[#D1E4F8] hover:bg-[#D1E4F8] text-[#1E293B] font-17 rounded-lg w-[210px] h-[50px] cursor-pointer">
            <img src="../public/solar_album-broken.png" alt="albums" className="ml-4" />
            <span className="text-[17px] font-medium px-5">Local Albums</span>
        </div>
    )
}