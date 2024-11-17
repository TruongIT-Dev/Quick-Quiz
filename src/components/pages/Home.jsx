import '../../App.css';
import { useState } from 'react';
import { Button, Divider, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="container w-screen h-screen flex justify-center items-center mx-auto p-8">
                <div id="home" className="flex justify-center items-center flex-col">
                    <h1 className="">Quick Quiz</h1>
                    <a className="btn" href="/quiz">Bắt Đầu</a>
                    <a className="btn" href="#" onClick={showModal}>Luật Chơi</a>
                </div>
            </div>

            <Modal title="Luật Chơi Như Sau:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" type='primary' onClick={() => navigate("/not-obey-rule", { replace: true })}>
                        Tôi đã không hiểu và sẽ không tuân thủ Luật Chơi    
                    </Button>,
                    <Button className='mt-4' key="back" type='primary' danger onClick={handleOk}>
                        Đã rõ Luật và sẵn sàng Chơi.
                    </Button>,
                ]}
            >
                <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
                    <h1 className="text-3xl font-bold text-center mb-6">How to Play the Game</h1>
                    <div className="space-y-4">

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Đây là Game mang tính chất giải trí dạng Multiple Choices.</h3>
                                <p>Game dạng câu hỏi trắc nghiệm, được tạo ra nhằm mục đích giúp bày tỏ nội tâm mà người viết muốn gửi đến cho người chơi.</p>
                            </div>
                        </div>

                        <Divider style={{ borderColor: '#7cb305', }}>

                        </Divider>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Đọc kỹ câu hỏi.</h3>
                                <p>Người chơi cần trả lời câu hỏi hiện tại để qua câu hỏi tiếp theo được. Những câu hỏi đều chứa đụng cảm xúc mà người viết muốn gửi bạn</p>
                            </div>
                        </div>

                        <Divider style={{ borderColor: '#7cb305', }}>

                        </Divider>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">3</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Chọn câu trả lời.</h3>
                                <p>Game có một đáp án Good Ending và ba đáp án Bad Ending. Nếu chọn đúng thì sẽ được Good Ending, và ngược lại chọn sai thì sẽ là Bad Ending.</p>
                            </div>
                        </div>

                        <Divider style={{ borderColor: '#7cb305', }}>

                        </Divider>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">4</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Hình ảnh đa dạng</h3>
                                <p>Game đã được thiết lập, với mỗi câu hỏi khác nhau sẽ có những ảnh Chibi tương ứng với câu hỏi đó. Tương tự với từng câu trả lời.</p>
                            </div>
                        </div>

                        <Divider style={{ borderColor: '#7cb305', }}>

                        </Divider>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">5</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Kết thúc Trò Chơi</h3>
                                <p>Sau khi hoàn tất toàn bộ câu hỏi, Game sẽ dẫn bạn đến Kết quả của Trò Chơi. Game sẽ tiết lộ cho bạn rằng sẽ là Good Ending hay Bad Ending.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}