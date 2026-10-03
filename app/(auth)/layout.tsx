export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-display font-bold">Pod<span className="text-brand">Guide</span></h1>
        <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Learn. Practise. Connect. Create. Grow.</p>
      </div>
      <div className="w-full max-w-md bg-[#0d0d0d] border border-[#222] p-8 rounded-2xl shadow-2xl">
        {children}
      </div>
    </div>
  )
}