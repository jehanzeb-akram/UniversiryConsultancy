import React, { useState } from 'react';
import canada from '../../assets/VisaForStudy/canada.png';
import './country.css';
import Article from '../../components/Article/Article';
import aritcleImg from '../../assets/VisaForStudy/usaArticle.jpg';
import canadaVisaImg from '../../assets/VisaForStudy/usaVisa.jpg';
import Visa from '../../components/Visa/Visa';
import University from '../../components/University/University';
import commentImg from '../../assets/VisaForStudy/comment.png';
import Comment from '../../components/Comment/Comment';
import { Link } from 'react-router-dom';
import usa from '../../assets/VisaForStudy/usa.png';
import germany from '../../assets/VisaForStudy/germany.png';
import england from '../../assets/VisaForStudy/england.png';
import japan from '../../assets/VisaForStudy/japan.png';
const articleData = {
  about:
    'The United States is a popular destination for international students seeking a quality education. With over 4,000 universities and colleges to choose from, the US offers a wide variety of academic programs and disciplines to suit every interest and career goal. Many of these institutions are renowned for their excellence in research and innovation, and graduates from US universities are highly sought after by employers worldwide. Studying in the US also offers opportunities for cultural immersion and personal growth, as students can experience the rich diversity of American society and explore its many natural and cultural attractions. Overall, studying in the US can be a transformative experience that provides both academic and personal benefits.',
  academicExcellence:
    'Academic excellence is a defining characteristic of higher education in the United States. With a long tradition of intellectual rigor and innovation, US universities and colleges are at the forefront of research, discovery, and innovation in a wide range of fields, from science and technology to the arts and humanities. US institutions of higher education are renowned for their world-class faculty, state-of-the-art facilities, and cutting-edge research centers, which provide students with unparalleled opportunities to explore their academic interests and pursue their passions.The US higher education system places a strong emphasis on academic rigor and critical thinking, encouraging students to engage with complex ideas and develop their analytical and problem-solving skills. This approach prepares students for success in a rapidly changing global economy, where adaptability, creativity, and innovation are essential to achieving success. Many US universities and colleges also foster a culture of interdisciplinary collaboration, bringing together scholars from diverse fields to tackle complex challenges and create new knowledge.Moreover, the US higher education system is known for its commitment to diversity and inclusion, providing a welcoming and supportive environment for students from all backgrounds. US institutions of higher education recognize the value of a diverse student body and actively seek to promote diversity, equity, and inclusion in all aspects of campus life. By engaging with diverse perspectives and experiences, students in the US gain a deeper understanding of the world around them and develop the skills and knowledge needed to become effective global citizens.Overall, studying in the United States provides students with unparalleled opportunities to achieve academic excellence and pursue their goals. With access to top-notch resources, world-class faculty, and a dynamic academic community, students in the US are well-prepared to make meaningful contributions to society and achieve success in their chosen fields.',
  multiCulturalEnvironment:
    ' The United States is renowned for its multicultural environment, making it an ideal destination for international students seeking a diverse and inclusive academic experience. US universities and colleges are home to a vibrant and dynamic community of scholars and students from all over the world, creating a rich tapestry of cultures, languages, and perspectives.Studying in a multicultural environment offers numerous benefits, including the opportunity to engage with diverse perspectives and experiences, develop intercultural communication skills, and gain a deeper understanding of the world around us. US institutions of higher education are committed to promoting diversity and inclusion, providing a welcoming and supportive environment for students from all backgrounds.In addition to the cultural diversity found on campus, the United States offers a wealth of cultural attractions and natural wonders for students to explore. From world-class museums and theaters to breathtaking national parks and landmarks, the US offers a wealth of opportunities for students to immerse themselves in American culture and history.Overall, studying in the US provides students with a unique opportunity to engage with a diverse and inclusive community of scholars and students, broadening their horizons and preparing them for success in an increasingly interconnected world.',
  affordableEducation:
    'Affordability is a major concern for many students considering studying in the United States, but there are many options available to make higher education more accessible and affordable. While tuition costs can vary widely depending on the institution and program of study, US universities and colleges offer a range of financial aid programs, scholarships, and grants to help students offset the cost of tuition and living expenses.One of the most common forms of financial aid in the US is the Federal Pell Grant, which provides need-based aid to eligible undergraduate students. In addition, many institutions offer merit-based scholarships and grants to outstanding students based on academic achievement, leadership skills, or other criteria.Furthermore, many US universities and colleges offer work-study programs, which allow students to earn money while gaining valuable work experience. This can help offset the cost of tuition and living expenses, while also providing students with valuable skills and networking opportunities.Overall, while the cost of higher education in the US can be a significant investment, there are many resources and opportunities available to help make it more affordable. By taking advantage of financial aid programs, scholarships, and work-study opportunities, students can achieve their academic goals and pursue their career aspirations without breaking the bank',
  employment:
    'Employment opportunities are an important consideration for many students when choosing to study in the United States. The US is home to a vibrant and dynamic job market, offering a wide range of career opportunities across a variety of industries.US universities and colleges often provide students with access to career services, including job fairs, internships, and networking events, to help them gain the skills and experience needed to secure employment after graduation. In addition, many US institutions have partnerships with local businesses and organizations, providing students with valuable connections and work experience opportunities.International students in the US are also eligible for a variety of work opportunities during their studies, including on-campus employment and internships. Depending on their program of study, students may also be eligible for Optional Practical Training (OPT), which allows them to work in the US for up to 12 months after graduation. This can provide valuable work expeience and help students establish professional networks in their chosen field.Overall, studying in the US provides students with access to a wealth of employment opportunities and resources, preparing them for success in their chosen careers. Withaccess to career services, internships, and work opportunities, students are well-equipped to navigate the job market and pursue their career aspirations in the US and beyond',
  qualityOfLife:
    'The United States offers an exceptional quality of life for students studying in the country. From world-class healthcare to a high standard of living, the US provides students with access to a range of resources and services that contribute to a comfortable and fulfilling experience.US cities offer a vibrant cultural scene, with a range of entertainment options including museums, theaters, music venues, and sports arenas. In addition, the country is home to a diverse range of natural wonders, including national parks, beaches, mountains, and lakes, offering endless opportunities for exploration and adventure.US universities and colleges also provide students with access to a range of student organizations and clubs, helping to build a strong sense of community and social support. This can be especially valuable for international students who may be adjusting to a new culture and environment.Furthermore, the US is known for its excellent healthcare system, providing students with access to high-quality medical care in case of illness or injury. Additionally, US cities are known for their safety and security, with low crime rates and a strong commitment to public safety.Overall, studying in the US provides students with a high quality of life, offering access to a range of resources and services that contribute to a comfortable, safe, and fulfilling experience. With a vibrant cultural scene, stunning natural wonders, and a strong sense of community, the US is an ideal destination for students seeking an exceptional academic and personal experience.',
  conclusion:
    "In conclusion, studying in the United States offers a wealth of opportunities for international students seeking a high-quality education in a vibrant and dynamic academic environment. With a diverse range of academic programs and institutions, access to world-class research facilities and resources, and a commitment to academic excellence, US universities and colleges provide students with the tools and resources they need to achieve their academic and professional goals.Moreover, studying in the US provides students with access to a range of cultural, social, and recreational opportunities, contributing to a rich and fulfilling personal experience. From exploring the country's diverse natural and cultural attractions to building strong networks and communities, students studying in the US can enjoy a unique and transformative experience that prepares them for success in an increasingly globalized world.While the cost of higher education in the US can be a significant investment, there are many resources and opportunities available to help make it more accessible and affordable. With a commitment to promoting diversity and inclusion, providing access to financial aid programs, scholarships, and work opportunities, US institutions of higher education are dedicated to helping students from all backgrounds achieve their academic and career aspirations.Overall, studying in the US is a life-changing experience that offers a world of opportunities and possibilities for international students. Whether pursuing an undergraduate, graduate, or professional degree, students studying in the US can benefit from a unique and transformative academic and personal experience that prepares them for success in an ever-changing and interconnected world.",
};

