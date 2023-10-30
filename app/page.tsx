import Image from 'next/image'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { HiOutlineCheckBadge } from 'react-icons/hi2'
import { HiCheckCircle } from 'react-icons/hi'
import { AiFillStar, AiOutlinePercentage, AiOutlineArrowRight } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'
import { VscLockSmall } from 'react-icons/vsc'

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
      <div id='main-body' className='flex flex-col'>
        <section id='headline'>
          <h1 className='text-center'>
            WAIT! YOUR ORDER IS IN PROGRESS.
          </h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </section>
        <section id='progress-status' className='flex justify-between'>
          <div className='flex flex-col items-center text-center'>
            <HiCheckCircle id='status-1' />
            <p className='status-text'>Cart Review</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <HiCheckCircle id='status-2' />
            <p className='status-text'>Checkout</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <p id='status-3' className='border rounded-full w-6 h-6 flex items-center justify-center'>
              3
            </p>
            <p className='status-text'>Special Offer</p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <p id='status-4' className='border rounded-full w-6 h-6 flex items-center justify-center'>
              4
            </p>
            <p className='status-text'>Confirmation</p>
          </div>
        </section>
        <section id='product' className='flex flex-col items-center gap-6'>
          <p id='offer-statement' className='text-center'>
            <span>ONE TIME ONLY</span> Special Price For 6 EXTRA Clarifion For Only <span>$14Each</span> ($84.00 Total!)
          </p>
          <div id='product-image' className='flex justify-center'>
            <Image
              src='/Product_Large.svg'
              alt='product image'
              width={320}
              height={328}
              className=''
            />
          </div>
          <div id='product-details-1' className='flex flex-col gap-3'>
            <div className='flex gap-2'>
              <div id='small-product-image' className='border rounded-xl flex items-center justify-center'>
                <Image
                  src='/Product_Small.svg'
                  alt='product image'
                  width={80}
                  height={80}
                  className=''
                />
              </div>
              <div id='product-info' className='flex flex-col justify-center'>
                <div className='flex items-center justify-between'>
                  <p id='p1' className=''>Clarifion Air Ionizer</p>
                  <div className='flex items-center justify-center gap-1'>
                    <p id='p2' className=''>$180</p>
                    <p id='p1' className=''><span>$84</span></p>
                  </div>
                </div>
                <div className='flex'>
                  <AiFillStar className='star' />
                  <AiFillStar className='star' />
                  <AiFillStar className='star' />
                  <AiFillStar className='star' />
                  <AiFillStar className='star' />
                </div>
                <p id='p3'><span className='font-bold'>.</span>    12 left in stock</p>
              </div>
            </div>
            <p id='p4' className='text-center'>
              Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
            </p>
          </div>
          <ul id='product-details-2' className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <FaCheck className='check' />
              <p>Negative Ion Technology may <span>help with allergens</span></p>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheck className='check' />
              <p>Designed for <span>air rejuvenation</span></p>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheck className='check' />
              <p><span>Perfect for every room</span> in all types of places.</p>
            </li>
          </ul>
          <div id='offer-statement-2' className='flex items-center justify-center'>
            <div>
              <AiOutlinePercentage className='percent border rounded-2xl w-7 h-7 p-1 font-bold flex items-center justify-center' />
            </div>
            <p>
              Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.
            </p>
          </div>
          <div id='claim-offer' className='flex flex-col items-center gap-2'>
            <button id='claim-offer-button' className='flex border rounded-full width-full items-center justify-center gap-2'>
              <p className='text-center'>YES-CLAIM MY DISCOUNT</p>
              <AiOutlineArrowRight className='arrow' />
            </button>
            <div id='payment-details' className='flex flex-col items-center justify-center gap-2 border rounded-xl p-3'>
              <div className='flex items-center justify-center gap-2'>
                <p> Free Shipping</p>
                <hr id='hr1' className='font-bold' />
                <p className='flex items-center gap-1'>
                  <VscLockSmall className='lock' />
                  Secure 256-bit SSL encryption
                </p>
              </div>
              <hr id='hr2' className='h-full w-full' />
              <div className='flex items-center justify-center gap-1'>
                <Image
                  src='/visa.svg'
                  alt='visa logo'
                  width={24}
                  height={14}
                  className=''
                />
                <Image
                  src='/shop_pay.svg'
                  alt='shop pay logo'
                  width={24}
                  height={14}
                  className=''
                />
                <Image
                  src='/paypal.svg'
                  alt='paypal logo'
                  width={24}
                  height={14}
                  className=''
                />
                <Image
                  src='/mastercard.svg'
                  alt='mastercard logo'
                  width={24}
                  height={14}
                  className=''
                />
                <Image
                  src='/gpay.svg'
                  alt='gpay logo'
                  width={24}
                  height={14}
                  className=''
                />
                <Image
                  src='/apple_pay.svg'
                  alt='apple pay logo'
                  width={24}
                  height={14}
                  className=''
                />
                <Image
                  src='/amex.svg'
                  alt='amex logo'
                  width={24}
                  height={14}
                  className=''
                />
              </div>
            </div>
            <button id='reject-offer'>
              <p className='text-center'>NO THANKS, I DON'T WANT THIS</p>
            </button>
          </div>
          <div id='guarantee' className='flex gap-2'>
            <Image
              src='/guarantee.svg'
              alt='guarantee logo'
              width={48}
              height={48}
              className=''
            />
            <p>
              If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
            </p>
          </div>
        </section>
      </div>
      <footer className='flex flex-col items-center justify-center gap-2 w-full'>
        <div className='flex gap-2'>
          <p>Copyright (c) 2023</p>
          <hr />
          <p>Clarifionsupport@clarifion.com</p>
        </div>
        <p className='flex items-center gap-1'>
          <VscLockSmall className='lock' />
          Secure 256-bit SSL encryption
        </p>
      </footer>
    </main>
  )
}
