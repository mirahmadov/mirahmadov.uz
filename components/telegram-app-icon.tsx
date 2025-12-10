import Image from "next/image"


interface ITelegramAppIcon {
    title: string,
    image: string,
    url: string
}

export default function TelegramAppIcon({ title, image, url }: ITelegramAppIcon) {

    return (
        <a
            href={url}
            target="_blank"
            className={`p-2 rounded hover:bg-background-light text-sm text-center flex flex-col items-center gap-2 w-[100px] cursor-pointer select-none`}
        >
            <Image alt="" src={image} width={50} height={50} loading="lazy" />
            {title}
        </a>
    )
}
