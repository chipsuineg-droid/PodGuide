import Link from 'next/link';
import { Globe, Mail, MapPin, ShieldCheck, Scale } from 'lucide-react';

export default function MobileFooter() {
  return (
    <footer className='mt-12 bg-[#080808] border-t border-[#1a1a1a] text-gray-300'>
      {/* Platform & Conduct */}
      <div className='flex flex-col sm:flex-row justify-between items-start px-4 py-6 gap-6 max-w-5xl mx-auto'>
        {/* Platform */}
        <div className='flex-1'>
          <h3 className='text-xs font-bold uppercase tracking-wider text-white mb-2'>Platform</h3>
          <ul className='space-y-1.5 text-xs text-gray-400'>
            <li>
              <Link href='/library' className='hover:text-red-400 transition-colors'>
                Digital Library
              </Link>
            </li>
            <li>
              <Link href='/practise' className='hover:text-red-400 transition-colors'>
                MCQ Question Banks
              </Link>
            </li>
            <li>
              <Link href='/medstore' className='hover:text-red-400 transition-colors'>
                MedStore Clinical Gear
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div className='flex-1'>
          <h3 className='text-xs font-bold uppercase tracking-wider text-white mb-2'>Legal and Policies</h3>
          <ul className='space-y-1.5 text-xs text-gray-400'>
            <li>
              <Link href='/terms' className='hover:text-red-400 transition-colors flex items-center gap-1.5'>
                <Scale size={11} className='text-red-500' />
                <span>Terms and Conditions</span>
              </Link>
            </li>
            <li>
              <Link href='/privacy' className='hover:text-red-400 transition-colors flex items-center gap-1.5'>
                <ShieldCheck size={11} className='text-red-500' />
                <span>Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Conduct */}
        <div className='flex-1'>
          <h3 className='text-xs font-bold uppercase tracking-wider text-white mb-2'>Contact</h3>
          <ul className='space-y-1.5 text-xs text-gray-400'>
            <li className='flex items-center gap-2'>
              <MapPin size={12} className='text-red-500 shrink-0' />
              <span>Harare, Zimbabwe</span>
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={12} className='text-red-500 shrink-0' />
              <a href='mailto:info@podmyth.co.zw' className='hover:text-white transition-colors'>
                info@podmyth.co.zw
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <Globe size={12} className='text-red-500 shrink-0' />
              <a href='https://podguide.org.zw' className='hover:text-white transition-colors'>
                www.podguide.org.zw
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-[#181818] py-4 text-center text-[11px] text-gray-500 px-4'>
        &copy; {new Date().getFullYear()} PodGuide (a subsidiary of PodMyth Group). All rights reserved.
      </div>
    </footer>
  );
}
