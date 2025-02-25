import { getRanking } from '@/http/api'
import Image from 'next/image'
import MedalCooper from '../../../assets/medal-cooper.svg'
import MedalGold from '../../../assets/medal-gold.svg'
import MedalSilver from '../../../assets/medal-silver.svg'

export default async function Ranking() {
  const { ranking } = await getRanking()
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          return (
            <div
              key={item.name}
              className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{index + 1}°</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold leading-none text-gray-200">
                {item.score}
              </span>
              {index + 1 === 1 && (
                <Image
                  src={MedalGold}
                  alt="medal-gold"
                  width={24}
                  height={24}
                />
              )}
              {index + 1 === 2 && (
                <Image
                  src={MedalSilver}
                  alt="medal-silver"
                  width={24}
                  height={24}
                />
              )}
              {index + 1 === 3 && (
                <Image
                  src={MedalCooper}
                  alt="medal-cooper"
                  width={24}
                  height={24}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