const visaData = {
  about: {
    content:
      'Studying abroad in the United States is an exciting and enriching experience for international students seeking to broaden their horizons and gain a global perspective on their education. The US is a top destination for students seeking high-quality education in a wide range of fields, with renowned universities and colleges offering world-class academic programs and research facilities. Studying abroad in the US provides students with a unique opportunity to immerse themselves in a new culture, building cross-cultural skills and understanding that will serve them well in their personal and professional lives. US universities and colleges offer a vibrant and dynamic academic environment, with diverse student populations and a range of cultural and social activities that foster a sense of community and belonging.Moreover, studying abroad in the US can provide international students with a range of career opportunities and professional networks that can help launch their careers in a global context. US institutions often provide students with access to career services, internships, and networking events, as well as opportunities for Optional Practical Training (OPT) that allow them to work in the US after graduation. Despite the financial investment required to study abroad in the US, there are many resources and opportunities available to help make it more affordable, including financial aid programs, scholarships, and work opportunities. Additionally, many US universities and colleges offer resources and support services to help international students navigate the unique challenges of studying and living in a new country.Overall, studying abroad in the US is an exceptional opportunity for international students seeking to expand their academic and personal horizons, build cross-cultural skills, and gain a global perspective on their education. With access to world-class academic programs, vibrant cultural and social opportunities, and a range of career resources and networks, studying abroad in the US offers a transformative and enriching experience that prepares students for success in an ever-changing and interconnected world.',
  },
  firstHeading: {
    heading: 'United States Visa',
    content:
      "Studying in the United States is a dream come true for many international students, and obtaining a student visa is an essential part of making that dream a reality. The process of applying for a US study visa can be complex and time-consuming, requiring careful preparation and attention to detail. To obtain a study visa, students must first apply to a US institution and receive an acceptance letter, after which they can begin the visa application process.The application process for a US study visa can be a daunting prospect for many international students, particularly those who are unfamiliar with the US immigration system. However, with the right preparation and guidance, it can be navigated successfully. Students must demonstrate that they have sufficient financial resources to support themselves during their studies and provide academic transcripts to show that they meet the institution's admission requirements. They must also attend an interview at a US embassy or consulate, during which they will be asked about their plans for studying in the US and their ties to their home country.Despite the challenges of the visa application process, the benefits of studying in the US are many. The US is home to some of the world's most renowned universities and offers a diverse range of academic programs across a wide range of disciplines. Studying in the US provides students with access to world-class facilities and resources, as well as opportunities for research and professional development. Additionally, the multicultural environment of US universities offers international students the chance to broaden their horizons and build cross-cultural skills that will serve them well in their personal and professional lives.Moreover, the process of obtaining a US study visa can be a valuable learning experience in itself, helping students develop important skills such as time management, organization, and communication. Many US institutions offer resources and support services to help international students navigate the visa application process, including workshops, online resources, and dedicated staff who can answer questions and provide guidance. With the right support and preparation, the process of obtaining a US study visa can be a positive and rewarding experience for international students seeking to further their education and career prospects in the United States",
  },
  secondHeading: {
    heading: 'Types of United States Visa',
    content:
      "The United States offers a wide range of visa categories, each with its own set of requirements and eligibility criteria. In addition to student visas, there are several other types of visas that individuals may apply for when traveling to the US.Tourist visas, also known as B-2 visas, are intended for individuals who are visiting the US for leisure or medical treatment. Business visas, or B-1 visas, are designed for individuals who are traveling to the US for business-related purposes such as attending conferences or meetings, negotiating contracts, or conducting research.For individuals seeking to work in the US, there are several visa categories to choose from, including H-1B visas for skilled workers in specialty occupations, L-1 visas for intra-company transfers, and O-1 visas for individuals with extraordinary ability in the arts, sciences, or business.There are also visas available for individuals seeking to immigrate to the US permanently, such as family-based visas and employment-based visas. These visas provide a pathway for individuals to become lawful permanent residents of the US and eventually, if they choose to pursue it, US citizenship.Navigating the complex world of US visas can be challenging, but with the right guidance and support, it is possible to find the visa that best suits your needs and eligibility. It's important to carefully consider your goals and intentions for traveling to the US, and to seek out the advice of immigration professionals or experienced travelers who can offer insight and guidance on the visa application process.",
  },
  thirdHeading: {
    heading: 'United States Study Visa Documents',
    content:
      "Applying for a US study visa requires a variety of documents to demonstrate the student's eligibility and qualifications. The required documents can vary depending on the individual's situation and the institution they plan to attend, but typically include academic transcripts, standardized test scores, financial statements, and a valid passport.Academic transcripts are an essential component of the application process, providing evidence of the student's educational background and demonstrating their ability to succeed in a US academic program. Standardized test scores such as the TOEFL or IELTS are also commonly required, as they demonstrate the student's proficiency in the English language.Financial documents, such as bank statements or sponsorship letters, are used to demonstrate that the student has the financial resources to support themselves during their studies in the US. Additionally, students may be required to provide documentation demonstrating their ties to their home country, such as family relationships, property ownership, or employment prospects.In addition to these required documents, students may also need to provide additional materials such as a personal statement, letters of recommendation, or a resume/CV. It's important to carefully review the requirements for the institution and visa category being applied for, and to ensure that all documents are accurate, up-to-date, and properly formatted.Navigating the documentation requirements for a US study visa can be overwhelming, but with careful planning and attention to detail, it's possible to compile a strong application package. Many US institutions offer resources and support services to help international students navigate the visa application process, including guidance on required documents and tips for preparing a successful application. By working closely with these resources and seeking the guidance of experienced immigration professionals, students can increase their chances of success in obtaining a US study visa.",
  },
  fourthHeading: {
    heading: 'USA Study Visa Fee',
    content:
      "The cost of a US study visa varies depending on the type of visa being applied for and the country of origin of the applicant. In addition to the visa application fee, there may be additional fees for services such as biometric data collection, visa processing, or expedited services.As of 2023, the fee for a nonimmigrant student visa (F-1 visa) is $160, with an additional SEVIS fee of $350. The SEVIS fee is paid separately and is used to support the Student and Exchange Visitor Program, which tracks and monitors the status of international students in the US.It's important to note that the visa application fee is non-refundable, even if the visa is ultimately denied. Additionally, some countries may require additional fees or taxes on top of the standard visa fees, so it's important to carefully review the requirements for the specific country of origin.While the cost of a US study visa can be significant, it's important to consider it as an investment in one's education and future career opportunities. There may be scholarship or funding opportunities available to help offset the costs of studying in the US, and many institutions offer resources and support to help international students navigate the financial aspects of studying abroad. By carefully planning and budgeting for the cost of a US study visa, students can ensure that they are able to make the most of their academic opportunities in the US",
  },
};

