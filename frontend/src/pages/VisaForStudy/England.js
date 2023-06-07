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
import germanyarticle from '../../assets/VisaForStudy/germanyarticle.png';
import germanyvisa from '../../assets/VisaForStudy/germanyvisa.png';
import englandarticle from '../../assets/VisaForStudy/englandarticle.png';
import englandvisa from '../../assets/VisaForStudy/englandvisa.png';

const articleData = {
  about:
    'England is a popular destination for international students seeking a quality education. With a diverse range of universities and colleges, England offers numerous academic programs and disciplines to cater to various interests and career goals. Many of these institutions are internationally recognized for their research and innovation, and graduates from English universities are highly valued by employers worldwide. Studying in England also provides opportunities for cultural immersion and personal growth, as students can experience the vibrant diversity of English society and explore its rich historical and cultural heritage. In summary, studying in England can be a life-changing experience that offers both academic and personal advantages.',
  academicExcellence:
    'Academic excellence is a defining characteristic of higher education in England. With a rich heritage of intellectual rigor and pioneering advancements, universities and colleges in England are at the forefront of research, innovation, and educational quality across various disciplines, ranging from science and technology to the arts and humanities. Renowned for their exceptional faculty, cutting-edge facilities, and leading research centers, English higher education institutions offer students unparalleled opportunities to explore their academic interests and pursue their passions.The higher education system in England places great emphasis on academic rigor, critical thinking, and intellectual engagement, nurturing students to delve into complex ideas and develop their analytical and problem-solving skills. This approach equips students with the necessary tools to thrive in an ever-changing global economy, where adaptability, creativity, and innovation are crucial for success. Many English universities and colleges also foster a culture of interdisciplinary collaboration, encouraging scholars from diverse fields to come together and address complex challenges while generating new knowledge.Furthermore, the English higher education system embraces and promotes diversity and inclusivity, providing a welcoming and supportive environment for students from all backgrounds. Institutions in England recognize the value of a diverse student body and actively strive to promote diversity, equity, and inclusion in all aspects of campus life. By engaging with varied perspectives and experiences, students in England gain a deeper understanding of the world around them, cultivating the skills and knowledge necessary to become effective global citizens.Studying in England offers students unparalleled opportunities to attain academic excellence and pursue their aspirations. With access to exceptional resources, world-class faculty, and a vibrant academic community, students in England are well-prepared to make meaningful contributions to society and achieve success in their chosen fields.',
  multiCulturalEnvironment:
    ' England is renowned for its rich cultural heritage and welcoming environment, making it an ideal destination for international students seeking a diverse and inclusive academic experience. English universities and colleges attract a vibrant and dynamic community of scholars and students from around the globe, fostering a tapestry of cultures, languages, and perspectives. Studying in England multicultural environment offers numerous benefits, including the opportunity to engage with diverse viewpoints, develop intercultural communication skills, and gain a deeper understanding of the world. English institutions of higher education are committed to promoting diversity and inclusion, providing a supportive and inclusive atmosphere for students from all backgrounds. Apart from the cultural diversity found on campus, England offers a plethora of cultural attractions and historical landmarks for students to explore. From world-class museums and theaters to breathtaking landscapes and iconic landmarks, England provides ample opportunities for students to immerse themselves in its rich history and heritage. Overall, studying in England offers students a unique opportunity to engage with a diverse and inclusive community of scholars and students, expanding their horizons and preparing them for success in an interconnected world.',
  affordableEducation:
    'Affordability is a major consideration for many students considering studying in England. The cost of higher education in England can vary depending on the institution and program of study. However, there are various options available to make education more accessible and affordable for students. The UK government provides financial support through student loans, which are designed to cover tuition fees and living expenses. These loans are income-contingent, meaning that repayment is based on the graduate income after completing their studies. Additionally, there are scholarships, grants, and bursaries offered by universities, charitable organizations, and government agencies to help students with the cost of education. Many institutions also provide part-time work opportunities on campus or in the surrounding areas, allowing students to earn money to support themselves while studying. By exploring these financial aid options and managing their finances wisely, students can pursue their education in England without undue financial strain.',
  employment:
    'Employment opportunities are a crucial factor for many students considering studying in England. England boasts a dynamic job market that offers a wide range of career prospects across various sectors. English universities and colleges prioritize equipping students with the necessary tools to secure employment after graduation, often providing access to career services, internships, and networking events. Many educational institutions in England also maintain partnerships with local businesses and organizations, facilitating valuable connections and work experience opportunities for students.International students in England can benefit from numerous work opportunities during their studies. These include on-campus employment and internships tailored to their program of study. Additionally, depending on their specific field, students may be eligible for post-graduation work permits, such as the Tier 2 Visa, which allows them to stay in England and work for a specified period. This presents an excellent opportunity for students to gain practical work experience and establish professional networks in their desired industry',
  qualityOfLife:
  'England offers students an exceptional quality of life while studying in the country. The nation provides a wide array of resources and services that contribute to a comfortable and fulfilling experience. Students in England can benefit from a high standard of healthcare, ensuring access to quality medical care when needed. The country boasts vibrant cities with a rich cultural heritage, offering a diverse range of entertainment options such as museums, theaters, music venues, and sports stadiums. England natural beauty is also remarkable, with picturesque countryside, beautiful coastlines, and charming towns that provide numerous opportunities for exploration and adventure. Moreover, English universities and colleges prioritize the formation of student organizations and clubs, fostering a strong sense of community and social support. This is especially valuable for international students who may be adjusting to a new culture and environment. Additionally, England has a reputation for its safe and secure cities, with low crime rates and a commitment to public safety. Overall, studying in England offers students a high quality of life, granting access to a wide range of resources and services that contribute to a comfortable, secure, and enriching experience. With its rich cultural scene, stunning natural landscapes, and welcoming community spirit, England is an ideal destination for students seeking an exceptional academic and personal journey.',
  conclusion:
  "England is widely recognized for its prestigious academic institutions and vibrant cultural scene, making it an appealing choice for international students seeking a comprehensive and enriching educational experience. Renowned for its history, literature, and innovation, England offers a diverse and inclusive academic environment that fosters intellectual growth and cultural exploration. The country's universities and colleges attract a wide range of students and scholars from around the world, creating a multicultural tapestry of knowledge, ideas, and perspectives. Studying in England allows students to engage with a rich variety of viewpoints, enhance their intercultural communication skills, and develop a global mindset. The educational institutions in England are dedicated to promoting diversity and inclusivity, ensuring that students from all backgrounds feel supported and valued. Alongside the multicultural atmosphere on campus, England offers a plethora of cultural attractions and natural wonders for students to discover. From world-class museums and theaters to picturesque landscapes and historical landmarks, the country provides abundant opportunities for students to immerse themselves in its vibrant history and heritage. In summary, studying in England provides students with an exceptional chance to become part of a diverse and inclusive community of scholars and students, expanding their horizons and equipping them for success in an interconnected world.",
};

