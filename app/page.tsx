import { Header } from './components/header';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-full py-24 bg-white flex flex-col items-center justify-start gap-16">
        <div className="self-stretch h-[428px] px-8 flex flex-col items-center justify-start gap-16">
          <div className="self-stretch flex justify-start items-start gap-16">
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="self-stretch h-[418px] flex flex-col justify-start items-start">
                <div className="self-stretch text-[#475467] text-lg font-normal leading-7 font-inter break-words">
                  <div className="font-bold mb-8">A little about me</div>
                  <div className="mb-8">
                    I'm a Brazilian-based DevSecOps engineer currently working at Lojas Renner, a prominent retail company. My role involves developing a developer portal, leveraging my expertise in cloud technologies and secure development practices. Previously, I served as an SRE at Renner, where I honed my skills in maintaining robust and scalable systems, earning my Certified Kubernetes Administrator (CKA) certification along the way.
                  </div>
                  <div className="mb-8">
                    With a strong foundation in JavaScript, Python, Golang, and Rust, I bring a versatile skill set to the table. I excel in troubleshooting complex issues and am constantly pushing my boundaries to deepen my knowledge of system-level programming. My goal is to transition into international opportunities, applying my diverse experience and passion for low-level development to new challenges abroad.
                  </div>
                </div>
                <div className="self-stretch h-[18px]"></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-12">
              <div className="self-stretch h-[428px] flex flex-col justify-start items-start">
                <div className="self-stretch text-[#475467] text-lg font-normal leading-7 font-inter break-words">
                  Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.<br />
                  Lectus id duis vitae porttitor enim gravida morbi.<br />
                  Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.<br />
                  Suspendisse maecenas ac donec scelerisque diam sed est duis purus.<br />
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
