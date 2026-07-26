import FadeIn from '@/components/ui/FadeIn'
import CountUp from '@/components/ui/CountUp'
import { stats } from '@/data/site'

export default function Stats() {
  return (
    <section className="relative bg-white pb-4">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-primary-100 bg-gradient-to-br from-white via-primary-50/50 to-white p-6 shadow-[0_24px_60px_-30px_rgba(0,56,103,0.3)] sm:p-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-2 py-3 text-center">
                <dd className="font-display text-4xl font-extrabold text-primary-600 sm:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  )
}
