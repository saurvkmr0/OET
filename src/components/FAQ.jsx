import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
        

const FAQ = () => {
  return (
    <div id="FAQ" className="flex justify-center items-center bg-gray-50 rounded-xl mx-4 md:mx-8 p-4 mt-8 "> 
      <div className="flex flex-col rounded-xl mt-8 bg-white max-w-[1200px] w-full"> 
        <h2 className="text-5xl md:text-[5rem] font-bold text-[#024B6A] mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion activeIndex={0}>
          <AccordionTab header="What are the payment methods ?" className='w-full text-2xl text-[#024B6A] bg-[#c2e5f9] p-4 mb-8 rounded-xl'>
            <p className="m-0 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
          <AccordionTab header="Do i get a certificate ?" className='w-full text-2xl text-[#024B6A] bg-[#c2e5f9] p-4 mb-8 rounded-xl'>
            <p className="m-0 text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
          <AccordionTab header="What is the course duration ?" className='w-full text-2xl text-[#024B6A] bg-[#c2e5f9] p-4 mb-8 rounded-xl'>
            <p className="m-0 text-lg">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