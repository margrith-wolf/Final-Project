import React from 'react'
import './FaqStyles.css'

const Faq = () => {
  return (
    <div className='section-faq'>
        <div className='container'>
            <div className='col-1'>
                <h3>Frequently Asked Questions</h3>
                <p>Can't find the answer you're looking for?</p>
                <p>Reach out to our <span>customer support</span> team.</p>
            </div>
            <div className='col-2'>
                <div className='faq'>
                    <h5>What is employee management software?</h5>
                    <p>Lore ipsum dolor sit amet.</p>
                </div>
                <div className='faq'>
                    <h5>How will it improve efficiency?</h5>
                    <p>Lore ipsum dolor sit amet.</p>
                </div>
                <div className='faq'>
                    <h5>Can I trial this software?</h5>
                    <p>Lore ipsum dolor sit amet.</p>
                </div>
                <div className='faq'>
                    <h5>Are your customer service reps real people?</h5>
                    <p>Lore ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Faq