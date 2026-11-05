import Link from 'next/link';
import { Globe, Mail, MapPin, Scale, ShieldCheck } from 'lucide-react';

export default function MobileFooter() {
  return (
    <footer className='mt-12 bg-[#080808] border-t border-[#1a1a1a] text-gray-300'>
      {/* Main footer content */}
      <div className='px-5 py-8 max-w-lg mx-auto space-y-8'>
        {/* Platform */}
        <div>
          <h3 className='text-[11px] font-bold uppercase tracking-wider text-white mb-3'>
            Platform
          </h3>
          <ul className='space-y-2.5 text-[13px] text-gray-400'>
            <li>
              <Link href='/library' className='hover:text-white transition-colors'>
                Digital Library
              </Link>
            </li>
            <li>
              <Link href='/practise' className='hover:text-white transition-colors'>
                MCQ Question Banks
              </Link>
            </li>
            <li>
              <Link href='/learn' className='hover:text-white transition-colors'>
                Learn and Study
              </Link>
            </li>
            <li>
              <Link href='/medstore' className='hover:text-white transition-colors'>
                MedStore Clinical Gear
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <h3 className='text-[11px] font-bold uppercase tracking-wider text-white mb-3'>
            Legal and Policies
          </h3>
          <ul className='space-y-2.5 text-[13px] text-gray-400'>
            <li>
              <Link href='/terms' className='hover:text-white transition-colors flex items-center gap-2'>
                <Scale size={12} className='text-red-500 shrink-0' />
                <span>Terms and Conditions</span>
              </Link>
            </li>
            <li>
              <Link href='/privacy' className='hover:text-white transition-colors flex items-center gap-2'>
                <ShieldCheck size={12} className='text-red-500 shrink-0' />
                <span>Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className='text-[11px] font-bold uppercase tracking-wider text-white mb-3'>
            Contact
          </h3>
          <ul className='space-y-2.5 text-[13px] text-gray-400'>
            <li className='flex items-center gap-2'>
              <MapPin size={13} className='text-red-500 shrink-0' />
              <span>Harare, Zimbabwe</span>
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={13} className='text-red-500 shrink-0' />
              <a href='mailto:info@podmyth.co.zw' className='hover:text-white transition-colors'>
                info@podmyth.co.zw
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <Globe size={13} className='text-red-500 shrink-0' />
              <a href='https://podguide.org.zw' className='hover:text-white transition-colors'>
                podguide.org.zw
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className='text-[11px] font-bold uppercase tracking-wider text-white mb-3'>
            Follow Us
          </h3>
          <div className='flex items-center gap-3'>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='w-9 h-9 rounded-full bg-[#151515] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600/40 transition-colors'>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='w-9 h-9 rounded-full bg-[#151515] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600/40 transition-colors'>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href='https://tiktok.com' target='_blank' rel='noopener noreferrer' className='w-9 h-9 rounded-full bg-[#151515] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600/40 transition-colors'>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.37-6.22V9.4a8.16 8.16 0 0 0 3.85.96V7.04a4.85 4.85 0 0 1-0-.35z"/></svg>
            </a>
            <a href='mailto:info@podmyth.co.zw' className='w-9 h-9 rounded-full bg-[#151515] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600/40 transition-colors'>
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-[#181818] py-5 text-center text-[11px] text-gray-500 px-5'>
        &copy; {new Date().getFullYear()} PodGuide (a subsidiary of PodMyth Group). All rights reserved.
      </div>
    </footer>
  );
}
