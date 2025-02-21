import Image from 'next/image'
import MedalCooper from '../../assets/medal-cooper.svg'
import MedalGold from '../../assets/medal-gold.svg'
import MedalSilver from '../../assets/medal-silver.svg'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Ingrid Larissa
          </span>
          <span className="font-heading text-2xl font-semibold leading-none text-gray-200">
            1030
          </span>
          <Image
            src={MedalGold}
            alt="medal-gold"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Melissa Loures
          </span>
          <span className="font-heading text-2xl font-semibold leading-none text-gray-200">
            1030
          </span>
          <Image
            src={MedalSilver}
            alt="medal-gold"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Rodrigo Gonçalves
          </span>
          <span className="font-heading text-2xl font-semibold leading-none text-gray-200">
            1030
          </span>
          <Image
            src={MedalCooper}
            alt="medal-gold"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
