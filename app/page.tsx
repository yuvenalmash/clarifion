import Image from 'next/image'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import {HiOutlineCheckBadge} from 'react-icons/hi2'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="flex flex-col w-screen border border-red-600">
        <div id="top-nav" className="flex justify-between text-white">
          <button>
            <GoChevronLeft />
          </button>
          <div>
            <p className='flex items-center justify-center gap-1'>
              <HiOutlineCheckBadge className='top-nav-icon' />
              30-DAY SATISFACTION GUARANTEE
            </p>
          </div>
          <button>
            <GoChevronRight />
          </button>
        </div>
        <div id="bottom-nav" className="flex h-full justify-between align-middle">
          <Image
            src='/Clarifion_Logo_1.svg'
            alt='Clarifion Logo'
            width={106.67}
            height={20}
            className=''
          />
          <div className='flex items-center justify-center gap-2'>
            <Image
              src='/McAfee_Secure.svg'
              alt='McAfee Logo'
              width={44}
              height={16}
              className=''
            />
            <Image
              src='/Norton_Antivirus_logo_1.svg'
              alt='Norton Logo'
              width={41}
              height={16}
              className=''
            />
          </div>
        </div>
      </nav>
    </main>
  )
}
