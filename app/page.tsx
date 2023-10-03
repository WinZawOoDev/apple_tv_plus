import Content from '@/components/Content'
import Navbar from '@/components/Navbar'
import VideoBackground from '@/components/VideoBackground'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between mx-auto">
      <Navbar />
      <section className='w-full max-w-7xl'>
        <Content />
      </section>
      <VideoBackground />
    </main>
  )
}
