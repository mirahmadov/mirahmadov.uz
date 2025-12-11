"use client"

import AboutUsFolder from "@/components/about-us-folder";
import DesktopIconFrame from "@/components/desktop-icon-frame";
import TelegramAppFolder from "@/components/telegram-app-folder";


export default function Home() {
  return (
    <div className='p-2'>
      <div className='grid gap-3'>
        <AboutUsFolder />


        <TelegramAppFolder />


        {/* Projects */}
        <DesktopIconFrame image='/projects/nexura.png' title='NEXURA' url='https://nexura.uz' font='font-havelock' />
        <DesktopIconFrame image='/projects/techvision.png' title='TECHVISION' url='https://tech-vision.uz' />
        <DesktopIconFrame image='/projects/easysale.png' title='EasySale' url='https://easysale.uz' />
        <DesktopIconFrame image='/projects/midea.png' title='Midea' url='https://midea-kitchen.uz/ru' />
        <DesktopIconFrame image='/projects/endo.png' title='Endo Technologies' url='https://endo-tech.uz' />

      </div>
    </div>
  );
}
