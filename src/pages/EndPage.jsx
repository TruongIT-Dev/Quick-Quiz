import { Image } from "antd";
import '../App.css';
import { useState } from 'react';
import { Button, Divider, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

import Capybara from '../assets/img/meme/capybara-end.jpg'

export default function EndingPage() {
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
            <div className="container w-screen h-screen flex flex-col justify-center items-center">
                <Image className="rounded-full" width={300} src={Capybara} />
                <a className="btn mt-4" href="#" onClick={showModal}>Kết Quả</a>
            </div>

            <Modal title="Kết quả" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" type='primary' onClick={() => navigate("/", { replace: true })}>
                        Kết thúc Game. Quay lại Home!
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
                                <h3 className="text-xl font-semibold">Bad Ending hay Good Ending ?</h3>
                                <p>Bản thân của Game trong quá trình Chơi đã chia làm hai Ending khác nhau. Nếu bạn đang đi tìm Good Ending thì Game sẽ Good Ending và ngược lại.</p>
                            </div>
                        </div>

                        <Divider style={{ borderColor: '#7cb305', }}>

                        </Divider>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <span className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">Chân thành cảm ơn đã chơi Game do mình tạo ra.</h3>
                                <p>TruongIT-Dev cảm ơn bạn đã dành thời gian. Mình sẽ tạo thêm nhiều trang Web tương tự và cải tiến cái cũ. Chúc bạn một ngày tốt lành!</p>
                            </div>
                        </div>

                        <Divider style={{ borderColor: '#7cb305', }}>

                        </Divider>
                    </div>
                </div>
            </Modal>
        </>
    )
}