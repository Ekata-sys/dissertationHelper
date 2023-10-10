import React from 'react';
import Banner from './Banner1';
import AllNeed from './AllNeed';
import ContactDh from './ContactDh';
import BestDh from './BestDh';
import WritingService from './WritingService';
import RangeOfService from './RangeOfService';
import WhyStudent from './WhyStudent';
import Faq from './Faq';
import SubjectRange from './SubjectRange';
export default function Home() {
  return (
    <>
   <Banner></Banner>
   <BestDh />
   <SubjectRange />
   <ContactDh />
   <AllNeed />
   <WritingService />
   <Faq />
   <WhyStudent />
   <RangeOfService />
    </>
  )
}
