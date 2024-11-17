import { useState } from 'react';
import { Modal, Button, Image } from 'antd';
import { questions } from '../apis/question';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/quiz.css';
import '../../index.css';

import Image1 from '../assets/img/question/chibi-ques-1.jpg';
import Image2 from '../assets/img/question/chibi-ques-2.jpg';
import Image3 from '../assets/img/question/chibi-ques-3.jpg';
import Image4 from '../assets/img/question/chibi-ques-4.jpg';
import Image5 from '../assets/img/question/chibi-ques-5.jpg';

import CorrectImage1 from '../assets/img/happy/hoyo-chibi-1.jpg'
import CorrectImage2 from '../assets/img/happy/hoyo-chibi-2.jpg'
import CorrectImage3 from '../assets/img/happy/hoyo-chibi-3.jpg'

import IncorrectImage1 from '../assets/img/sad/hoyo-chibi-1.png';
import IncorrectImage2 from '../assets/img/sad/hoyo-chibi-2.png';
import IncorrectImage3 from '../assets/img/sad/hoyo-chibi-3.png';
import IncorrectImage4 from '../assets/img/sad/hoyo-chibi-4.png';


const QuizPage = () => {
    const navigate = useNavigate();

    const QuestImages = [Image1, Image2, Image3, Image4, Image5];
    const CorrectImages = [CorrectImage1, CorrectImage2, CorrectImage3]
    const IncorrectImages = [IncorrectImage1, IncorrectImage2, IncorrectImage3, IncorrectImage4]

    const [isModalAnswerOpen, setIsModalAnswerOpen] = useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);

    const [currentQuestImage, setCurrentQuestImage] = useState(Math.floor(Math.random() * QuestImages.length));

    const [currentCorrectImage, setCurrentCorrectImage] = useState(Math.floor(Math.random() * CorrectImages.length));
    const [currentIncorrectImage, setCurrentIncorrectImage] = useState(Math.floor(Math.random() * IncorrectImages.length));

    const currentQuestion = questions[currentQuestionIndex];

    const handleChoiceClick = (choice) => {
        setSelectedChoice(choice);
    };

    const handleAnswer = () => {
        if (selectedChoice !== currentQuestion.correctAnswer) {
            // If the answer is incorrect, show the modal with feedback
            showModal();
        } else {
            // Correct answer logic (if needed)
            showModal();
        }
    };

    const showModal = () => {
        setIsModalAnswerOpen(true);
        let randomIndex;

        if (selectedChoice === currentQuestion.correctAnswer) {
            do {
                randomIndex = Math.floor(Math.random() * CorrectImages.length);
            } while (randomIndex === currentCorrectImage);
            setCurrentCorrectImage(randomIndex);
        } else {
            do {
                randomIndex = Math.floor(Math.random() * IncorrectImages.length);
            } while (randomIndex === currentIncorrectImage);
            setCurrentIncorrectImage(randomIndex);
        }
    };

    const handleOk = () => {
        setIsModalAnswerOpen(false);

        // Check if this is the last question
        if (currentQuestionIndex >= questions.length - 1) {
            // If it is the last question, navigate to the result page
            navigate('/ending');
        } else {
            // Otherwise, move to the next question
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedChoice(null); // Reset choice for the next question
            getRandomImage();
        }
    };

    const handleCancel = () => {
        setIsModalAnswerOpen(false);
    };

    const getRandomImage = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * QuestImages.length);
        } while (randomIndex === currentQuestImage);

        setCurrentQuestImage(randomIndex);
    };

    return (
        <>
            <div className="quiz-container">
                <div className="quiz-box">
                    <div>
                        <Image
                            width={200}
                            src={QuestImages[currentQuestImage]}
                        />
                        <div className='mx-4'>
                            <Button danger type="text" onClick={getRandomImage}>
                                Đổi Ảnh
                            </Button>
                        </div>
                    </div>

                    <h2 className="question">{currentQuestion.question}</h2>

                    <div className="choices">
                        {currentQuestion.choices.map((choice, index) => (
                            <button
                                key={index}
                                className={`choice-button ${selectedChoice === choice ? 'selected' : ''}`}
                                onClick={() => handleChoiceClick(choice)}
                            >
                                {choice}
                            </button>
                        ))}
                    </div>

                    <div className="navigation-buttons">
                        <button className="next-button" onClick={handleAnswer}>
                            Trả lời
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                open={isModalAnswerOpen}
                title="Kết quả"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Làm lại
                    </Button>,
                    <Button key="submit" type="default" onClick={handleOk}>
                        Câu hỏi tiếp
                    </Button>,
                ]}
            >
                {selectedChoice === currentQuestion.correctAnswer ?
                    (
                        <>
                            <div className='flex flex-col justify-center items-center'>
                                <Image
                                    width={200}
                                    src={CorrectImages[currentCorrectImage]}
                                />
                                <p className='mt-4'>
                                    {currentQuestion.correctmessage}
                                </p>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className='flex flex-col justify-center items-center'>
                                <Image
                                    width={200}
                                    src={IncorrectImages[currentIncorrectImage]}
                                />
                                <p className='mt-4'>
                                    {currentQuestion.incorrectMessage}
                                </p>
                            </div>
                        </>
                    )}

            </Modal>
        </>
    );
};

export default QuizPage;
