import Image from 'next/image'

export default function SideBar(){
  return <div className="
    flex flex-col
    w-1/4 h-full
    bg-bnexGreen
    p-8
    text-bnexDarkBlue
  ">
    <h1 className="
      font-yellowtail
      text-6xl
      mb-8
    ">
      Olá
    </h1>
    <p className="
      text-lg font-poppins flex-grow">
      Meu nome é Gabriel Bortolote e este é o projeto que eu desenvolvi como parte do processo seletivo da BNEX.
    </p>
    
    <Image
      src="/bnexLogo.png"
      width={500}
      height={179}
      alt="Bnex Logo"
      className='w-full'
    />
  </div>
}