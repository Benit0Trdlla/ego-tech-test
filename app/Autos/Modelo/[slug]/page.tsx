import Image from "next/image"
export default function Page() {
  return (
    <>
      <div className="px-3 md:px-0">
        <section className="container mx-auto m-6 p-6">
          <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 m-6 p-6">
            <Image src="/IMG.png" width={559} height={320} alt="Modelo" />
            <div>
              <h4 className="font-semibold pb-3 text-[20px]">Toyota Corolla</h4>
              <h3 className="text-7xl font-bold pb-5">Preparada para cualquier desafío </h3>
              <p className="text-[18px]/[21px] py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
        <section className="bg-[#F7F7F7]">
          <p>carrousel</p>
        </section>
        <section className="container mx-auto m-6 p-6">
          <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 m-6 p-6">
            <div className="order-2 text-balance">
              <h4 className="font-semibold pb-3 text-[20px]">Titulo 20px</h4>
              <p className="text-[16px]/[27px] py-5">Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet. AL dorsd</p>
            </div>
            <Image className="order-1" src="/IMG.png" width={559} height={320} alt="Modelo" />
          </div>
        </section>
        <section className="container mx-auto m-6 p-6">
          <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10 m-6 p-6">
            <Image src="/IMG.png" width={559} height={320} alt="Modelo" />
            <div className="text-balance">
              <h4 className="font-semibold pb-3 text-[20px]">Titulo 20px</h4>
              <p className="text-[16px]/[27px] py-5">Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 