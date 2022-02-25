import { useState } from 'react'
import { testimoniesMockData } from '../../mocks/data'
import { Testimonial } from '../../types/Testimonial'

import { useTranslation } from 'react-i18next'

export const Testimonies = () => {
  const { t } = useTranslation()

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [testimonies, setTestimonies] =
    useState<Testimonial[]>(testimoniesMockData)

  return (
    <div className='cards-2 bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='h2-heading'>{t('testimonies_title')}</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            {testimonies &&
              testimonies.map((testimonial: Testimonial) => {
                return (
                  <div className='card' key={testimonial.id}>
                    <img
                      className='quotes'
                      src='assets/images/quotes.svg'
                      alt='alternative'
                    />
                    <div className='card-body'>
                      <p className='testimonial-text'>
                        {testimonial.description}
                      </p>
                      <div className='testimonial-author'>
                        {testimonial.name}
                      </div>
                      <div className='occupation'>
                        {testimonial.occupation}, {testimonial.state}
                      </div>
                    </div>
                    <div className='gradient-floor red-to-blue'></div>
                  </div>
                )
              })}
          </div>
        </div>
        <hr className='section-divider' />
      </div>
    </div>
  )
}
