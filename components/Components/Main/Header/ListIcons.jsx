import Image from "next/image";
import Link from "next/link";

const ListIcons = () => {
  return (
    <div className='flex justify-between items-center gap-x-10'>
      <Link href="https://www.facebook.com/lileelogementspmr?locale=fr_FR" > <Image src="/icons/icons(6).svg" width={22} height={22}/> </Link>
      <Link href="https://x.com/lileepmr" > <Image src="/icons/icons(5).svg" width={22} height={22}/> </Link>
      <Link href="https://www.linkedin.com/company/86267153/admin/" > <Image src="/icons/icons(2).svg" width={22} height={22}/> </Link>
      <Link href="https://www.youtube.com/@lileepmr" > <Image src="/icons/icons(3).svg" width={26} height={26}/> </Link>
      <Link href="https://www.instagram.com/lilee.fr/" > <Image src="/icons/icons(4).svg" width={22} height={22}/> </Link>
    </div>  
  );
};

export default ListIcons;