import React, { useState } from 'react';
import canada from '../../assets/VisaForStudy/canada.png';
import './country.css';
import Article from '../../components/Article/Article';
import aritcleImg from '../../assets/VisaForStudy/article.png';
import canadaVisaImg from '../../assets/VisaForStudy/canadianVisaImg.png';
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
    'Canada has become one of the top study destinations for international students, offering a wide range of academic programs and a welcoming environment for students from around the world. With its world-class universities, high quality of life, and diverse culture, Canada is an attractive option for students seeking to pursue their academic and career goals. In this article, we will explore some of the key aspects of studying in Canada.',
  academicExcellence:
    "Canada's academic excellence is renowned throughout the world. The country boasts some of the top-ranked universities globally, and it is a hub for academic research and innovation. With a vast array of undergraduate and postgraduate programs, students have the opportunity to study in various fields, including business, engineering, medicine, law, and many more. Canada's academic system also emphasizes practical, hands-on learning opportunities, preparing students for the workforce.Moreover, the country offers a world-class education system with a focus on research and development, providing students with opportunities to work with renowned scholars and industry experts. This focus on research also creates opportunities for students to contribute to new and innovative discoveries that could shape the future of their respective fields. Canada is home to some of the most prestigious universities in the world, including the University of Toronto, McGill University, and the University of British Columbia, to name a few. These institutions offer a range of programs across various fields, from business to engineering to medicine and more. Students have access to world-class facilities, including state-of-the-art laboratories, libraries, and research centers",
  multiCulturalEnvironment:
    "Canada is a country that celebrates diversity and inclusivity, with a multicultural environment that is reflected in its education system. International students can expect to find a welcoming and supportive environment in Canada, with an array of cultural events and resources available to help them adjust to life in a new country.The multicultural environment of Canada provides an excellent opportunity for international students to make new friends from diverse backgrounds, providing them with valuable networking opportunities that can help shape their future careers. Moreover, this inclusivity is a great way for students to learn about different cultures and develop a global perspective, which is increasingly essential in today's interconnected world.",
  affordableEducation:
    "Canada offers an affordable education system compared to other popular study destinations. Tuition fees are reasonable, and the cost of living is relatively low compared to other developed countries. Additionally, the Canadian government provides scholarships, bursaries, and other funding opportunities for international students. This support is a great way for students to focus on their studies without incurring high levels of debt.Many Canadian universities also offer co-op programs that provide students with the opportunity to work and study at the same time. These programs offer valuable work experience that can help students stand out in the job market after graduation. Furthermore, students can take advantage of Canada's excellent public transportation system to explore the country's many attractions and cultural offerings.",
  employment:
    "Canada is a country that values the contributions of immigrants and international students. After graduation, international students have the option of applying for work permits to gain valuable work experience in Canada. The country has a high demand for skilled workers, making it a great place for graduates to start their careers.In addition, the Canadian government offers immigration pathways for students who wish to stay and work in Canada after completing their studies. The government's immigration programs are designed to attract highly skilled workers, making it easier for international students to gain permanent residency in Canada. This means that international students have a clear pathway to gaining permanent residency in Canada, making it an attractive destination for those who wish to build their careers in the country.",
  qualityOfLife:
    "Canada is known for its high quality of life, with a great standard of living, a safe and secure environment, and a thriving cultural scene. Students can enjoy a range of outdoor activities such as skiing, hiking, and camping, as well as cultural events such as music festivals, art exhibits, and theatre performances. The country's healthcare system is also top-notch, providing access to quality healthcare for all residents.Moreover, Canada's friendly and welcoming society provides international students with a supportive environment in which to learn and grow. The country's commitment to inclusivity and diversity creates a welcoming atmosphere that helps students feel at home in a new country. This friendly environment also",
  conclusion:
    'In conclusion, Canada offers a wide range of opportunities for international students seeking high-quality education and a welcoming environment. With its academic excellence, multicultural society, affordable education system, employment and immigration opportunities, and high quality of life, Canada is an attractive destination for students seeking to pursue their academic and career goals.',
};

