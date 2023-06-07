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
import japanarticle from '../../assets/VisaForStudy/japanarticle.png';
import japanvisa from '../../assets/VisaForStudy/japanvisa.png';

const articleData = {
  about:
    'Japan is a renowned destination for international students aspiring to receive a high-quality education. With a wide array of universities and colleges to choose from, Japan provides a diverse range of academic programs and disciplines that cater to different interests and career aspirations. Many of these institutions are renowned for their cutting-edge research and innovation, and graduates from Japanese universities are highly sought after by employers globally. Studying in Japan also offers opportunities for cultural immersion and personal development, as students can experience the unique traditions and rich cultural heritage of the country. Overall, studying in Japan can be a transformative experience that provides both academic excellence and personal growth.',
  academicExcellence:
    'Academic excellence is a defining characteristic of higher education in Japan. With a rich tradition of intellectual rigor and a focus on innovation, Japanese universities and colleges are at the forefront of research, technological advancements, and educational quality in a wide range of fields, from science and technology to the arts and humanities. Japanese higher education institutions are renowned for their distinguished faculty, state-of-the-art facilities, and cutting-edge research centers, providing students with exceptional opportunities to explore their academic interests and pursue their passions.The higher education system in Japan places a strong emphasis on academic rigor, critical thinking, and intellectual curiosity, encouraging students to engage with complex ideas and develop their analytical and problem-solving skills. This approach equips students with the necessary skills to thrive in a rapidly evolving global economy, where adaptability, creativity, and innovation are paramount. Many Japanese universities and colleges also foster a culture of interdisciplinary collaboration, bringing together experts from various fields to address complex challenges and generate new knowledge.Moreover, the Japanese higher education system values diversity and inclusivity, creating a welcoming and supportive environment for students from all backgrounds. Institutions in Japan recognize the importance of a diverse student body and actively promote diversity, equity, and inclusion in all aspects of campus life. By engaging with different perspectives and experiences, students in Japan gain a deeper understanding of the world around them and cultivate the skills and knowledge needed to become effective global citizens.Studying in Japan provides students with unparalleled opportunities to achieve academic excellence and pursue their goals. With access to outstanding resources, renowned faculty, and a dynamic academic community, students in Japan are well-prepared to make meaningful contributions to society and achieve success in their chosen fields.',
  multiCulturalEnvironment:
    ' Japan is renowned for its rich cultural heritage and welcoming environment, making it an ideal destination for international students seeking a diverse and inclusive academic experience. Japanese universities and colleges attract a vibrant and dynamic community of scholars and students from around the globe, fostering a tapestry of cultures, languages, and perspectives. Studying in Japan multicultural environment offers numerous benefits, including the opportunity to engage with diverse viewpoints, develop intercultural communication skills, and gain a deeper understanding of the world. Japanese institutions of higher education are committed to promoting diversity and inclusion, providing a supportive and inclusive atmosphere for students from all backgrounds. Apart from the cultural diversity found on campus, Japan offers a plethora of cultural attractions and natural wonders for students to explore. From world-class museums and theaters to breathtaking landscapes and historical landmarks, Japan provides ample opportunities for students to immerse themselves in its rich history and heritage. Overall, studying in Japan offers students a unique opportunity to engage with a diverse and inclusive community of scholars and students, expanding their horizons and preparing them for success in an interconnected world.',
  affordableEducation:
    'In Japan, affordability is also a significant consideration for students seeking higher education. The cost of tuition and living expenses can vary depending on the university and location. However, there are several avenues available to help make education more affordable for students in Japan. Scholarships and grants are offered by various institutions, both at the national and local levels, to support students financially. The Japanese government provides scholarships specifically for international students, such as the Monbukagakusho Scholarship (MEXT), which covers tuition fees, living expenses, and other support for selected students. Additionally, universities in Japan often offer their own scholarships and financial aid programs based on academic merit or specific criteria. Students can also explore part-time work opportunities while studying in Japan, although it important to ensure that work hours are manageable alongside academic commitments. With careful financial planning and by taking advantage of available scholarships and work opportunities, students can make higher education in Japan more affordable and accessible.',
  employment:
    'Employment opportunities are a crucial factor for many students considering studying in Japan. Japan boasts a vibrant job market that offers a diverse range of career prospects across various industries. Japanese universities and colleges prioritize equipping students with the necessary tools to secure employment after graduation, often providing access to career services, internships, and networking events. Many educational institutions in Japan also maintain partnerships with local businesses and organizations, facilitating valuable connections and work experience opportunities for students.International students in Japan can benefit from numerous work opportunities during their studies. These include on-campus employment and internships tailored to their program of study. Additionally, depending on their specific field, students may be eligible for post-graduation work permits, such as the Designated Activities Visa, which allows them to stay in Japan for a specified period to search for employment. This presents an excellent opportunity for students to gain practical work experience and establish professional networks in their desired industry.',
  qualityOfLife:
  'Japan offers students an exceptional quality of life during their studies in the country. With its unique blend of tradition and modernity, Japan provides students with access to a wide range of resources and services that enhance their overall experience. The country is known for its excellent healthcare system, ensuring that students have access to high-quality medical care whenever necessary. Japanese cities offer a vibrant cultural scene, where students can enjoy various forms of entertainment such as museums, traditional theaters, contemporary music venues, and state-of-the-art sports facilities. Japan natural beauty is also breathtaking, with its iconic cherry blossoms, serene gardens, majestic mountains, and tranquil lakes, providing countless opportunities for exploration and adventure. Moreover, Japanese universities and colleges encourage the establishment of student organizations and clubs, fostering a strong sense of community and support. This is particularly beneficial for international students who may be adapting to a new culture and language. Additionally, Japan is renowned for its safety and security, with low crime rates and a commitment to public well-being. Overall, studying in Japan offers students a high quality of life, providing access to a range of resources and services that contribute to a comfortable, secure, and enriching experience. With its unique cultural heritage, stunning natural landscapes, and warm community atmosphere, Japan is an ideal destination for students seeking an exceptional academic and personal journey.',
  conclusion:
  "Japan is renowned for its unique blend of ancient traditions and cutting-edge technology, making it an enticing destination for international students seeking an immersive and culturally rich educational experience. Japanese universities and colleges attract a vibrant and dynamic community of students from around the globe, creating a multicultural and forward-thinking environment. Studying in Japan offers students the opportunity to engage with diverse perspectives, foster intercultural communication skills, and gain a profound understanding of the world. Japanese institutions of higher education are committed to promoting diversity and inclusion, providing a supportive and inclusive atmosphere for students from all walks of life. Apart from the multicultural ambiance on campus, Japan offers a myriad of cultural treasures and natural wonders for students to explore. From ancient temples and tranquil gardens to bustling cityscapes and technological marvels, Japan provides ample opportunities for students to immerse themselves in its rich history and heritage. Overall, studying in Japan allows students to become part of a diverse and inclusive community of scholars and students, enabling them to broaden their horizons and prepare for success in an interconnected world while experiencing the unique charm of Japanese culture.",
};

