import { Image } from "antd";
import '../../App.css';


import Meme2 from '../../assets/img/meme/meme-2.jpg';



export default function NotObeyRule() {
    return (
        <>
            <div className="container w-screen h-screen rounded-full flex flex-col justify-center items-center">
                <Image className="rounded-full"
                    width={500}
                    src={Meme2}
                />

                <h1>Không ngờ phải không! Hiểu quá mà.</h1>

                <a className="btn" href="/">Quay lại</a>
            </div>

        </>
    )
}