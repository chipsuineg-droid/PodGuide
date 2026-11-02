import Link from 'next/link';
import { Globe, Mail, MapPin } from 'lucide-react';

export default function MobileFooter() {
  return (
    <footer className='mt-12 bg-[#0a0a0a] border-t border-[#222] text-gray-300'>
      {/* Tagline */}
      <p className='text-center text-sm py-4'>
        Designed with dedication, built for impact, engineered because we love what we do.
      </p>

      {/* Space for partner cards (placeholder) */}
      <div className='flex flex-col items-center gap-4 py-6'>
        <h2 className='text-base font-semibold text-white'>Our Partners</h2>
        <div className='flex flex-wrap justify-center gap-3'>
          {/* Placeholder – replace with actual logos later */}
          <div className='flex flex-col items-center gap-1 p-2 bg-[#0e0e0e] rounded-lg border border-[#242424]'>
            <div className='w-12 h-12 bg-gray-700 rounded-full' />
            <span className='text-xs text-gray-400'>Your logo could be here</span>
          </div>
        </div>
      </div>

      {/* Platform & Conduct – side‑by‑side on mobile */}
      <div className='flex flex-col sm:flex-row justify-between items-start px-4 py-6 gap-6'>
        {/* Platform */}
        <div className='flex-1'>
          <h3 className='text-sm font-medium text-white mb-2'>Platform</h3>
          <p className='text-xs'>
            <a
              href='https://portguide.org'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 hover:text-red-500 transition-colors'
            >
              <Globe size={12} />
              www.portguide.org.zw
            </a>
          </p>
        </div>

        {/* Conduct */}
        <div className='flex-1'>
          <h3 className='text-sm font-medium text-white mb-2'>Conduct</h3>
          <ul className='space-y-1 text-xs'>
            <li className='flex items-center gap-1'>
              <MapPin size={12} />
              Africa.online
            </li>
            <li className='flex items-center gap-1'>
              <Mail size={12} />
              info@podmyth.co.zw
            </li>
            <li className='flex items-center gap-1'>
              <Globe size={12} />
              www.portguide.org.zw
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright – centered */}
      <div className='border-t border-[#222] py-3'>
        <p className='text-center text-xs text-gray-500'>
          © 2026 Portguide – a subsidiary of Portbuild. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