const visaData = {
  about: {
    content:
    'Japan is a renowned destination for international students aspiring to receive a high-quality education. With a wide array of universities and colleges to choose from, Japan provides a diverse range of academic programs and disciplines that cater to different interests and career aspirations. Many of these institutions are renowned for their cutting-edge research and innovation, and graduates from Japanese universities are highly sought after by employers globally. Studying in Japan also offers opportunities for cultural immersion and personal development, as students can experience the unique traditions and rich cultural heritage of the country. Overall, studying in Japan can be a transformative experience that provides both academic excellence and personal growth.',
  },
  firstHeading: {
    heading: 'Japan Visa',
    content:
      "Studying in Japan is a dream come true for many international students, and obtaining a student visa is an essential part of making that dream a reality. The process of applying for a Japanese study visa can be complex and time-consuming, requiring careful preparation and attention to detail. To obtain a study visa, students must first apply to a Japanese institution and receive an acceptance letter, after which they can begin the visa application process. The application process for a Japanese study visa can be a daunting prospect for many international students, particularly those who are unfamiliar with the Japanese immigration system. However, with the right preparation and guidance, it can be navigated successfully. Students must demonstrate that they have sufficient financial resources to support themselves during their studies and provide academic transcripts to show that they meet the institution's admission requirements. They must also attend an interview at a Japanese embassy or consulate, during which they will be asked about their plans for studying in Japan and their ties to their home country. Despite the challenges of the visa application process, the benefits of studying in Japan are many. Japan is home to some of the world's most renowned universities and offers a diverse range of academic programs across a wide range of disciplines. Studying in Japan provides students with access to world-class facilities and resources, as well as opportunities for research and professional development. Additionally, the multicultural environment of Japanese universities offers international students the chance to broaden their horizons and build cross-cultural skills that will serve them well in their personal and professional lives. Moreover, the process of obtaining a Japanese study visa can be a valuable learning experience in itself, helping students develop important skills such as time management, organization, and communication. Many Japanese institutions offer resources and support services to help international students navigate the visa application process, including workshops, online resources, and dedicated staff who can answer questions and provide guidance. With the right support and preparation, the process of obtaining a Japanese study visa can be a positive and rewarding experience for international students seeking to further their education and career prospects in Japan.",
  },
  secondHeading: {
    heading: 'Types of Japan  Visa',
    content:
      "Japan offers a wide range of visa categories, each with its own specific requirements and eligibility criteria. Similar to Germany, there are various visa options available for individuals planning to travel to Japan. Tourist visas, known as Temporary Visitor visas, are intended for individuals visiting Japan for leisure or medical purposes. Business visas, or Business Manager visas, are designed for individuals traveling to Japan for business-related activities such as attending conferences, meetings, or conducting research. For those seeking employment in Japan, there are several visa categories to consider. The Highly Skilled Professional visa is available for individuals with exceptional skills and expertise, granting them the right to live and work in Japan. The Specified Skilled Worker visa allows individuals to reside in Japan while working in specific industries that are facing labor shortages. Additionally, there are specific visas for self-employed individuals, freelancers, and entrepreneurs who wish to establish businesses in Japan.Japan also offers various visa options for individuals looking to immigrate permanently. Spouse or Child of Japanese National visas are available for individuals who have family members residing in Japan. There are also employment-based visas for skilled workers in high-demand occupations. The Japanese government has established specific criteria and processes for each of these visa categories.Navigating the complex landscape of Japanese visas can be challenging, but with the appropriate guidance and support, it is possible to find the visa that best matches your needs and eligibility. It is crucial to thoroughly assess your goals and intentions for traveling to Japan and to seek advice from immigration professionals or experienced travelers who can provide valuable insight and assistance throughout the visa application process.",
  },
  thirdHeading: {
    heading: 'Japan Study Visa Documents',
    content:
      "Japan offers a diverse range of visa categories, each with its own specific requirements and eligibility criteria. Similar to other countries, there are various visa options available for individuals planning to travel to Japan. Tourist visas are intended for individuals visiting Japan for leisure or medical purposes. Business visas are designed for individuals traveling to Japan for business-related activities such as attending conferences, meetings, or conducting research.For those seeking employment in Japan, there are several visa categories to consider. The Highly Skilled Professional Visa is available for individuals with specialized skills and grants them the right to live and work in Japan. The Specified Skilled Worker Visa allows individuals to work in specific industries where there is a shortage of labor. Additionally, there are specific visas for self-employed individuals, freelancers, and entrepreneurs who wish to establish businesses in Japan.Japan also offers various visa options for individuals looking to immigrate permanently. Family reunification visas are available for individuals who have family members residing in Japan. There are also employment-based visas for skilled workers in high-demand occupations. The Japanese government has established specific criteria and processes for each of these visa categoriesNavigating the complex landscape of Japanese visas can be challenging, but with the appropriate guidance and support, it is possible to find the visa that best matches your needs and eligibility. It is crucial to thoroughly assess your goals and intentions for traveling to Japan and to seek advice from immigration professionals or experienced travelers who can provide valuable insight and assistance throughout the visa application process.",
  },
  fourthHeading: {
    heading: 'Japan Visa Fee',
    content:
      "The cost of a Japanese study visa varies depending on the type of visa being applied for and the country of origin of the applicant. Along with the visa application fee, there might be additional charges for services such as biometric data collection, visa processing, or expedited services. As of 2023, the fee for a nonimmigrant student visa (F-1 visa) is ¥7,500, with additional fees specific to Japan. These fees are used to support the visa application process and administrative services. It's important to note that the visa application fee is generally non-refundable, even if the visa is ultimately denied. Additionally, some countries may require additional fees or taxes on top of the standard visa fees, so it's crucial to carefully review the requirements for the specific country of origin. While the cost of a Japanese study visa can be significant, it's essential to consider it as an investment in one's education and future career opportunities. There may be scholarship or funding opportunities available to help offset the costs of studying in Japan, and many institutions offer resources and support to help international students navigate the financial aspects of studying abroad. By carefully planning and budgeting for the cost of a Japanese study visa, students can ensure that they are able to make the most of their academic opportunities in Japan.",
  },
};

const uniData = [
    
    'University of Tokyo',
    'Kyoto University',
    'Osaka University',
    'Tohoku University',
    'Hokkaido University',
    'Nagoya University',
    'Keio University',
    'Kyushu University',
    'Tsukuba University',
    'Waseda University',
    'Kobe University',
    'Hiroshima University',
    'Nagasaki University',
    'Yokohama National University',
    'Okayama University',
    'Kanazawa University',
    'Chiba University',
    'Tohoku University of Art and Design',
    'University of Shizuoka',
    'University of Tsukuba',
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
          src={japan}
          className="country-page-mainHeading-section-img"
          alt="flag"
        ></img>
        <h1>Japan</h1>
        <p>
          Home {'>'} Visa For Study {'>'} Japan
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
          <Article  articleData={articleData} imageSource={japanarticle}></Article>
        )}

        {activeButton === 'visa' && (
          <Visa visaData={visaData} imageSource={japanvisa}></Visa>
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
          <Link className="link" to="/england">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={england} alt="flag"></img>
              <span>England Study Visa</span>
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