export function Footer() {
    return (
        <div className="w-full h-full py-12 bg-[#53389E] flex flex-col items-center justify-start gap-16">
            <div className="self-stretch h-8 px-8 flex flex-col items-start justify-start gap-8">
                <div className="self-stretch flex justify-between items-center">
                    <div className="h-6 flex items-center gap-6">
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-[19.5px] absolute left-0 top-[2.25px] bg-[#E9D7FE]"></div>
                        </div>
                        <div className="w-6 h-6 flex justify-center items-center">
                            <div className="w-6 h-6 bg-[#E9D7FE]"></div>
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-[23.85px] absolute left-0 top-0 bg-[#E9D7FE]"></div>
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-[23.45px] absolute left-0 top-0 bg-[#E9D7FE]"></div>
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="w-[16.68px] h-6 absolute left-[3.66px] top-0 bg-[#E9D7FE]"></div>
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 absolute left-0 top-0 bg-[#E9D7FE]"></div>
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="w-[15.02px] h-[17.04px] absolute left-[0.36px] top-0 opacity-20 bg-[#E9D7FE]"></div>
                            <div className="w-[15.02px] h-[17.04px] absolute left-[4.49px] top-[3.48px] opacity-50 bg-[#E9D7FE]"></div>
                            <div className="w-[15.02px] h-[17.04px] absolute left-[8.62px] top-[6.96px] opacity-80 bg-[#E9D7FE]"></div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-[142px] h-8 flex justify-center items-start gap-2.5">
                            <div className="shadow-sm flex items-start">
                                <div className="w-8 h-8 relative bg-gradient-to-b from-white to-[#D0D5DD] rounded-lg overflow-hidden border border-[#D0D5DD]">
                                    <div className="w-8 h-8 absolute left-0 top-0">
                                        <div className="w-[28.08px] h-[28.08px] absolute left-[1.96px] top-[1.96px] bg-[#D0D5DD]"></div>
                                        <div className="w-2 h-2 absolute left-3 top-3 bg-[#D0D5DD]"></div>
                                        <div className="w-[5.51px] h-[5.51px] absolute left-[13.24px] top-[13.24px] bg-[#D0D5DD]"></div>
                                        {/* Grid lines omitted for brevity */}
                                    </div>
                                    <div className="w-4 h-4 absolute left-2 top-2 bg-gradient-to-br from-[#53389E] to-[#6941C6] shadow-sm rounded-full"></div>
                                    <div className="w-8 h-4 absolute left-0 top-4 bg-white bg-opacity-20 rounded-t-lg backdrop-blur-sm"></div>
                                </div>
                            </div>
                            <div className="w-[100px] h-8 relative flex flex-col items-start justify-start">
                                <div className="w-[99.43px] h-[15.47px] bg-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 text-right text-[#D6BBFB] text-base font-normal leading-6">
                        © 2024 Iago Sousa. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}