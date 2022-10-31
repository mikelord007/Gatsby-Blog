import React,{ useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let categories = {
  Simple: {
    perks:[
            'Simple blogs, for Simple People',
            '3 free blog reads per week',
            'All simple tier blogs available'
          ],
    price: 0
  },
  Regular: {
    perks:[
            'Access to Dark Theme',
            '100 blog reads per week',
            'Premium blogs available'
          ],
    price: 25
  },
  Fancy: {
    perks:[
            'Access to Dark and Colorful themes',
            'Unlimited blog reads per week',
            'Ultra-Premium blogs available'
          ],
    price: 50
  },
}


export default function Example() {

  return (
    <div className='bg-gray-100'>
      <div className="w-full max-w-2xl px-2 py-24 m-auto sm:px-12 lg:px-0">
        <h2 className="text-5xl font-semibold text-indigo-600 text-center mb-12">Pricing</h2>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map(({perks, price},idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-7',
                  'bg-gray-200',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul className={'list-disc py-4 px-8 flex flex-col gap-4 '}>
                  {perks.map((perk) => (
                        <li>{perk}</li>
                  ))}
                </ul>
                <h3 className={'px-8'}>
                  Only <span className={'text-blue-700 font-bold'}>${price}</span>
                </h3>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