const uniData = [
  'Harvard University',
  'Massachusetts Institute of Technology (MIT)',
  'Stanford University',
  'California Institute of Technology (Caltech)',
  'Princeton University',
  'Yale University',
  'Columbia University',
  'University of Chicago',
  'Duke University',
  'University of Pennsylvania',
  'Northwestern University',
  'University of California, Los Angeles (UCLA)',
  'University of Michigan-Ann Arbor',
  'University of Texas at Austin',
  'Georgia Institute of Technology',
  'Purdue University',
  'University of Southern California',
  'New York University (NYU)',
  'Carnegie Mellon University',
  'University of Illinois at Urbana-Champaign',
];

const comments = [
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
  {
    commentedBy: 'Guzman Anthony',
    date: '12 July, 2021',
    comment:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script",
  },
];

export default function Canada() {
  const [activeButton, setActiveButton] = useState('article');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const [showForm, setShowForm] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      commentedBy: name,
      date: date,
      comment: commentText,
    };
    comments.unshift(comment);
    setCommentText('');
    setName('');
    setDate('');
    setShowForm(false);
  };
  return (
    <div className="country-page">
      <div className="country-page-mainHeading-section">
        <img
          src={usa}
          className="country-page-mainHeading-section-img"
          alt="flag"
        ></img>
        <h1>USA</h1>
        <p>
          Home {'>'} Visa For Study {'>'} USA
        </p>
      </div>

      <div className="country-page-buttons">
        <div className="country-page-buttons-flex">
          <button
            className={
              activeButton === 'article'
                ? 'country-page-button-active'
                : 'country-page-button'
            }
            onClick={() => handleButtonClick('article')}
          >
            Article
          </button>
          <button
            className={
              activeButton === 'visa'
                ? 'country-page-button-active'
                : 'country-page-button'
            }
            onClick={() => handleButtonClick('visa')}
          >
            Visa
          </button>
          <button
            className={
              activeButton === 'university'
                ? 'country-page-button-active'
                : 'country-page-button'
            }
            onClick={() => handleButtonClick('university')}
          >
            University
          </button>
        </div>
      </div>

      <div className="country-page-mainContent">
        {activeButton === 'article' && (
          <Article articleData={articleData} imageSource={aritcleImg}></Article>
        )}

        {activeButton === 'visa' && (
          <Visa visaData={visaData} imageSource={canadaVisaImg}></Visa>
        )}

        {activeButton === 'university' && (
          <University university={uniData}></University>
        )}
      </div>

      <div className="comments">
        <h1 className="comments-heading">
          Comments <span>{`(${comments.length})`}</span>{' '}
        </h1>
        {comments.slice(0, showMore ? comments.length : 3).map((comment) => (
          <Comment comment={comment} imageSource={commentImg}></Comment>
        ))}
        <div>
          <button className="showMoreBtn" onClick={handleShowMore}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>

        {showForm ? (
          <form className="commentForm" onSubmit={handleSubmit}>
            <h3>Add Your Comments</h3>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Date:
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Comment:
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </label>
            </div>
            <div className="commentFormBtnDiv">
              <button type="submit">Submit</button>
            </div>
          </form>
        ) : (
          <div className="createCommentBtn-div">
            <button
              onClick={() => setShowForm(true)}
              className="createCommentBtn"
            >
              Create Comment {'  '} <i class="bx bxs-comment-dots"></i>
            </button>
          </div>
        )}
      </div>
      <div className="country-last-section">
        <h1>Read Another Country</h1>
        <div className="studyVisaSection-btnContainer">
          <Link className="link" to="/canada">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={canada} alt="flag"></img>
              <span>Canada Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/england">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={england} alt="flag"></img>
              <span>England Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/japan">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={japan} alt="flag"></img>
              <span>Japan Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/germany">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={germany} alt="flag"></img>
              <span>Germany Study Visa</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
