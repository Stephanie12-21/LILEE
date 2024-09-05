"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: '/', name: 'Accueil' },
  { path: '/PAGES/Annonces', name: 'Annonces' },
  { path: '/PAGES/Contact', name: 'Contact' },
  { path: '/PAGES/Blog', name: 'Blog' },
];

const ListLinks = () => {
  const path = usePathname();

  return (
    <nav className='flex justify-between items-center gap-10'>
      {links.map((link, index) => (
        <Link href={link.path} key={index} className='relative capitalize text-white text-[16px] font-semibold'>
          {link.name}
          {link.path === path && (
            <motion.span
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
              layoutId='underline'
              className='absolute left-0 bottom-0 w-full h-[3px] bg-white'
            />
          )}
          <motion.span
            whileHover={{ scaleX: 1 }}
            whileFocus={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='absolute left-0 bottom-0 w-full h-[3px] bg-white'
          />
        </Link>
      ))}
    </nav>
  );
};

export default ListLinks;