const visaData = {
  about: {
    content:
      'England is a popular destination for international students seeking a quality education. With a diverse range of universities and colleges, England offers numerous academic programs and disciplines to cater to various interests and career goals. Many of these institutions are internationally recognized for their research and innovation, and graduates from English universities are highly valued by employers worldwide. Studying in England also provides opportunities for cultural immersion and personal growth, as students can experience the vibrant diversity of English society and explore its rich historical and cultural heritage. In summary, studying in England can be a life-changing experience that offers both academic and personal advantages.',
  },
  firstHeading: {
    heading: 'England Visa',
    content:
      "Studying in England is a dream come true for many international students, and obtaining a student visa is an essential part of making that dream a reality. The process of applying for an English study visa can be complex and time-consuming, requiring careful preparation and attention to detail. To obtain a study visa, students must first apply to an English institution and receive an acceptance letter, after which they can begin the visa application process. The application process for an English study visa can be a daunting prospect for many international students, particularly those who are unfamiliar with the English immigration system. However, with the right preparation and guidance, it can be navigated successfully. Students must demonstrate that they have sufficient financial resources to support themselves during their studies and provide academic transcripts to show that they meet the institution's admission requirements. They must also attend an interview at an English embassy or consulate, during which they will be asked about their plans for studying in England and their ties to their home country. Despite the challenges of the visa application process, the benefits of studying in England are many. England is home to some of the world's most renowned universities and offers a diverse range of academic programs across a wide range of disciplines. Studying in England provides students with access to world-class facilities and resources, as well as opportunities for research and professional development. Additionally, the multicultural environment of English universities offers international students the chance to broaden their horizons and build cross-cultural skills that will serve them well in their personal and professional lives. Moreover, the process of obtaining an English study visa can be a valuable learning experience in itself, helping students develop important skills such as time management, organization, and communication. Many English institutions offer resources and support services to help international students navigate the visa application process, including workshops, online resources, and dedicated staff who can answer questions and provide guidance. With the right support and preparation, the process of obtaining an English study visa can be a positive and rewarding experience for international students seeking to further their education and career prospects in England.",
  },
  secondHeading: {
    heading: 'Types of England Visa',
    content:
      "England offers a diverse range of visa categories, each with its own specific requirements and eligibility criteria. Similar to Germany, there are various visa options available for individuals planning to travel to England. Tourist visas, known as Standard Visitor visas, are intended for individuals visiting England for leisure or medical purposes. Business visas, or Business Visitor visas, are designed for individuals traveling to England for business-related activities such as attending conferences, meetings, or conducting research.For those seeking employment in England, there are several visa categories to consider. The Skilled Worker visa is available for highly skilled professionals and grants them the right to live and work in England. The Innovator visa is designed for individuals who wish to establish innovative businesses in England. Additionally, there are specific visas for self-employed individuals, freelancers, and entrepreneurs who want to start businesses in England.England also offers various visa options for individuals looking to immigrate permanently. Family reunification visas are available for individuals who have family members residing in England. There are also employment-based visas for skilled workers in high-demand occupations. The British government has established specific criteria and processes for each of these visa categories.Navigating the complex landscape of English visas can be challenging, but with the appropriate guidance and support, it is possible to find the visa that best matches your needs and eligibility. It is crucial to thoroughly assess your goals and intentions for traveling to England and to seek advice from immigration professionals or experienced travelers who can provide valuable insight and assistance throughout the visa application process.",
  },
  thirdHeading: {
    heading: 'England Study Visa Documents',
    content:
      "England offers a diverse range of visa categories, each with its own specific requirements and eligibility criteria. Similar to Germany, there are various visa options available for individuals planning to travel to England. Tourist visas, known as Standard Visitor visas, are intended for individuals visiting England for leisure or medical purposes. Business visas, or Business Visitor visas, are designed for individuals traveling to England for business-related activities such as attending conferences, meetings, or conducting research.For those seeking employment in England, there are several visa categories to consider. The Skilled Worker visa is available for highly skilled professionals and grants them the right to live and work in England. The Tier 2 Intra-Company Transfer visa allows multinational companies to transfer skilled employees to their branches in England. Additionally, there are specific visas for self-employed individuals, freelancers, and entrepreneurs who wish to establish businesses in England.England also offers various visa options for individuals looking to immigrate permanently. Family reunification visas are available for individuals who have family members residing in England. There are also employment-based visas for skilled workers in high-demand occupations. The UK government has established specific criteria and processes for each of these visa categories.Navigating the complex landscape of English visas can be challenging, but with the appropriate guidance and support, it is possible to find the visa that best matches your needs and eligibility. It is crucial to thoroughly assess your goals and intentions for traveling to England and to seek advice from immigration professionals or experienced travelers who can provide valuable insight and assistance throughout the visa application process.",
  },
  fourthHeading: {
    heading: 'England Visa Fee',
    content:
      "The cost of a study visa for England varies depending on the type of visa and the applicant's country of origin. In addition to the visa application fee, there may be additional charges for services like biometric data collection, visa processing, or expedited services. As of 2023, the fee for a nonimmigrant student visa (Tier 4 visa) is £348, with additional fees specific to England. These fees are utilized to support the visa application process and administrative services. It's important to note that the visa application fee is typically non-refundable, even if the visa is ultimately denied. Moreover, certain countries may require additional fees or taxes in addition to the standard visa fees, so it's crucial to thoroughly review the requirements based on the applicant's specific country of origin. While the cost of an English study visa can be significant, it should be regarded as an investment in one's education and future career prospects. There may be scholarship or funding opportunities available to help mitigate the expenses of studying in England, and many institutions offer resources and support to assist international students in managing the financial aspects of studying abroad. By carefully planning and budgeting for the cost of an English study visa, students can ensure they maximize their academic opportunities in the country.",
  },
};

const uniData = [
    'University of Oxford',
    'University of Cambridge',
    'Imperial College London',
    'University College London',
    'London School of Economics and Political Science',
    'University of Edinburgh',
    'King College London',
    'University of Manchester',
    'University of Bristol',
    'University of Warwick',
    'University of Glasgow',
    'University of Southampton',
    'University of Birmingham',
    'University of Leeds',
    'University of Sheffield',
    'University of Nottingham',
    'University of Liverpool',
    'University of Newcastle',
    'University of Exeter',
    'Durham University',
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
          src={england}
          className="country-page-mainHeading-section-img"
          alt="flag"
        ></img>
        <h1>England</h1>
        <p>
          Home {'>'} Visa For Study {'>'} England
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
          <Article  articleData={articleData} imageSource={englandarticle}></Article>
        )}

        {activeButton === 'visa' && (
          <Visa visaData={visaData} imageSource={englandvisa}></Visa>
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
          <Link className="link" to="/germany">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={germany} alt="flag"></img>
              <span>Germany Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/japan">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={japan} alt="flag"></img>
              <span>Japan Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/usa">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={usa} alt="flag"></img>
              <span>USA Study Visa</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}