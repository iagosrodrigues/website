export function Header() {
    return (
        <div className="w-full h-full py-24 bg-purple-800 flex flex-col items-center justify-start gap-16">
            <div className="self-stretch h-60 px-8 flex flex-col items-center justify-start gap-8">
                <div className="self-stretch h-60 flex flex-col items-center justify-start gap-12">
                    <div className="self-stretch h-60 flex flex-col items-center justify-start gap-6">
                        <div className="self-stretch h-24 flex flex-col items-start justify-start gap-3">
                            <div className="self-stretch text-center text-purple-200 text-base font-semibold leading-6">About me</div>
                            <div className="self-stretch text-center text-white text-5xl font-semibold leading-[60px]">Iago Sousa</div>
                        </div>
                        <div className="self-stretch text-center text-purple-200 text-xl font-normal leading-[30px]">SRE | DevSecOps | System Programming | JavaScript | Python | Rust | Go | Zig</div>
                    </div>
                </div>
            </div>
        </div>
    );
}