const visaData = {
  about: {
    content:
      "Canada is a popular destination for international students seeking higher education. The country boasts a diverse and multicultural environment, top-ranked universities, and a high quality of life. To study in Canada, international students need to obtain a study permit, which is a document that allows them to study at designated learning institutions in Canada.To apply for a Canadian study permit, students need to have an acceptance letter from a Canadian designated learning institution, proof of financial support, and a clean criminal record. They also need to undergo a medical examination to ensure that they are not a danger to public health or safety.Canada offers a wide range of programs for international students, including undergraduate, graduate, and postgraduate programs. The country's universities are known for their high academic standards, cutting-edge research facilities, and world-renowned faculty. Many Canadian universities offer scholarships and bursaries to international students, making it easier for them to finance their education.",
  },
  firstHeading: {
    heading: 'Canadian Visa',
    content:
      "International students studying in Canada also have the opportunity to work part-time on campus, which can help them gain valuable work experience and offset their living expenses. After graduation, students may be eligible for a post-graduation work permit, which allows them to work in Canada for up to three years. This can be an excellent opportunity for students who want to gain Canadian work experience and potentially transition to permanent residency.Aside from its world-class education system, Canada is also known for its high quality of life. The country offers a safe and welcoming environment for international students, with a low crime rate and a strong social support system. Canada's diverse population and multicultural environment make it easy for international students to feel at home and form lasting connections with people from all over the world.Canada is also known for its natural beauty, with stunning landscapes ranging from the rugged Rocky Mountains to the pristine coastlines of the Atlantic and Pacific oceans. International students studying in Canada have the opportunity to explore these natural wonders and experience the country's unique culture and traditions.",
  },
  secondHeading: {
    heading: 'Types of Canadian Visa',
    content:
      "There are different types of Canadian visas available to individuals who wish to visit or study in Canada. The most common types of visas include visitor visas, study permits, work permits, and permanent resident visas.A visitor visa is for individuals who wish to visit Canada for a short period, usually for tourism or visiting family and friends. A study permit is for individuals who wish to study at a designated learning institution in Canada. A work permit is for individuals who wish to work in Canada, either temporarily or permanently. Finally, a permanent resident visa is for individuals who wish to live in Canada permanently.It's important to note that each type of visa has its own specific requirements and application process. For example, to obtain a study permit, individuals must have an acceptance letter from a Canadian designated learning institution and proof of financial support. To obtain a work permit, individuals must have a job offer from a Canadian employer and meet certain eligibility requirements.In addition, the process for obtaining a Canadian visa can be complex and time-consuming. It's important to seek advice and guidance from a qualified immigration consultant or lawyer to ensure that the application process is smooth and successful.",
  },
  thirdHeading: {
    heading: 'Canadian Study Visa Documents',
    content:
      "When applying for a Canadian study visa, there are several documents that you will need to provide as part of your application. These documents typically include a valid passport, a letter of acceptance from a designated learning institution in Canada, proof of financial support, and evidence of language proficiency.In addition to these required documents, you may also be asked to provide other supporting documents such as academic transcripts, medical records, and a police certificate. It's important to ensure that all documents are accurate, complete, and submitted on time to avoid delays or rejection of your application.It's also important to note that the specific document requirements may vary depending on your country of origin and the program of study you are pursuing. It's therefore recommended to consult with a qualified immigration consultant or lawyer who can provide guidance on the specific documents needed for your application.Overall, submitting the correct and complete documents is essential in obtaining a Canadian study visa. Make sure to carefully review the requirements and seek advice if needed to ensure a successful application process",
  },
  fourthHeading: {
    heading: 'Canadian Study Visa Fee',
    content:
      "When applying for a Canadian study visa, there is a fee that must be paid as part of the application process. The fee can vary depending on the type of visa and the length of stay in Canada, but generally ranges from CAD $150 to $500.It's important to note that the visa fee is non-refundable, even if the application is denied. Therefore, it's important to carefully review the eligibility requirements and ensure that all necessary documents are submitted with the application.In addition to the visa fee, there may be other fees associated with studying in Canada, such as tuition, textbooks, and living expenses. It's important to carefully budget for these expenses and explore available financial aid options such as scholarships, bursaries, and grants.Overall, obtaining a Canadian study visa involves paying a non-refundable fee as part of the application process. Make sure to carefully budget for all associated expenses and explore available financial aid options to help make studying in Canada more affordable.",
  },
};

const uniData = [
  'University of Toronto',
  'University of British Columbia',
  'McGill University',
  'University of Alberta',
  'University of Waterloo',
  'McMaster University',
  'University of Ottawa',
  'University of Calgary',
  'Western University',
  "Queen's University",
  'Simon Fraser University',
  'Dalhousie University',
  'York University',
  'University of Manitoba',
  'Concordia University',
  'Carleton University',
  'Ryerson University',
  'University of Saskatchewan',
  'University of Guelph',
  'Memorial University of Newfoundland',
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
          src={canada}
          className="country-page-mainHeading-section-img"
          alt="flag"
        ></img>
        <h1>Canada</h1>
        <p>
          Home {'>'} Visa For Study {'>'} Canada
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
        <div className="showMoreBtn-containerDiv">
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
          <Link className="link" to="/">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={usa} alt="flag"></img>
              <span>USA Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={england} alt="flag"></img>
              <span>England Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={japan} alt="flag"></img>
              <span>Japan Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/">
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
