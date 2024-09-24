import React from 'react'
import Card from './Card'


const Course = () => {

  const cardArr=[
    {
      title:"Module 2: Medical English – The Patient Interview I",
      image:"https://promedicalenglish.com/wp-content/uploads/2021/03/Speaking-4-750x500.jpg",
      description:"In Module 2, you will Greet your patient appropriately Record accurate details about family and social",
      price:"$9.99"
    },
    {
      title:"3 OET speaking course",
      image:"https://promedicalenglish.com/wp-content/uploads/2023/11/Speaking-Session-3-feature-750x500.jpg",
      description:"Work with a native-English OET expert tutor and the examiners’ criteria. Get standardised OET role plays",
      price:"$84"
    },
    {
      title:"Intensive OET Writing Course | Medicine Ext Course",
      image:"https://promedicalenglish.com/wp-content/uploads/2021/01/Doctor-at-desk-writing-notes-scaled.jpg",
      description:"Back to LIBRARY This course thoroughly covers all aspects of the subtest that you need",
      price:"Free"
    },
    {
      title:"Pre OET placement test",
      image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF3fGVufDB8fDB8fHww",
      description:"Pre OET placement test thoroughly covers all aspects of the subtest that you need to clear the test.",
      price:"$3.99"
    }
  ]

  return (
    // bg-[#69a4c5]
    <div className='course-gradient z-[100] mt-10 rounded-xl mx-4 md:mx-8 '>
      <div className="bg-white max-w-[100%] rounded-xl z-50">
        <img src='https://promedicalenglish.com/wp-content/uploads/2023/05/4-1.png' className='rounded-t-lg' />
        <div className="text-center text-[4rem] md:text-[6rem] font-bold text-[#024B6A]">
          Courses
        </div>
        <div className="flex justify-center">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {cardArr.map((item) => {
            return <Card key={item.title} title={item.title} image={item.image} description={item.description} price={item.price}/>
          })}
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Course