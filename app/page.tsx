import TodoApp from '@/cpmponents/TodoApp'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className='flex justify-center items-center h-screen'>
        <TodoApp />
      </section>
    </div>
  )
}
